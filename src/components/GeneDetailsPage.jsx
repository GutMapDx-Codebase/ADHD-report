import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Resultbar from './Resultbar';
import SecondCard from './SecondCard';
import Footer from './Footer';
import './css/Card.css';

const GeneDetailsPage = ({ pageData, kit, pageIndex, totalPages, lightenColorWithOpacity, title }) => {
    return (
        <div className="page">
            <div>
                <Header title={title} logo={kit.style.imageBase64} color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} />
                <Banner color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.30)} bg2={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} text={"DNA Panel"} />
            </div>
            <div className='secondpage' >
                <div className="card-container">
                    {pageData?.map((data, idx) => {
                        const findby = data["Key SNPs"].match(/rs\d+/)[0]

                        // Helper function to normalize result strings for comparison
                        const normalizeResult = (result) => {
                            if (!result) return "";
                            // Remove spaces, slashes, convert to uppercase, and sort characters for order-independent comparison
                            const cleaned = result.toString().trim().replace(/[\/\s]/g, "").toUpperCase();
                            // Sort characters for order-independent comparison (AC = CA)
                            return cleaned.split("").sort().join("");
                        };

                        // Find the result for this SNP in kit.result
                        let snpResult = "N/A";
                        let snpColor = "gray";
                        // Default recommendation: Check all available colors in priority order (isGreen > isYellow > isRed)
                        let resultdiscription = 
                            data?.isGreen?.Recommendation || 
                            data?.isYellow?.Recommendation || 
                            data?.isRed?.Recommendation || 
                            "";
                        // Function priority (default): top-level Function, then any available from isGreen/isYellow/isRed
                        let functionText =
                            data["Function"] ||
                            data?.isGreen?.Function ||
                            data?.isYellow?.Function ||
                            data?.isRed?.Function ||
                            "";

                        const snpObj = kit?.result[0]?.genetic?.find(obj => obj?.snpName === findby);

                        if (snpObj) {
                            snpResult = (snpObj?.allele1 + snpObj?.allele2).trim();
                            const normalizedSnpResult = normalizeResult(snpResult);

                            // Improved matching: normalize both sides for comparison
                            const greenResult = normalizeResult(data?.isGreen?.Results);
                            const yellowResult = normalizeResult(data?.isYellow?.Results);
                            const redResult = normalizeResult(data?.isRed?.Results);

                            if (normalizedSnpResult === greenResult || snpResult === data?.isGreen?.Results || snpResult === data?.isGreen?.Results?.replace('/', '')) {
                                snpColor = "green";
                                resultdiscription = data?.isGreen?.Recommendation || resultdiscription;
                                // Priority: Use Function from color object if available, otherwise use top-level Function
                                functionText = data?.isGreen?.Function || data["Function"] || "";
                            } else if (normalizedSnpResult === yellowResult || snpResult === data?.isYellow?.Results || snpResult === data?.isYellow?.Results?.replace('/', '')) {
                                snpColor = "amber";
                                resultdiscription = data?.isYellow?.Recommendation || resultdiscription;
                                // Priority: Use Function from color object if available, otherwise use top-level Function
                                functionText = data?.isYellow?.Function || data["Function"] || "";
                            } else if (normalizedSnpResult === redResult || snpResult === data?.isRed?.Results || snpResult === data?.isRed?.Results?.replace('/', '')) {
                                resultdiscription = data?.isRed?.Recommendation || resultdiscription;
                                snpColor = "red";
                                // Priority: Use Function from color object if available, otherwise use top-level Function
                                functionText = data?.isRed?.Function || data["Function"] || "";
                            }
                        }

                        return (
                            <React.Fragment key={idx}>
                                <div className="card-item">
                                    <table className="card-table">
                                        <thead style={{ backgroundColor: lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15) }}>
                                            <tr style={{ backgroundColor: lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15) }}>
                                                <th style={{ color: kit.style.primaryColor }}>Gene</th>
                                                <th style={{ color: kit.style.primaryColor }}>Key SNPs</th>
                                                <th style={{ color: kit.style.primaryColor }}>Function</th>
                                                <th style={{ color: kit.style.primaryColor }}>Result</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{data.Gene}</td>
                                                <td>{data["Key SNPs"]}</td>
                                                <td>{functionText}</td>
                                                <td>
                                                    <Resultbar value={snpResult} color={snpColor} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="card-descriptionn">
                                        <p>{data.description}</p>
                                    </div>
                                </div>

                                <SecondCard
                                    header={"Recommendation / Explanation"}
                                    description={resultdiscription}
                                    headerBg={snpColor}
                                    headerColor={"#222"}
                                />
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
            <Footer
                color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} sampleId={kit.kitid}
                page={pageIndex}
                totalPages={totalPages}
            />
        </div>
    );
};

export default GeneDetailsPage;
