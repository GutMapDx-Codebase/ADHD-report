import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Resultbar from "./Resultbar";
import SecondCard from "./SecondCard";
import Footer from "./Footer";
import "./css/Card.css";

const GeneDetailsPage = ({
  pageData,
  kit,
  pageIndex,
  totalPages,
  lightenColorWithOpacity,
  title,
}) => {
  if (title.includes("DNA")) {
    title = title.replace(/DNA/g, "DNAMap");
  }
  let newTitle;
  if(title.includes('DNA')){
    newTitle = title.replace(/DNAMAP/g, '');
}
if(title.includes("Hair and Skin")){
    title = 'DNAMap Hair, Skin & Nails'
    newTitle = "Hair, Skin & Nails"
}

  return (
    <div className="page">
      <div>
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
          text={newTitle}
        />
      </div>
      <div className="secondpage">
        <div className="card-container">
          {pageData?.map((data, idx) => {
            // const findby = data["Key SNPs"].match(/rs\d+/)[0]
            // const findby =
            //   data["Key SNPs"].match(/rs\d+\.\d+/)?.[0] ||
            //   data["Key SNPs"].match(/rs\d+/)?.[0];
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
            // Default recommendation: Check all available colors in priority order (isGreen > isYellow > isRed)
            // let resultdiscription =
            //     data?.isGreen?.Recommendation ||
            //     data?.isYellow?.Recommendation ||
            //     data?.isRed?.Recommendation ||
            //     "";
            const getRecommendation = (snpResult, data) => {
              let resultDescription =
                snpResult === data?.isGreen?.Results &&
                data?.isGreen?.Recommendation
                  ? data?.isGreen?.Recommendation
                  : snpResult === data?.isYellow?.Results &&
                      data?.isYellow?.Recommendation
                    ? data?.isYellow?.Recommendation
                    : snpResult === data?.isRed?.Results &&
                        data?.isRed?.Recommendation
                      ? data?.isRed?.Recommendation
                      : data?.Recommendation; // Fallback to default if none match
              return resultDescription;
            };

            const getFunctionText = (snpResult, data) => {
              console.log("snpResult:", snpResult);
              console.log("isGreen Result:", data?.isGreen?.Results);
              let functionText =
                snpResult === data?.isGreen?.Results && data?.isGreen?.Function
                  ? data?.isGreen?.Function
                  : snpResult === data?.isYellow?.Results &&
                      data?.isYellow?.Function
                    ? data?.isYellow?.Function
                    : snpResult === data?.isRed?.Results &&
                        data?.isRed?.Function
                      ? data?.isRed?.Function
                      : data?.Function; // Fallback to default if none match
              return functionText;
            };

            const getDescription = (snpResult, data) => {
              let description =
                snpResult === data?.isGreen?.Results &&
                data?.isGreen?.description
                  ? data?.isGreen?.description
                  : snpResult === data?.isYellow?.Results &&
                      data?.isYellow?.description
                    ? data?.isYellow?.description
                    : snpResult === data?.isRed?.Results &&
                        data?.isRed?.description
                      ? data?.isRed?.description
                      : data?.description; // Fallback to default if none match
              return description;
            };

            // Function priority (default): top-level Function, then any available from isGreen/isYellow/isRed
            // let functionText =
            //     data["Function"] ||
            //     data?.isGreen?.Function ||
            //     data?.isYellow?.Function ||
            //     data?.isRed?.Function ||
            //     "";

            const snpObj = kit?.result[0]?.genetic?.find(
              (obj) => obj?.snpName === findby,
            );

            if (snpObj) {
              snpResult = (snpObj?.allele1 + snpObj?.allele2).trim();
              const normalizedSnpResult = normalizeResult(snpResult);

              // Improved matching: normalize both sides for comparison
              const greenResult = normalizeResult(data?.isGreen?.Results);
              const yellowResult = normalizeResult(data?.isYellow?.Results);
              const redResult = normalizeResult(data?.isRed?.Results);

              // if (normalizedSnpResult === greenResult || snpResult === data?.isGreen?.Results || snpResult === data?.isGreen?.Results?.replace('/', '')) {
              //     snpColor = "green";
              //     resultdiscription = data?.isGreen?.Recommendation || resultdiscription;
              //     // Priority: Use Function from color object if available, otherwise use top-level Function
              //     functionText = data?.isGreen?.Function || data["Function"] || "";
              // } else if (normalizedSnpResult === yellowResult || snpResult === data?.isYellow?.Results || snpResult === data?.isYellow?.Results?.replace('/', '')) {
              //     snpColor = "amber";
              //     resultdiscription = data?.isYellow?.Recommendation || resultdiscription;
              //     // Priority: Use Function from color object if available, otherwise use top-level Function
              //     functionText = data?.isYellow?.Function || data["Function"] || "";
              // } else if (normalizedSnpResult === redResult || snpResult === data?.isRed?.Results || snpResult === data?.isRed?.Results?.replace('/', '')) {
              //     resultdiscription = data?.isRed?.Recommendation || resultdiscription;
              //     snpColor = "red";
              //     // Priority: Use Function from color object if available, otherwise use top-level Function
              //     functionText = data?.isRed?.Function || data["Function"] || "";
              // }
              if (snpResult === data?.isGreen?.Results) {
                // if(snpResult=='AG'){
                console.log("---------------------");
                console.log(snpResult);
                console.log(data?.isGreen?.Results);
                // }
                snpColor = "green";
              } else if (snpResult === data?.isYellow?.Results) {
                snpColor = "amber";
              } else if (snpResult === data?.isRed?.Results) {
                snpColor = "red";
              }
            }

            return (
              <div
                className=""
                style={{
                  border: "2px solid #d3c9e2",
                  borderRadius: "20px",
                  marginTop: "40px",
                  padding: "0px 20px",
                }}
              >
                <React.Fragment key={idx}>
                  <div className="card-item">
                    <table className="card-table">
                      <thead
                        style={{
                          backgroundColor: lightenColorWithOpacity(
                            kit.style.primaryColor,
                            0,
                            0.15,
                          ),
                        }}
                      >
                        <tr
                          style={{
                            backgroundColor: lightenColorWithOpacity(
                              kit.style.primaryColor,
                              0,
                              0.15,
                            ),
                          }}
                        >
                          <th style={{ color: kit.style.primaryColor }}>
                            Gene
                          </th>
                          <th style={{ color: kit.style.primaryColor }}>
                           Key SNP
                          </th>
                          <th style={{ color: kit.style.primaryColor }}>
                            Function
                          </th>
                          <th style={{ color: kit.style.primaryColor }}>
                            Result
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{data.Gene}</td>
                          <td>{data["Key SNPs"]}</td>
                          {/* <td>{functionText}</td> */}
                          <td>{getFunctionText(snpResult, data)}</td>
                          <td>
                            <Resultbar value={snpResult} color={snpColor} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="card-descriptionn">
                      {/* <p>{data.description}</p> */}
                      <p>{getDescription(snpResult, data)}</p>
                    </div>
                  </div>

                  {getRecommendation(snpResult, data) && (
                    <SecondCard
                      header={"Recommendation / Explanation"}
                      description={getRecommendation(snpResult, data)}
                      headerBg={snpColor}
                      headerColor={"#222"}
                    />
                  )}
                </React.Fragment>
              </div>
            );
          })}
        </div>
      </div>
      <Footer
        color={kit.style.primaryColor}
        bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)}
        sampleId={kit.kitid}
        page={pageIndex}
        totalPages={totalPages}
      />
    </div>
  );
};

export default GeneDetailsPage;
