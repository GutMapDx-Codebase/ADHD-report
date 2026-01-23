import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Title from './title';
import Box from './Box';
import Footer from './Footer';

const GeneSummary = ({ genes, kit, lightenColorWithOpacity,title }) => {
    return (
        <div className='page'>
            <Header title={title} logo={kit.style.imageBase64} color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} />
            <Banner color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.30)} bg2={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} text={"Genes Dashboard"} />
            <Title color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} title={"Genes"} />
            <div className='cards-container'>
                {genes.map((data, index) => {

                    const findby = data["Key SNPs"].match(/rs\d+/)[0]

                    // Find the result for this SNP in kit.result
                    let snpResult = "N/A";
                    let snpColor = "gray";

                    const snpObj = kit.result[0].genetic.find(obj => obj.snpName === findby);
                    console.log()

                    if (snpObj) {
                        snpResult = snpObj.allele1 + snpObj.allele2
                        if (snpResult === data?.isGreen?.Results) {
                            snpColor = "green";
                        } else if (snpResult === data?.isYellow?.Results) {
                            snpColor = "amber";
                        } else if (snpResult === data?.isRed?.Results) {
                            snpColor = "red";
                        }
                    }

                    return (
                        <Box key={index} title={data?.Gene} value={snpResult} boxColor={snpColor} />
                    )
                })}
            </div>

            <Footer color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} sampleId={kit.kitid} page={2} totalPages={13} />
        </div>
    );
};

export default GeneSummary;
