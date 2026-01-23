import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Progress } from 'antd';
import './components/css/page.css';
import './components/css/page1.css';

// Components
import ReportCover from './components/ReportCover';
import GeneSummary from './components/GeneSummary';
import GeneDetailsPage from './components/GeneDetailsPage';

// Data
import { initialCardData, hairGeneticsGenesData } from './data';

function Report() {
    const { id } = useParams();
    const [kit, setkit] = useState(null);
    const [reportTitle, setReportTitle] = useState('Male');
    const [loading, setLoading] = useState(false);
    const [updatedGene, setUpdatedGene] = useState(['MTHFR', 'VDR' , 'SOD2' , 'GC' , 'TMPRSS6' , 'DHCR7/NADSYN1' , 'PNPLA3' , 'FUT2' , 'COL1A1' , '20p11 region' , '20p11 region' , 'AR upstream' , 'SRD5A2' , 'PTGES2' , 'PTGFR' , 'PTGDR2' , 'CRABP2' , 'SLC45A2' , 'ADRB2'])
    const updatedInitialCardDate = hairGeneticsGenesData.filter((item) => updatedGene.includes(item.Gene))
    // Configurable state
    const [genes, setGenes] = useState(updatedInitialCardDate);
    const [itemsPerPage, setItemsPerPage] = useState(2);

    // Calculated values
    const totalPages = Math.ceil(genes.length / itemsPerPage);

    const getdata = async () => {
        try {
            // First API call for report data
            let reportData = JSON.stringify({
                "_id": id,
                "kitId": id
            });

            let reportConfig = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://yourgutmap-food-sensitivity-423a2af84621.herokuapp.com/viewreportdata',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: reportData
            };

            const reportResponse = await axios.request(reportConfig);
            let data = reportResponse.data;

            // Safely extract the object that contains 'resultsfromfastq'
            const fastqEntry = data.result.find(obj => obj.resultsfromfastq);
            if (fastqEntry) {
                data.result[0] = fastqEntry.resultsfromfastq;
            }


            // Second API call for style data
            let styleConfig = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://yourgutmap-food-sensitivity-423a2af84621.herokuapp.com/getReportStyleByKit',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: reportData
            };

            const styleResponse = await axios.request(styleConfig);

            // Combine both responses into globalData
            setkit({
                ...data,
                style: styleResponse.data?.style || {
                    primaryColor: "",
                    secondaryColor: "",
                    header: "",
                    footer: "",
                    imageBase64: "",
                    styleName: ""
                }
            });

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    const [persontage, setpersontage] = useState(0);
    const persontageRef = useRef(0);
    const downloadpdf = async () => {

        const pdf = new jsPDF();
        const pages = document.querySelectorAll('.page');

        for (let i = 0; i < pages.length; i++) {
            const current = Math.floor(((i + 1) / pages.length) * 100);
            persontageRef.current = current; // 👈 live update
            setpersontage(current);

            console.log("persontage", current);

            const canvas = await html2canvas(pages[i], { scale: 2 });
            const imgData = await canvas.toDataURL('image/png');

            if (i > 0) {
                await pdf.addPage();
            }
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = 210;
            const imgHeight = 297;

            pdf.addImage(imgData, 'PNG', (pageWidth - imgWidth) / 2, (pageHeight - imgHeight) / 2, imgWidth, imgHeight, undefined, "FAST");
        }

        // Save the PDF
        pdf.save(`DNAMap ADHD-report-${kit?.kitid || 'report'}.pdf`);
    };

    function lightenColorWithOpacity(color, percent, opacity) {
        if (!color) return `rgba(0, 0, 0, ${opacity})`;
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min(255, Math.max(0, (num >> 16) + amt));
        const G = Math.min(255, Math.max(0, (num >> 8 & 0x00FF) + amt));
        const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));

        return `rgba(${R}, ${G}, ${B}, ${opacity})`;
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
