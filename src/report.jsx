import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Progress } from "antd";
import { imageDb } from './firebase/index';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as V4 } from 'uuid';
import "./components/css/page.css";
import "./components/css/page1.css";

// Components
import ReportCover from "./components/ReportCover";
import GeneSummary from "./components/GeneSummary";
import GeneDetailsPage from "./components/GeneDetailsPage";
import { maleFertilityGenesData } from './data';
import { femaleFertilityGenesData } from './data';

// Data
import { initialCardData, hairGeneticsGenesData } from './data';

function Report() {
  const { id } = useParams();
  const [kit, setkit] = useState(null);
  const [Kittype, setKittype] = useState(null);
  const [reportTitle, setReportTitle] = useState('Male');
  const [loading, setLoading] = useState(false);
  const [updatedGene, setUpdatedGene] = useState(['MTHFR', 'VDR', 'SOD2', 'GC', 'TMPRSS6', 'DHCR7/NADSYN1', 'PNPLA3', 'FUT2', 'COL1A1', '20p11 region', '20p11 region', 'AR upstream', 'SRD5A2', 'PTGES2', 'PTGFR', 'PTGDR2', 'CRABP2', 'SLC45A2', 'ADRB2'])
  const [genes, setGenes] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [pdfResult, setPdfResult] = useState(null);
  const [isSavingPdf, setIsSavingPdf] = useState(false);
  const hasSavedPdf = useRef(false);

  // Get API URL from environment variables
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  // Calculated values
  const totalPages = Math.ceil(genes.length / itemsPerPage);

  // Function to get gene data based on report title
  // const getGeneData = (reportType) => {
  //   if (reportType === 'Male Fertility') {
  //     return maleFertilityGenesData;
  //   } else if (reportType === 'Female Fertility') {
  //     return femaleFertilityGenesData;
  //   } else {
  //     // Default: Hair Genetics
  //     return hairGeneticsGenesData.filter((item) => updatedGene.includes(item.Gene));
  //   }
  // };

  // Fetch DNA Category from backend
  const fetchDnaCategory = async (reportName) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/getcategory`,
        { reportName },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.success && response.data.data) {
        const categoryData = response.data.data;
        // Update report title based on API response
        setReportTitle(categoryData.reportName);
        setGenes(categoryData.category)
        return categoryData;
      }
    } catch (error) {
      console.error('Error fetching DNA category:', error);
    }
  };

  // Save result data to Firebase and return the URL
  const saveResultToFirebase = async () => {
    try {
      const pdfId = V4();
      const pdfRef = ref(imageDb, `reports/${id}/${pdfId}.pdf`);

      // Generate PDF from pages
      const pdf = new jsPDF();
      const pages = document.querySelectorAll(".page");
      
      if (pages.length === 0) {
        console.warn("No pages found with selector .page");
        return null;
      }

      console.log(`Starting PDF generation for ${pages.length} pages`);

      for (let i = 0; i < pages.length; i++) {
        console.log(`Processing page ${i + 1} of ${pages.length}`);
        
        try {
          const canvas = await html2canvas(pages[i], { 
            scale: 1.5,
            useCORS: true,
            allowTaint: true,
            logging: false
          });
          const imgData = canvas.toDataURL("image/jpeg", 0.7);

          if (i > 0) {
            await pdf.addPage();
          }
          const pageWidth = pdf.internal.pageSize.getWidth();
          const imgHeight = (canvas.height * pageWidth) / canvas.width;

          pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, imgHeight);
          
          // Small delay to prevent blocking UI
          await new Promise(res => setTimeout(res, 100));
        } catch (pageErr) {
          console.error(`Error processing page ${i + 1}:`, pageErr);
        }
      }

      console.log("PDF generation complete, uploading to Firebase...");
      
      // Convert PDF to blob
      const pdfBlob = pdf.output("blob");

      // Upload to Firebase
      await uploadBytes(pdfRef, pdfBlob);

      // Get the download URL
      const firebaseUrl = await getDownloadURL(pdfRef);

      console.log("PDF saved to Firebase:", firebaseUrl);
      return firebaseUrl;
    } catch (err) {
      console.error("PDF save to Firebase failed:", err);
      return null;
    }
  };

  const postPdfReport = async (url) => {
    try {
      const res = await fetch(`${API_BASE_URL}/save-pdf-report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pdfResult: url, kitid: id }),
      });

      if (!res.ok) {
        console.error("save-pdf-report failed:", res.status);
      }
    } catch (err) {
      console.error("save-pdf-report error:", err);
    }
  };

  const getdata = async () => {
    try {
      // First API call for report data
      let reportData = JSON.stringify({
        _id: id,
        kitId: id,
      });

      let reportConfig = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${API_BASE_URL}/viewreportdata`,
        headers: {
          "Content-Type": "application/json",
        },
        data: reportData,
      };

      const reportResponse = await axios.request(reportConfig);
      let data = reportResponse.data;
      setPdfResult(data.pdfResult)
    
      

      // Safely extract the object that contains 'resultsfromfastq'
      const fastqEntry = data.result.find((obj) => obj.resultsfromfastq);
      if (fastqEntry) {
        data.result[0] = fastqEntry.resultsfromfastq;
      }

      // Second API call for style data
      let styleConfig = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${API_BASE_URL}/getReportStyleByKit`,
        headers: {
          "Content-Type": "application/json",
        },
        data: reportData,
      };

      const styleResponse = await axios.request(styleConfig);

      // Third API call: Fetch DNA Category
      // You can pass the report name from your data or use a default value
      const reportName = data?.reportName || 'Hair Genetics'; // Adjust based on your data structure
      setKittype(data?.Kittype)
      await fetchDnaCategory(data?.Kittype);

      // Combine both responses into globalData
      setkit({
        ...data,
        pdfResult: data.pdfResult, // Add pdfResult from data
        style: styleResponse?.data?.style || {
          primaryColor: "",
          secondaryColor: "",
          header: "",
          footer: "",
          imageBase64: "",
          styleName: "",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  // Auto-save PDF to Firebase when kit data is loaded (but don't show iframe immediately)
  useEffect(() => {
    if (!kit || !genes.length) return;
    if (hasSavedPdf.current) return; // Already attempted to save

    const run = async () => {
      if (hasSavedPdf.current) return;
      hasSavedPdf.current = true;
      setIsSavingPdf(true);
      console.log("Kit data loaded, saving PDF to Firebase");
      
      // Wait a bit for the pages to render
      await new Promise(res => setTimeout(res, 2000));
      
      const url = await saveResultToFirebase();
  
      
      if (url) {
        console.log("Firebase URL:", url);
        // setPdfUrl(url);
        await postPdfReport(url);
      }
      setIsSavingPdf(false);
    };

    run();
  }, [kit, genes]);

  const [persontage, setpersontage] = useState(0);
  const persontageRef = useRef(0);
  const downloadpdf = async () => {
    const pdf = new jsPDF();
    const pages = document.querySelectorAll(".page");

    for (let i = 0; i < pages.length; i++) {
      const current = Math.floor(((i + 1) / pages.length) * 100);
      persontageRef.current = current; // 👈 live update
      setpersontage(current);

      console.log("persontage", current);

      const canvas = await html2canvas(pages[i], { scale: 2 });
      const imgData = await canvas.toDataURL("image/png");

      if (i > 0) {
        await pdf.addPage();
      }
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = 210;
      const imgHeight = 297;

      pdf.addImage(
        imgData,
        "PNG",
        (pageWidth - imgWidth) / 2,
        (pageHeight - imgHeight) / 2,
        imgWidth,
        imgHeight,
        undefined,
        "FAST",
      );
    }

    // Save the PDF
    pdf.save(`DNAMap ${reportTitle}-report-${kit?.kitid || "report"}.pdf`);
  };

  function lightenColorWithOpacity(color, percent, opacity) {
    if (!color) return `rgba(0, 0, 0, ${opacity})`;
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, Math.max(0, (num >> 16) + amt));
    const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amt));
    const B = Math.min(255, Math.max(0, (num & 0x0000ff) + amt));

    return `rgba(${R}, ${G}, ${B}, ${opacity})`;
  }

  // If pdfUrl exists, render the PDF in an iframe
  if (pdfResult) {
    return (
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%", margin: 0, padding: 0, overflow: "hidden" }}>
        <iframe
          title="PDF Report"
          src={pdfResult}
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        />
      </div>
    );
  }


  return (
    <div className='report'>
      {kit ? (<>
        {/* Page 1: Cover */}
        <ReportCover
          kit={kit}
          onDownload={async () => {
            setLoading(true);
            await downloadpdf();
            setLoading(false);
          }}
          loading={loading}
          progress={persontage}
          title={reportTitle}
        />

        {/* Page 2: Gene Summary */}
        <GeneSummary
          genes={genes}
          kit={kit}
          lightenColorWithOpacity={lightenColorWithOpacity}
          title={reportTitle}
        />

        {/* Remaining Pages: Gene Details */}
        {Array.from({ length: totalPages }, (_, pageIdx) => {
          const start = pageIdx * itemsPerPage;
          const end = start + itemsPerPage;
          const pageData = genes.slice(start, end);

          return (
            <GeneDetailsPage
              key={pageIdx}
              pageData={pageData}
              kit={kit}
              pageIndex={pageIdx + 3} // Starts from Page 3
              totalPages={totalPages + 2} // Total pages + Cover + Summary
              lightenColorWithOpacity={lightenColorWithOpacity}
              title={reportTitle}
            />
          );
        })}

      </>) : (
        <img src="/empty.gif" alt="loading..." width={500} />
      )}
    </div>
  );
}

export default Report;
