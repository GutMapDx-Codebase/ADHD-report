import React, { use, useEffect, useRef, useState } from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import Box from './components/Box';
import Card from './components/Card';
import SecondCard from './components/SecondCard';
import Footer from './components/Footer';
import Title from './components/title';
import './components/css/page.css'
import Resultbar from './components/Resultbar';
import "./components/css/page1.css";
import logo from './assets/ygmlogo.png';
import { useParams } from 'react-router';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Progress } from 'antd';

function Report() {
    const { id } = useParams();

    const [kit, setkit] = React.useState(null);
    const [loading, setLoading] = useState(false);
    const cardData = [
        {
            "Gene": "MTHFR",
            "Key SNPs": "rs1801133 (C677T)",
            "Function": "Dopamine synthesis, methylation",
            "description": "The MTHFR gene helps process folate for brain chemicals like dopamine and serotonin. Variants may affect focus and behavior, linking it to ADHD.",
            "isGreen": {
                "Results": "CC",
                "Recommendation": "Methylation is typically normal, but optimizing folate intake through leafy greens and a whole-food diet can still support neurotransmitter balance. For individuals with ADHD or ASD, ensure adequate B-vitamin intake (especially B6, B12, and folate) to promote cognitive and emotional regulation."
            },
            "isYellow": {
                "Results": "CT",
                "Recommendation": "There may be reduced methylation efficiency, which can affect neurotransmitter synthesis relevant to ADHD and ASD. Supplementing with methylated B-vitamins (like methylfolate and methylcobalamin) and reducing synthetic folic acid intake may support mood, focus, and detoxification pathways."
            },
            "isRed": {
                "Results": "TT",
                "Recommendation": "Methylation may be significantly impaired, affecting neurotransmitter balance. Support with methylated B-vitamins (especially methylfolate and methyl-B12), along with magnesium, zinc, and a folate-rich diet to optimize neurological and cognitive function."
            }
        },
        // {
        //     "Gene": "VDR",
        //     "Key SNPs": "FokI - rs2228570",
        //     "Function": "Vitamin D receptor; affects dopamine",
        //     "description": "the VDR gene affects how the body uses vitamin D, which plays a role in brain development and dopamine regulation. Variants may impact attention, mood, and cognitive function, linking it to ADHD risk.FKBP5 regulates the stress response by modulating cortisol levels through the HPA axis. Variants can lead to ",
        //     "isGreen": {
        //         "Results": "C/C",
        //         "Recommendation": "Vitamin D utilization is typically normal, supporting healthy dopamine balance. Maintain adequate vitamin D through safe sun exposure, vitamin D-rich foods (fish, fortified dairy), and lifestyle habits like exercise and sleep. Supplement only if blood levels are low."
        //     },
        //     "isYellow": {
        //         "Results": "C/Tc",
        //         "Recommendation": "Vitamin D signaling may be moderately reduced, influencing mood and attention. Ensure consistent sun exposure, consider vitamin D3 supplementation if levels are borderline, and support dopamine function with a balanced diet and protein intake (tyrosine-rich foods)."
        //     },
        //     "isRed": {
        //         "Results": "T/T",
        //         "Recommendation": "Vitamin D receptor activity may be significantly impaired, raising the risk of attention and mood issues. Regular vitamin D testing and supplementation with vitamin D3 is recommended, alongside omega-3s, folate-rich foods, and physical activity to optimize brain and cognitive health."
        //     }
        // },
        {
            "Gene": "VDR",
            "Key SNPs": "BsmI - rs1544410",
            "Function": "Vitamin D receptor; affects dopamine",
            "description": "The VDR gene affects how the body uses vitamin D, which plays a role in brain development and dopamine regulation. Variants may impact attention, mood, and cognitive function, linking it to ADHD risk.FKBP5 regulates the stress response by modulating cortisol levels through the HPA axis. Variants can lead to ",
            "isGreen": {
                "Results": "GG",
                "Recommendation": "Vitamin D utilization is typically normal, supporting balanced dopamine function. Maintain healthy vitamin D levels through safe sun exposure, vitamin D-rich foods, and lifestyle habits like exercise and sleep."
            },
            "isYellow": {
                "Results": "GA",
                "Recommendation": "Vitamin D receptor efficiency may be moderately reduced, which can influence mood and focus. Ensure consistent sun exposure, and consider vitamin D3 supplementation if levels are low. Support dopamine function with protein-rich foods and regular exercise."
            },
            "isRed": {
                "Results": "AA",
                "Recommendation": "itamin D receptor activity may be significantly impaired, increasing ADHD-related risks. Regular vitamin D testing and supplementation with vitamin D3 are recommended, alongside omega-3s, folate-rich foods, and structured lifestyle routines to support cognition."
            }
        },
        {
            "Gene": "VDR",
            "Key SNPs": "taql - rs731236",
            "Function": "Vitamin D receptor; affects dopamine",
            "description": "The VDR gene affects how the body uses vitamin D, which plays a role in brain development and dopamine regulation. Variants may impact attention, mood, and cognitive function, linking it to ADHD risk.FKBP5 regulates the stress response by modulating cortisol levels through the HPA axis. Variants can lead to ",
            "isGreen": {
                "Results": "T",
                "Recommendation": "Vitamin D utilization is generally stable. Maintain optimal levels with sun exposure, dietary sources, and balanced lifestyle habits. Supplementation only if blood tests show deficiency."
            },
            "isYellow": {
                "Results": "TC",
                "Recommendation": "Vitamin D receptor function may be moderately reduced, affecting dopamine regulation. Ensure regular sun exposure, test vitamin D status, and consider vitamin D3 supplementation when needed."
            },
            "isRed": {
                "Results": "CC",
                "Recommendation": "Vitamin D receptor activity may be impaired, increasing risks for mood and attention difficulties. Proactive vitamin D supplementation, omega-3 intake, and a nutrient-dense diet are strongly recommended."
            }
        },
        {
            "Gene": "FKBP5",
            "Key SNPs": "rs1360780",
            "Function": "Stress response via HPA axis, Kynurenine pathway",
            "description": "FKBP5 regulates the stress response by modulating cortisol levels through the HPA axis. Variants can lead to heightened stress sensitivity and emotional dysregulation, often seen in ADHD",
            "isGreen": {
                "Results": "CC",
                "Recommendation": "Cortisol regulation is generally stable. Maintain emotional balance with healthy sleep, physical activity, and occasional stress-reducing practices like mindfulness."
            },
            "isYellow": {
                "Results": "CT",
                "Recommendation": "Stress response may be moderately altered, with greater sensitivity to stress. Support resilience with consistent sleep, daily relaxation techniques, adaptogens (ashwagandha, green tea), and reduced caffeine."
            },
            "isRed": {
                "Results": "TT",
                "Recommendation": "Cortisol regulation may be significantly impaired, leading to heightened stress reactivity and mood challenges. Strong focus on structured stress management (meditation, CBT, breathing exercises) and nutritional support (magnesium, omega-3s, whole foods) is recommended. Psychological support may be helpful."
            }
        },
        {
            "Gene": "HTR1A",
            "Key SNPs": "rs6295",
            "Function": "Serotonin receptor",
            "description": "HTR1A influences serotonin signaling involved in mood, anxiety, and impulse control. Variants may reduce receptor sensitivity, contributing to emotional instability and attention issues in ADHD",
            "isGreen": {
                "Results": "CC",
                "Recommendation": "Normal serotonin receptor activity. Support stable mood and focus through balanced nutrition, consistent physical activity, and adequate exposure to sunlight (boosts serotonin). Occasional mindfulness or relaxation can optimize emotional regulation."
            },
            "isYellow": {
                "Results": "CG",
                "Recommendation": "May have reduced serotonin receptor sensitivity, leading to moderate anxiety or attention challenges. Beneficial strategies include omega-3 supplementation, regular aerobic exercise, and structured routines for improved focus."
            },
            "isRed": {
                "Results": "GG",
                "Recommendation": "Significantly reduced receptor sensitivity, increasing risks of mood dysregulation, impulsivity, and anxiety. Prioritize therapy (CBT, mindfulness), avoid overstimulation (excess caffeine, screen time), and emphasize serotonin-supportive nutrition (tryptophan-rich foods like turkey, eggs, seeds)."
            }
        },
        {
            "Gene": "HTR1B",
            "Key SNPs": "rs6296",
            "Function": "Serotonin receptor",
            "description": "HTR1B helps regulate serotonin and dopamine release in brain regions linked to motivation and behavior. Altered function can affect reward processing and impulsivity—core features of ADHD",
            "isGreen": {
                "Results": "CC",
                "Recommendation": "Typical receptor function. Maintain good dopamine and serotonin balance with a healthy diet, regular social engagement, and rewarding but structured activities. This supports motivation and stable mood."
            },
            "isYellow": {
                "Results": "CG",
                "Recommendation": "May show moderate changes in reward sensitivity, leading to impulsivity or difficulty sustaining motivation. Consistent goal-setting, regular exercise, and reduced refined sugar/caffeine can stabilize behavior."
            },
            "isRed": {
                "Results": "GG",
                "Recommendation": "Stronger alteration in receptor activity, often linked with impulsivity and disrupted reward processing. Recommended support includes cognitive-behavioral strategies, structured reward systems, and dopamine-supportive nutrients (tyrosine, B-vitamins, magnesium). Professional guidance may be particularly helpful."
            }
        },
        // {
        //     "Gene": "ASMT",
        //     "Key SNPs": "rs4446909",
        //     "Function": "Converts NAS to melatonin",
        //     "description": "Regulates melatonin production; variants may affect sleep patterns and circadian rhythms, which are often",
        //     "isGreen": {
        //         "Results": "GG",
        //         "Recommendation": "Normal melatonin regulation. Maintain regular sleep hygiene (consistent sleep/wake cycle, reduced evening screen time, calming bedtime routine) to support attention and mood."
        //     },
        //     "isYellow": {
        //         "Results": "GA",
        //         "Recommendation": "May experience mild disruption in melatonin synthesis, leading to occasional sleep difficulties. Recommendations include limiting caffeine after midday, evening relaxation practices, and melatonin-supportive foods (cherries, walnuts)."
        //     },
        //     "isRed": {
        //         "Results": "AA",
        //         "Recommendation": "More pronounced melatonin disruption, increasing risk of insomnia, irregular sleep cycles, and daytime inattention. Strong emphasis on strict sleep hygiene, use of blue-light filters, and possible low-dose melatonin supplementation under medical guidance is advised."
        //     }
        // },

        {
            "Gene": "DRD2",
            "Key SNPs": "rs1800497",
            "Function": "Dopamine receptor",
            "description": "Involved in dopamine signaling and reward sensitivity; variants may impact motivation and behavioral control in ADHD.",
            "isGreen": {
                "Results": "CC",
                "Recommendation": "Normal dopamine signaling; support motivation with structured goals and balanced dopamine support (adequate protein, regular exercise, good sleep)."
            },
            "isYellow": {
                "Results": "CT",
                "Recommendation": "Slightly reduced dopamine receptor availability; may affect reward sensitivity. Encourage activities that boost dopamine naturally (sunlight, music, social connection)."
            },
            "isRed": {
                "Results": "TT",
                "Recommendation": "Marked reduction in receptor density, linked to low motivation and impulsivity. Strong focus on dopamine-balancing lifestyle: regular aerobic activity, high-protein diet (tyrosine-rich foods), and structured routines."
            }
        },
        {
            "Gene": "DBH",
            "Key SNPs": "rs1611115",
            "Function": "Converts dopamine to noradrenaline",
            "description": "Converts dopamine to norepinephrine; low activity can disrupt attention and stress response",
            "isGreen": {
                "Results": "CC",
                "Recommendation": "Normal DBH activity; support balanced neurotransmission with steady sleep, hydration, and moderate stress exposure."
            },
            "isYellow": {
                "Results": "CT",
                "Recommendation": "Moderately reduced DBH activity, may cause dopamine–noradrenaline imbalance. Lifestyle: regulate stress (yoga, breathing exercises) and maintain a protein-rich diet to stabilize neurotransmitters."
            },
            "isRed": {
                "Results": "TT",
                "Recommendation": "Strongly reduced DBH activity; may lead to dopamine buildup and impaired stress regulation. Recommend adaptogens (rhodiola, ashwagandha), omega-3s, and structured stress management."
            }
        },
        {
            "Gene": "ADORA2A",
            "Key SNPs": "rs5751876",
            "Function": "Caffeine response",
            "description": "Regulates dopamine and glutamate systems; high sensitivity variants may cause sleep issues and anxiety, common in ADHD.",
            "isGreen": {
                "Results": "CC",
                "Recommendation": "Caffeine broken down normally; moderate intake usually safe. Use caffeine strategically for focus without overreliance."
            },
            "isYellow": {
                "Results": "CT",
                "Recommendation": "Increased caffeine sensitivity; may cause jitters or sleep disruption. Reduce intake in afternoon/evening, consider green tea instead of coffee."
            },
            "isRed": {
                "Results": "TT",
                "Recommendation": "High caffeine sensitivity; even small amounts may trigger anxiety or insomnia. Minimize or avoid caffeine, replace with calming energy sources (hydration, movement, adaptogens)."
            }
        },
        {
            "Gene": "TH",
            "Key SNPs": "rs10770141",
            "Function": "Tyrosine to dopamine synthesis",
            "description": "Catalyzes dopamine synthesis; higher activity variants may increase dopamine levels, affecting focus and \nbehavior.",
            "isGreen": {
                "Results": "CC",
                "Recommendation": "Normal dopamine synthesis. Support with adequate protein (tyrosine-rich foods: eggs, fish, nuts) and balanced sleep."
            },
            "isYellow": {
                "Results": "CT",
                "Recommendation": "Increased dopamine production tendency. Balance with stress regulation (mindfulness, magnesium) and avoid overstimulation (excess caffeine, sugar)."
            },
            "isRed": {
                "Results": "TT",
                "Recommendation": "Strongly elevated dopamine synthesis, may contribute to hyperactivity or impulsivity. Recommend grounding practices (yoga, structured routines) and dopamine-stabilizing nutrients (B-vitamins, omega-3s)."
            }
        },
        {
            "Gene": "SLC6A2",
            "Key SNPs": "rs36024",
            "Function": "Noradrenaline transporter",
            "description": "Responsible for norepinephrine reuptake; fast reuptake variants can reduce availability, influencing attention \nand stress regulation",
            "isGreen": {
                "Results": "CC",
                "Recommendation": "Balanced norepinephrine reuptake; maintain good sleep hygiene, physical activity, and healthy diet."
            },
            "isYellow": {
                "Results": "CT",
                "Recommendation": "Faster norepinephrine reuptake, slightly reducing availability. Support attention with regular exercise, hydration, and brain-boosting foods (dark chocolate, berries)."
            },
            "isRed": {
                "Results": "TT",
                "Recommendation": "Very fast reuptake; low norepinephrine availability may impair focus. Lifestyle: structured sleep, consistent exercise, omega-3s, mindfulness, and possibly adaptogens for mental energy."
            }
        },
        {
            "Gene": "PNMT",
            "Key SNPs": "rs876493",
            "Function": "Converts noradrenaline to adrenaline",
            "description": "Converts norepinephrine to adrenaline; imbalances may affect arousal and response to stress in ADHD",
            "isGreen": {
                "Results": "GG",
                "Recommendation": "Normal conversion to adrenaline; support with balanced stress exposure and physical fitness."
            },
            "isYellow": {
                "Results": "GA",
                "Recommendation": "Moderately altered conversion; may affect stress reactivity. Recommend stress-buffering strategies (deep breathing, nature walks) and steady sleep schedule."
            },
            "isRed": {
                "Results": "AA",
                "Recommendation": "Strongly reduced conversion, leading to lower adrenaline response. May struggle with energy in acute stress. Encourage aerobic activity, cold showers, and adaptogens (ginseng, rhodiola) to enhance resilience."
            }
        },
        {
            "Gene": "CNR1",
            "Key SNPs": "rs1049353",
            "Function": "Cannabinoid receptor, GABA modulation",
            "description": "Part of the endocannabinoid system; variants can alter emotional regulation and attention.",
            "isGreen": {
                "Results": "GG",
                "Recommendation": "Endocannabinoid signaling is usually balanced, supporting stable emotional regulation and attention. Maintain with regular sleep, moderate physical activity, and a diet with healthy fats (omega-3s support cannabinoid receptor function)."
            },
            "isYellow": {
                "Results": "GA",
                "Recommendation": "Endocannabinoid tone may be moderately altered, leading to mild challenges in attention or stress response. Support with mindfulness, consistent daily structure, and reduced processed foods that can disrupt neurotransmission. Omega-3 and CBD-rich hemp oil may be beneficial."
            },
            "isRed": {
                "Results": "AA",
                "Recommendation": "Endocannabinoid function may be significantly disrupted, leading to higher emotional reactivity and potential impulsivity. Strong focus on structured routines, calming practices (yoga, meditation), and anti-inflammatory nutrition (whole foods, omega-3s, reduced sugar) is recommended. Psychological support may help improve coping strategies."
            }
        },
        {
            "Gene": "TRPV1",
            "Key SNPs": "rs8065080",
            "Function": "Pain, cannabinoid pathways",
            "description": "Involved in neural signaling and pain perception; altered function may influence sensory sensitivity and emotional reactivity.",
            "isGreen": {
                "Results": "CC",
                "Recommendation": "TRPV1 signaling is typically stable, maintaining balanced sensory and emotional responses. Maintain with consistent sleep, regular movement, and stress-balancing practices."
            },
            "isYellow": {
                "Results": "CT",
                "Recommendation": "Moderately increased sensory sensitivity or stress reactivity may occur. Support resilience with grounding techniques (deep breathing, mindfulness), regular exercise, and a diet rich in magnesium and antioxidants."
            },
            "isRed": {
                "Results": "TT",
                "Recommendation": "Variants may lead to heightened sensory reactivity and emotional dysregulation, sometimes contributing to ADHD symptoms. Strong stress management (CBT, meditation, breathwork), an anti-inflammatory diet, and lifestyle practices that reduce overstimulation (screen breaks, structured environments) are especially important."
            }
        },
        {
            "Gene": "GAD1",
            "Key SNPs": "rs3749034",
            "Function": "Glutamate to GABA conversion",
            "description": "Regulates GABA synthesis; low GABA production can lead to poor impulse control and emotional regulation.",
            "isGreen": {
                "Results": "GG",
                "Recommendation": "GABA production is typically efficient, supporting good impulse control and calm focus. Maintain through balanced sleep, exercise, and a diet with adequate B vitamins and magnesium."
            },
            "isYellow": {
                "Results": "GA",
                "Recommendation": "GABA synthesis may be moderately reduced, leading to occasional difficulties with emotional regulation or impulsivity. Support with mindfulness practices, L-theanine or magnesium supplementation, and avoiding excessive caffeine."
            },
            "isRed": {
                "Results": "AA",
                "Recommendation": "Variants may strongly impair GABA production, leading to poor impulse control, hyperactivity, and heightened stress reactivity. Strong focus on GABA-supportive nutrition (magnesium, B6, probiotics), calming routines, and structured psychological support (CBT, relaxation techniques) is recommended."
            }
        },
        {
            "Gene": "GAD2",
            "Key SNPs": "rs2236418",
            "Function": "Glutamate to GABA conversion",
            "description": "Also involved in GABA production; balanced function supports calmness and focus",
            "isGreen": {
                "Results": "CC",
                "Recommendation": "Balanced GABA production helps maintain calmness and focus. Maintain through regular exercise, good nutrition, and stress reduction strategies."
            },
            "isYellow": {
                "Results": "CT",
                "Recommendation": "Moderately reduced GABA signaling may lead to emotional lability or distractibility. Support with consistent sleep, magnesium-rich foods, and mindfulness techniques."
            },
            "isRed": {
                "Results": "TT",
                "Recommendation": "Variants may cause significant GABA deficiency, leading to restlessness, impulsivity, or poor stress regulation. Strong focus on structured daily routines, calming supplements (e.g., magnesium, taurine, L-theanine), and psychological support to enhance self-regulation is recommended."
            }
        },
        // {
        //     "Gene": "APLP1",
        //     "Key SNPs": "rs664760",
        //     "Function": "Synaptic function, GABA system",
        //     "description": "Plays a role in synaptic function and neurodevelopment; risk variants may affect cognitive performance and \nbehavior",
        //     "isGreen": {
        //         "Results": "CC",
        //         "Recommendation": "Typically balanced synaptic function. Maintain brain health with a nutrient-rich diet (B vitamins, omega-3s) and consistent learning or memory exercises."
        //     },
        //     "isYellow": {
        //         "Results": "CT",
        //         "Recommendation": "May show mild alterations in synaptic signaling affecting focus. Support with structured routines, mindfulness, and GABA-supporting foods (green tea, magnesium)."
        //     },
        //     "isRed": {
        //         "Results": "TT",
        //         "Recommendation": "Higher likelihood of synaptic dysregulation impacting cognition and behavior. Recommend strong emphasis on neuroprotective diet (omega-3s, choline), structured learning activities, and professional cognitive/behavioral support if needed."
        //     }
        // },
        {
            "Gene": "GABRA2",
            "Key SNPs": "rs279858",
            "Function": "GABA-A receptor subunit",
            "description": "Encodes GABA-A receptor subunits; reduced function linked to impulsivity and anxiety in ADHD",
            "isGreen": {
                "Results": "CC",
                "Recommendation": "Generally stable GABAergic signaling. Maintain emotional stability with balanced sleep, relaxation activities, and physical exercise."
            },
            "isYellow": {
                "Results": "CT",
                "Recommendation": "May experience mild anxiety or impulsivity under stress. Support with mindfulness, reduced stimulant intake (caffeine), and calming supplements (theanine, magnesium)."
            },
            "isRed": {
                "Results": "TT",
                "Recommendation": "Stronger risk of GABA imbalance, leading to impulsivity, stress sensitivity, or mood dysregulation. Recommend structured stress reduction practices (yoga, meditation), professional support (CBT), and a GABA-supportive diet (fermented foods, whole grains)."
            }
        },

        {
            "Gene": "MAOB",
            "Key SNPs": "rs1799836",
            "Function": "Breakdown of monoamines",
            "description": "Metabolizes dopamine and other monoamines; typical function supports emotional balance",
            "isGreen": {
                "Results": "AA",
                "Recommendation": "Normal dopamine metabolism. Balanced mood likely; maintain with regular sleep, exercise, and steady dietary intake of protein and micronutrients (iron, B6)."
            },
            "isYellow": {
                "Results": "AG",
                "Recommendation": "Intermediate enzyme activity; may show mild emotional fluctuations under stress. Support with mindfulness, moderate caffeine intake, and steady physical activity."
            },
            "isRed": {
                "Results": "GG",
                "Recommendation": "Altered dopamine breakdown, linked with mood dysregulation and possible ADHD-like symptoms. Recommend emotional regulation strategies (CBT, relaxation practices), neuro-supportive diet (tyrosine, omega-3s), and reduced stimulants."
            }
        },
        {
            "Gene": "COMT",
            "Key SNPs": "rs4680 (Val158Met)",
            "Function": "Breakdown of dopamine, noradrenaline",
            "description": "Breaks down dopamine in the prefrontal cortex; slow variants (Met/Met) may affect working memory and \r\nexecutive function",
            "isGreen": {
                "Results": "GG",
                "Recommendation": "Fast dopamine breakdown; may cause lower baseline dopamine and reduced stress resilience. Support with mindfulness, balanced protein intake, and omega-3s to stabilize mood and focus."
            },
            "isYellow": {
                "Results": "GA",
                "Recommendation": "Intermediate breakdown; fairly balanced but may experience situational stress or executive function challenges. Maintain healthy sleep, moderate caffeine, and stress-buffering practices."
            },
            "isRed": {
                "Results": "AA",
                "Recommendation": "Slow breakdown; higher dopamine levels may enhance working memory but increase anxiety sensitivity. Support with calming routines, magnesium, and mindfulness-based stress reduction."
            }
        },
        {
            "Gene": "ADRB1",
            "Key SNPs": "rs1801253",
            "Function": "Noradrenaline to adrenaline",
            "description": "Involved in norepinephrine signaling; typical variants support normal arousal and alertness.",
            "isGreen": {
                "Results": "CC",
                "Recommendation": "Typical signaling with balanced arousal and alertness. Maintain steady routines with regular exercise to optimize focus and energy."
            },
            "isYellow": {
                "Results": "CG",
                "Recommendation": "Moderate variation; may show higher sensitivity to stress or stimulants. Reduce excessive caffeine, and support with relaxation techniques and adaptogens like ashwagandha."
            },
            "isRed": {
                "Results": "GG",
                "Recommendation": "Stronger adrenergic response; risk of hyperarousal, restlessness, or sleep issues. Prioritize stress management, calming nutrition (green tea L-theanine, magnesium), and sleep hygiene."
            }
        },
        {
            "Gene": "ADRB2",
            "Key SNPs": "rs1042713",
            "Function": "Noradrenaline to adrenaline",
            "description": "Regulates response to adrenaline; high sensitivity variants may relate to hyperactivity and anxiety traits",
            "isGreen": {
                "Results": "AA",
                "Recommendation": "Higher receptor sensitivity; may experience stronger adrenaline response leading to hyperactivity or stress reactivity. Benefit from calming exercise (yoga, walking), breathing techniques, and magnesium."
            },
            "isYellow": {
                "Results": "AG",
                "Recommendation": "Intermediate response; generally balanced but can tip toward hyperarousal in high-stress situations. Maintain moderate caffeine, regular stress-relief practices, and good hydration."
            },
            "isRed": {
                "Results": "GG",
                "Recommendation": "Lower receptor sensitivity; may have reduced adrenaline-driven alertness. Benefit from regular physical activity, morning light exposure, and mild stimulants like green tea for balanced energy."
            }
        }
    ];
    const itemsPerPage = 2;
    const totalPages = Math.ceil(cardData.length / itemsPerPage);


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


        getdata()


    }, [])
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
            // pdf.addImage(imgData, "JPEG", 5, 5, imgWidth, imgHeight, undefined, "FAST");
        }

        // Save the PDF
        pdf.save(`DNAMap ADHD-report-${kit.kitid}.pdf`);
    };






    function lightenColorWithOpacity(color, percent, opacity) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min(255, Math.max(0, (num >> 16) + amt));
        const G = Math.min(255, Math.max(0, (num >> 8 & 0x00FF) + amt));
        const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));

        return `rgba(${R}, ${G}, ${B}, ${opacity})`;
    }


    // // const primaryColor = kit.style.primaryColor;
    // const lightenedColor = lightenColorWithOpacity(primaryColor, 0, 0.15); // Lighten by 20%



    return (
        <div className='report'>



            {kit ? (<>



                {/* <page1> */}
                <div className="page">

                    
                    <div className='downloadbutton'>
                        {!loading ? (<>
                            <button
                                id="downloadButton"
                                // style={{ top: style.styleName === "TestMe" ? "240mm" : "260mm" }}
                                disabled={loading}
                                onClick={async () => {
                                    setLoading(true);
                                    await downloadpdf(kit.kitid); // assume it's a promise
                                    setLoading(false);
                                }}
                            >


                                DOWNLOAD
                            </button>
                        </>) : (<>

                            <div className="progress-bar">  Downloading...
                                <Progress
                                    percent={persontage}
                                    percentPosition={{ align: 'end', type: 'inner' }}
                                    size={[350, 40]}
                                    strokeColor="#001342"


                                />

                            </div>
                        </>)}
                    </div>
                    <div className='firstpage'>
                        <div
                        >  <img src={kit.style.imageBase64} alt='logo' className='logoforfirstpage' width={300} />
                            <h1 style={{ color: kit.style.secondaryColor }}>DNAMap</h1>
                            <h2 style={{ backgroundColor: kit.style.primaryColor }}>ADHD</h2>
                            <div className='firstpageinfo'>
                                <div>  <h4>Sample ID: </h4> <p>{kit.kitid} </p></div>
                                <div> <h4>Patient Name: </h4><p>{kit.patientName} </p></div>
                                <div>  <h4>Sample Date: </h4><p>{kit.SampleDate}</p></div>


                            </div>
                        </div>
                    </div>

                </div>






                {/* <page 2> */}
                <div className='page'>
                    <Header logo={kit.style.imageBase64} color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} />
                    <Banner color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.30)} bg2={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} text={"Genes Dashboard"} />
                    <Title color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} title={"Genes"} />
                    <div className='cards-container'>
                        {cardData.map((data, index) => {

                            const findby = data["Key SNPs"].match(/rs\d+/)[0]

                            // Find the result for this SNP in kit.result
                            let snpResult = "N/A";
                            let snpColor = "gray";

                            const snpObj = kit.result[0].genetic.find(obj => obj.snpName === findby);


                            snpResult = snpObj.allele1 + snpObj.allele2

                            if (snpResult === data.isGreen.Results) {
                                snpColor = "green";
                            } else if (snpResult === data.isYellow.Results) {
                                snpColor = "amber";
                            } else if (snpResult === data.isRed.Results) {
                                snpColor = "red";
                            }


                            return (<>
                                <Box title={data.Gene} value={snpResult} boxColor={snpColor} />

                            </>)
                        })}
                    </div>

                    <Footer color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} sampleId={kit.kitid} page={2} totalPages={13} />

                </div>



                {/* <page 3> */}



                {Array.from({ length: Math.ceil(cardData.length / itemsPerPage) }, (_, pageIdx) => {
                    const start = pageIdx * itemsPerPage;
                    const end = start + itemsPerPage;
                    const pageData = cardData.slice(start, end);

                    return (
                        <div key={pageIdx} className="page">
                            <div>
                                <Header logo={kit.style.imageBase64} color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} />

                                <Banner color={kit.style.primaryColor} bg={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.30)} bg2={lightenColorWithOpacity(kit.style.primaryColor, 0, 0.15)} text={"DNA Panel"} />
                            </div>
                            <div className='secondpage' >
                                <div className="card-container">


                                    {pageData.map((data, idx) => {

                                        const findby = data["Key SNPs"].match(/rs\d+/)[0]

                                        // Find the result for this SNP in kit.result
                                        let snpResult = "N/A";
                                        let snpColor = "gray";
                                        let resultdiscription = data.isGreen.Recommendation

                                        const snpObj = kit.result[0].genetic.find(obj => obj.snpName === findby);


                                        snpResult = snpObj.allele1 + snpObj.allele2

                                        if (snpResult === data.isGreen.Results) {
                                            snpColor = "green";
                                            resultdiscription = data.isGreen.Recommendation
                                        } else if (snpResult === data.isYellow.Results) {
                                            snpColor = "amber";
                                            resultdiscription = data.isYellow.Recommendation
                                        } else if (snpResult === data.isRed.Results) {
                                            resultdiscription = data.isRed.Recommendation
                                            snpColor = "red";
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
                                page={pageIdx + 3}
                                totalPages={totalPages + 2}
                            />
                        </div>
                    );
                })}

            </>) : (<>

                <img src="/empty.gif" alt="logo" width={500} />

            </>)}
        </div>
    )
}

export default Report
