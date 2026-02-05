import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Title from "./title";
import Box from "./Box";
import Footer from "./Footer";

const GeneSummary = ({ genes, kit, lightenColorWithOpacity, title }) => {
if(title.includes('DNA')){
    title = title.replace(/DNA/g, 'DNAMap');
}
if(title.includes("Hair and Skin")){
    title = 'DNAMap Hair, Skin & Nails'
}

  return (
    <div className="page">
      <Header
        title={title}
        logo={kit.style.imageBase64}
        color={kit.style.primaryColor}
        bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)}
      />
      <Banner
        color={kit.style.primaryColor}
        bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.3)}
        bg2={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)}
        text={"Dashboard"}
      />
      <Title
        color={kit.style.primaryColor}
        bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)}
        title={"Genes"}
      />
      <div className="cards-container">
        {genes.map((data, index) => {
          // const findby = data["Key SNPs"].match(/rs\d+/)[0]
        //   const findby =
        //     data["Key SNPs"].match(/rs\d+\.\d+/)?.[0] ||
        //     data["Key SNPs"].match(/rs\d+/)?.[0];
const findby =  data["Key SNPs"]
          // Helper function to normalize result strings for comparison
          const normalizeResult = (result) => {
            if (!result) return "";
            // Remove spaces, slashes, convert to uppercase, and sort characters for order-independent comparison
            const cleaned = result
              .toString()
              .trim()
              .replace(/[\/\s]/g, "")
              .toUpperCase();
            // Sort characters for order-independent comparison (AC = CA)
            return cleaned.split("").sort().join("");
          };

          // Find the result for this SNP in kit.result
          let snpResult = "N/A";
          let snpColor = "gray";

          const snpObj = kit.result[0].genetic.find(
            (obj) => obj.snpName === findby,
          );

          if (snpObj) {
            snpResult = (snpObj.allele1 + snpObj.allele2).trim();
            const normalizedSnpResult = normalizeResult(snpResult);

            // Normalize all result values for comparison
            const greenResult = normalizeResult(data?.isGreen?.Results);
            const yellowResult = normalizeResult(data?.isYellow?.Results);
            const redResult = normalizeResult(data?.isRed?.Results);

            // if (
            //   normalizedSnpResult === greenResult ||
            //   snpResult === data?.isGreen?.Results ||
            //   snpResult === data?.isGreen?.Results?.replace("/", "")
            // ) {
            //   snpColor = "green";
            // } else if (
            //   normalizedSnpResult === yellowResult ||
            //   snpResult === data?.isYellow?.Results ||
            //   snpResult === data?.isYellow?.Results?.replace("/", "")
            // ) {
            //   snpColor = "amber";
            // } else if (
            //   normalizedSnpResult === redResult ||
            //   snpResult === data?.isRed?.Results ||
            //   snpResult === data?.isRed?.Results?.replace("/", "")
            // ) {
            //   snpColor = "red";
            // }
            if (snpResult === data?.isGreen?.Results) {
              snpColor = "green";
            } else if (snpResult === data?.isYellow?.Results) {
              snpColor = "amber";
            } else if (snpResult === data?.isRed?.Results) {
              snpColor = "red";
            }
          }

          return (
            <Box
              key={index}
              title={data?.Gene}
              value={snpResult}
              boxColor={snpColor}
            />
          );
        })}
      </div>

      <Footer
        color={kit.style.primaryColor}
        bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)}
        sampleId={kit.kitid}
        page={2}
        totalPages={13}
      />
    </div>
  );
};

export default GeneSummary;
