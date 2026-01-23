import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Resultbar from './Resultbar';
import SecondCard from './SecondCard';
import Footer from './Footer';
import './css/Card.css';

const GeneDetailsPage = ({ pageData, kit, pageIndex, totalPages, lightenColorWithOpacity,title }) => {
    return (
        <div className="page">
            <div>
                <Header title={title} logo={kit.style.imageBase64} color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} />
                <Banner color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.30)} bg2={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} text={"DNA Panel"} />
            </div>
            <div className='secondpage' >
                <div className="card-container">
                    {pageData.map((data, idx) => {
                        const findby = data["Key SNPs"].match(/rs\d+/)[0]

                        // Find the result for this SNP in kit.result
                        let snpResult = "N/A";
                        let snpColor = "gray";
                        let resultdiscription = data.isGreen ? data.isGreen.Recommendation : "";

                        const snpObj = kit.result[0].genetic.find(obj => obj.snpName === findby);

                        if (snpObj) {
                            snpResult = snpObj?.allele1 + snpObj?.allele2;

                            if (snpResult === data?.isGreen?.Results) {
                                snpColor = "green";
                                resultdiscription = data?.isGreen?.Recommendation
                            } else if (snpResult === data?.isYellow?.Results) {
                                snpColor = "amber";
                                resultdiscription = data?.isYellow.Recommendation
                            } else if (snpResult === data?.isRed.Results) {
                                resultdiscription = data?.isRed?.Recommendation
                                snpColor = "red";
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
                                                <td>{data["Function"]}</td>
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
