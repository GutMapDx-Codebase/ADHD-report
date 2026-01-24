export const initialCardData = [
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
// here hair genetics genes data

const hairGeneticsGenes = [
    {
        "Gene": "MTHFR",
        "Key SNPs": "rs1801133",
        "Function": "Folate & methylation",
        "description": "The MTHFR gene plays a key role in methylation, a critical process for detoxification, hormone regulation, and cellular repair. Variants in MTHFR can reduce the body's ability to activate folate, potentially impacting hair growth, skin clarity, and inflammation control.",
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Efficient methylation. Maintain folate-rich diet: greens, legumes, and beets. Monitor homocysteine under stress."
        },
        "isYellow": {
            "Results": "CT",
            "Recommendation": "Moderate methylation efficiency. Consider methylated B vitamins, reduce inflammation, and support detox with cruciferous vegetables."
        },
        "isRed": {
            "Results": "TT",
            "Recommendation": "Impaired methylation. Use methylfolate, methylcobalamin, B2, and B6 (P5P). Emphasize leafy greens, liver, eggs. Avoid alcohol and synthetic folic acid."
        }
    },
    {
        "Gene": "SOD2",
        "Key SNPs": "rs4880",
        "Function": "Mitochondrial antioxidant enzyme",
        "description": "The SOD2 gene produces an antioxidant enzyme that protects cells from oxidative stress. Variants may weaken this defense, increasing the risk of hair loss and skin inflammation or aging.",
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Lower enzyme activity. Support with CoQ10, NAC, and antioxidants. Include spinach, blueberries, and olive oil in diet."
        },
        "isYellow": {
            "Results": "CT",
            "Recommendation": "Moderate antioxidant protection. Include moderate antioxidant support (vitamin C, E). Reduce mitochondrial stress."
        },
        "isRed": {
            "Results": "TT",
            "Recommendation": "Optimal enzyme function. Focus on antioxidant-rich diet for maintenance."
        }
    },
    {
        "Gene": "GC",
        "Key SNPs": "rs2282679",
        "Function": "Vitamin D transport",
        "description": "The GC gene controls vitamin D transport in the body. Variants may lower vitamin D availability, affecting hair and skin health.",
        "isGreen": {
            "Results": "AA",
            "Recommendation": "Lower vitamin D binding protein. Supplement with D3 + K2. Monitor 25(OH)D levels regularly. Get sunlight exposure."
        },
        "isYellow": {
            "Results": "AG",
            "Recommendation": "Moderate D status. Support with regular sun exposure and seasonal supplementation."
        },
        "isRed": {
            "Results": "GG",
            "Recommendation": "Efficient D transport. Maintain adequate sun exposure and magnesium intake."
        }
    },
    {
        "Gene": "TMPRSS6",
        "Key SNPs": "rs855791",
        "Function": "Iron regulation",
        "description": "The TMPRSS6 gene regulates iron levels by controlling hepcidin. Variants may disrupt iron balance, leading to hair thinning and poor skin health.",
        "isGreen": {
            "Results": "TT",
            "Recommendation": "Low iron absorption. Supplement with gentle iron (bisglycinate), vitamin C, and monitor ferritin. Include red meat, lentils, and molasses."
        },
        "isYellow": {
            "Results": "CT",
            "Recommendation": "Moderate iron regulation. Ensure iron-rich diet, especially for menstruating individuals. Include spinach and pumpkin seeds."
        },
        "isRed": {
            "Results": "CC",
            "Recommendation": "Optimal iron function. Maintain balanced diet with adequate iron sources and vitamin C."
        }
    },
    {
        "Gene": "DHCR7/NADSYN1",
        "Key SNPs": "rs12785878",
        "Function": "Vitamin D synthesis",
        "description": "The DHCR7/NADSYN1 genes are involved in vitamin D synthesis and metabolism, which are vital for skin health and hair follicle function. Variants may reduce vitamin D levels, potentially contributing to hair loss and inflammatory skin conditions.",
        "isRed": {
            "Results": "TT",
            "Recommendation": "Impaired D synthesis. Supplement with vitamin D3 + K2. Prioritize sun exposure (10–20 min midday)."
        },
        "isYellow": {
            "Results": "GT",
            "Recommendation": "Moderate synthesis. Supplement in winter months or if deficiency symptoms present. Include mushrooms and sardines."
        },
        "isGreen": {
            "Results": "GC",
            "Recommendation": "Efficient synthesis. Maintain sun exposure and magnesium-rich foods (seeds, leafy greens)."
        }
    },
    {
        "Gene": "PNPLA3",
        "Key SNPs": "rs738409",
        "Function": "Vitamin A & lipid metabolism",
        "description": "The PNPLA3 gene helps regulate fat metabolism and inflammation. Variants may impair skin barrier function, contributing to hair loss and skin issues.",
        "isRed": {
            "Results": "GG",
            "Recommendation": "Poor vitamin A metabolism. Supplement retinyl palmitate cautiously. Support liver with NAC, milk thistle. Avoid alcohol."
        },
        // "isYellow": {
        //     "Results": "GT",
        //     "Recommendation": "Moderate synthesis. Supplement in winter months or if deficiency symptoms present. Include mushrooms and sardines."
        // },
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Normal function. Maintain healthy fat-soluble vitamin balance."
        }
    },
    {
        "Gene": "FUT2",
        "Key SNPs": "rs602662",
        "Function": "Vitamin B12 absorption",
        "description": "The FUT2 gene affects gut microbiome balance and nutrient absorption. Variants may impact skin and hair health by reducing nutrient availability and increasing inflammation.",
        "isRed": {
            "Results": "GG",
            "Recommendation": "ILow B12 absorption. Supplement with methylcobalamin or adenosylcobalamin. Include shellfish, eggs, fermented foods."
        },
        "isYellow": {
            "Results": "AG",
            "Recommendation": "Moderate status. Ensure B12-rich diet. Consider regular B-complex support.."
        },
        "isGreen": {
            "Results": "AA",
            "Recommendation": "Efficient absorption. Maintain B12 intake through varied animal protein sources."
        }
    },
    {
        "Gene": "COL1A1",
        "Key SNPs": "rs1800012",
        "Function": "Collagen structure",
        "description": "The COL1A1 gene produces type I collagen, a key protein for skin strength and structure. Variants may weaken collagen formation, contributing to skin aging and hair thinning.",
        "isRed": {
            "Results": "TT",
            "Recommendation": "Weaker collagen structure. Supplement with type 1 & 3 collagen, vitamin C, and lysine. Eat bone broth and berries."
        },
        "isYellow": {
            "Results": "GT",
            "Recommendation": "Moderate structure. Support with silica, zinc, and antioxidant-rich diet."
        },
        "isGreen": {
            "Results": "GG",
            "Recommendation": "Normal collagen structure. Maintain diet rich in collagen-supportive nutrients."
        }
    },
    {
        "Gene": "20p11 region",
        "Key SNPs": "rs1160312",
        "Function": "Genetic risk locus for AGA",
        "description": "The 20p11 region is linked to hair follicle development and growth patterns. Variants in this region are associated with increased risk of male and female pattern hair loss.",
        "isRed": {
            "Results": "GG",
            "Recommendation": "Low risk. Maintain a nutrient-rich diet and reduce oxidative stress to preserve follicle health."
        },
        "isYellow": {
            "Results": "AG",
            "Recommendation": "Moderate risk. Balance hormones with zinc, DIM. Monitor stress and inflammation."
        },
        "isGreen": {
            "Results": "AA",
            "Recommendation": "High risk. Support DHT metabolism with saw palmetto, pygeum, reishi. Consider scalp massage and topical minoxidil."
        }
    },
    {
        "Gene": "20p11 region",
        "Key SNPs": "rs6113491",
        "Function": "AGA susceptibility",
        "description": "The 20p11 region is linked to hair follicle development and growth patterns. Variants in this region are associated with increased risk of male and female pattern hair loss.",
        "isRed": {
            "Results": "GG",
            "Recommendation": "High risk. Use natural DHT blockers, avoid processed carbs, and support hair growth with micronutrients."
        },
        "isYellow": {
            "Results": "AG",
            "Recommendation": "Intermediate risk. Emphasize anti-inflammatory diet and omega-3 supplementation."
        },
        "isGreen": {
            "Results": "AA",
            "Recommendation": "Low risk. Maintain scalp circulation and stress reduction."
        }
    },
    {
        "Gene": "AR upstream",
        "Key SNPs": "rs1041668",
        "Function": "Androgen receptor regulation",
        "description": "Regulates androgen receptor activity, influencing how hair follicles respond to hormones. Variants are strongly linked to androgenic hair loss.",
        "isRed": {
            "Results": "TT",
            "Recommendation": "High AR activity. Prioritize hormone-balancing foods, cruciferous vegetables, and liver detox support."
        },
        "isYellow": {
            "Results": "CT",
            "Recommendation": "Moderate expression. Support hormone detox with sulforaphane, limit alcohol and dairy."
        },
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Normal AR activity. Focus on maintaining hormonal balance through lifestyle."
        }
    },
    {
        "Gene": "SRD5A2",
        "Key SNPs": "rs523349",
        "Function": "DHT synthesis enzyme",
        "description": "Converts testosterone to DHT, a key hormone in hair follicle miniaturization. Variants can increase risk of hair thinning and scalp sensitivity.",
        "isRed": {
            "Results": "GG",
            "Recommendation": "Increased DHT conversion. Use finasteride (if indicated), or natural DHT blockers. Support zinc, B6, and detox."
        },
        // "isYellow": {
        //     "Results": "CT",
        //     "Recommendation": "Moderate expression. Support hormone detox with sulforaphane, limit alcohol and dairy."
        // },
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Normal DHT synthesis. Emphasize hormone-friendly lifestyle."
        }
    },
    {
        "Gene": "PTGES2",
        "Key SNPs": "rs13283456",
        "Function": "Prostaglandin synthesis",
        "description": "Involved in prostaglandin production, which affects inflammation and hair growth. Variants may disrupt this balance, contributing to hair loss and skin irritation.",
        "isRed": {
            "Results": "TT",
            "Recommendation": "Lower prostaglandin signaling. Supplement with omega-3s, curcumin, and magnesium. Avoid NSAIDs."
        },
        "isYellow": {
            "Results": "CT",
            "Recommendation": "Moderate PGE2 levels. Support anti-inflammatory nutrition."
        },
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Normal function. Maintain healthy fats and antioxidant intake."
        }
    },
    {
        "Gene": "PTGFR",
        "Key SNPs": "rs10782665",
        "Function": "Prostaglandin receptor",
        "description": "Regulates prostaglandin F2α signaling, which affects hair growth cycles. Variants may contribute to hair loss or impaired regrowth.",
        "isRed": {
            "Results": "GG",
            "Recommendation": "Weaker receptor activity. Use rosemary oil or topical Latanoprost (if appropriate). Boost omega-3s."
        },
        "isYellow": {
            "Results": "AG",
            "Recommendation": "Moderate receptor signaling. Anti-inflammatory diet beneficial."
        },
        "isGreen": {
            "Results": "AA",
            "Recommendation": "Optimal signaling. Maintain balanced prostaglandin support."
        }
    },
    {
        "Gene": "PTGDR2",
        "Key SNPs": "rs533116",
        "Function": "Prostaglandin receptor",
        "description": "Linked to immune response and allergic inflammation. Variants may increase skin sensitivity and inflammatory skin conditions.",
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Higher AGA risk. Reduce inflammation with turmeric, resveratrol, and omega-3s."
        },
        "isYellow": {
            "Results": "CT",
            "Recommendation": "Moderate sensitivity. Balance prostaglandins with anti-inflammatory nutrients."
        },
        "isRed": {
            "Results": "TT",
            "Recommendation": "Normal risk. Maintain dietary balance of omega-3 to 6 fats."
        }
    },
    {
        "Gene": "CRABP2",
        "Key SNPs": "rs12724719",
        "Function": "Retinoic acid signaling",
        "description": "LinTransports retinoic acid (vitamin A derivative) to the nucleus, impacting skin cell growth. Variants may affect skin renewal and contribute to acne or dryness.ked to immune response and allergic inflammation. Variants may increase skin sensitivity and inflammatory skin conditions.",
        "isRed": {
            "Results": "TT",
            "Recommendation": "Impaired vitamin A signaling. Use low-dose retinol under care, eat liver, sweet potatoes, and carrots."
        },
        "isYellow": {
            "Results": "CT",
            "Recommendation": "Moderate signaling. Support vitamin A and zinc intake."
        },
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Efficient retinoic acid pathway. Avoid vitamin A excess.."
        }
    },
    {
        "Gene": "SLC45A2",
        "Key SNPs": "rs16891982",
        "Function": "Pigmentation gene",
        "description": "Involved in melanin production and skin pigmentation. Variants may affect skin tone and sensitivity to UV damage.",
        "isRed": {
            "Results": "GG",
            "Recommendation": "Very low melanin. Prioritize sun protection, antioxidants (astaxanthin, vitamin C, E). Eat colorful veggies."
        },
        // "isYellow": {
        //     "Results": "CT",
        //     "Recommendation": "Moderate signaling. Support vitamin A and zinc intake."
        // },
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Darker pigmentation. Support skin health with vitamin A, zinc, and selenium."
        }
    },
    {
        "Gene": "ADRB2",
        "Key SNPs": "rs1042713",
        "Function": "Stress response",
        "description": "Regulates response to stress hormones like adrenaline. Variants may influence scalp blood flow and contribute to hair loss.",
        "isGreen": {
            "Results": "AA",
            "Recommendation": "High stress sensitivity. Use adaptogens (ashwagandha, rhodiola), prioritize sleep, and supplement zinc."
        },
        "isYellow": {
            "Results": "AG",
            "Recommendation": "Moderate stress regulation. Balance nervous system with magnesium and deep breathing practices."
        },
        "isRed": {
            "Results": "GG",
            "Recommendation": "Low stress reactivity. Maintain stress resilience with lifestyle strategies."
        }
    },


];

// female Fertility genetics genes data

const femaleFertilityGenes = [
    {
        "Gene": "FSHR",
        "Key SNPs": "rs6166 (Asn680Ser)",
        "Function": "",
        "description": "",
        "isRed": {
            "Results": "Ser/Ser",
            "Recommendation": "Monitor ovarian reserve; discuss tailored FSH dosing with practitioner.",
            "Function": "Lower ovarian sensitivity to FSH, may impair follicle development.",
        },
        "isYellow": {
            "Results": "Asn/Ser",
            "Recommendation": "Maintain hormone balance, track cycle data, support ovulation with diet and lifestyle.",
            "Function": "Moderate FSH sensitivity; may affect ART success.",
        },
        "isGreen": {
            "Results": "Asn/Asn",
            "Recommendation": "Support fertility with general endocrine and ovarian support through diet and stress reduction.",
            "Function": "Typical ovarian responsiveness to FSH.",
        }
    },
    {
        "Gene": "MTHFR",
        "Key SNPs": "rs1801133 (C677T)",
        "Function": "",
        "description": "",
        "isRed": {
            "Results": "TT",
            "Recommendation": "Use methylated folate, reduce alcohol and endocrine disruptors, and support detox pathways.",
            "Function": "Reduced methylation; may affect egg quality and hormonal detoxification.",
        },
        "isYellow": {
            "Results": "CT",
            "Recommendation": "Support with methylated B vitamins and balanced dietary intake of folate-rich foods.",
            "Function": "Partial reduction in folate metabolism.",
        },
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Maintain adequate B-vitamin levels through a nutrient-rich diet.",
            "Function": "Normal folate metabolism and methylation efficiency.",
        }
    },
    {
        "Gene": "COMT",
        "Key SNPs": "rs4680 (Val158Met)",
        "Function": "",
        "description": "",
        "isRed": {
            "Results": "Met/Met",
            "Recommendation": "Support estrogen detox with cruciferous vegetables and liver nutrients (DIM, calcium-D-glucarate)",
            "Function": "Slower estrogen breakdown; risk of estrogen dominance.",

        },
        "isYellow": {
            "Results": "Val/Met",
            "Recommendation": "Maintain estrogen balance with fiber, liver support, and regular bowel movements.",
            "Function": "Moderate estrogen metabolism.",
        },
        "isGreen": {
            "Results": "Val/Val",
            "Recommendation": "Maintain liver health and ensure consistent intake of phytonutrients.",
            "Function": "Efficient estrogen metabolism.",

        }
    },
    {
        "Gene": "ESR1",
        "Key SNPs": "rs2234693",
        "Function": "",
        "description": "",
        "isRed": {
            "Results": "TT",
            "Recommendation": "Support estrogen clearance via liver nutrients and high-fiber diet.",
            "Function": "Increased sensitivity to estrogen; may elevate risk of hormone-related symptoms.",
        },
        "isYellow": {
            "Results": "CT",
            "Recommendation": "Maintain hormone balance with cruciferous vegetables and regular detox support.",
            "Function": "Balanced estrogen signaling and metabolism.",
        },
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Support estrogen levels with phytoestrogens and adrenal support.",
            "Function": "May reduce estrogen receptor activation; possible lower fertility response.",
        }
    },
    {
        "Gene": "SHBG",
        "Key SNPs": "rs6259",
        "Function": "",
        "description": "",
        "isGreen": {
            "Results": "GG",
            "Recommendation": "Balance hormone levels with exercise, liver support, and fiber.",
            "Function": "May lead to higher free estrogen and testosterone.",
        },
        "isYellow": {
            "Results": "GA",
            "Recommendation": "Support with healthy fats, fiber, and blood sugar stability.",
            "Function": "Intermediate regulation of free sex hormones.",
        },
        "isRed": {
            "Results": "AA",
            "Recommendation": "Ensure adequate calorie and fat intake; monitor hormone levels.",
            "Function": "May lower bioavailable estrogen and testosterone.",
        }
    },
    {
        "Gene": "CYP19A1",
        "Key SNPs": "rs10046",
        "Function": "",
        "description": "",
        "isRed": {
            "Results": "TT",
            "Recommendation": "Support estrogen metabolism with cruciferous vegetables and reduce xenoestrogen exposure.",
            "Function": "Higher estrogen production; may contribute to estrogen dominance.",
        },
        "isYellow": {
            "Results": "TC",
            "Recommendation": "Support hormone balance through diet, sleep, and detox pathways.",
            "Function": "Balanced estrogen production.",
        },
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Monitor estrogen levels and support ovulation with healthy fat and protein intake.",
            "Function": "Reduced conversion of androgens to estrogens.",
        }
    },
    {
        "Gene": "PGR",
        "Key SNPs": "rs1042838",
        "Function": "May impair endometrial response and implantation.",
        "description": "",
        "isGreen": {
            "Results": "AA",
            "Recommendation": "Support progesterone with vitamin B6, magnesium, and stress reduction."
        }
    },
    {
        "Gene": "AMH",
        "Key SNPs": "rs10407022",
        "Function": "Lower AMH levels associated with diminished ovarian reserve.",
        "description": "",
        "isGreen": {
            "Results": "AA",
            "Recommendation": "Track AMH over time and consider early fertility planning if indicated."
        }
    },




];

// male Fertility genetics genes data

const maleFertilityGenes = [
    {
        "Gene": "MTHFR",
        "Key SNPs": "rs1801133 (C677T)",
        "Function": "",
        "description": "",
        "isRed": {
            "Results": "TT",
            "Recommendation": "Use methylated folate and B12, eat leafy greens, avoid alcohol and processed food.",
            "Function": "Reduced MTHFR activity, elevated homocysteine, impaired sperm DNA integrity.",
        },
        "isYellow": {
            "Results": "CT",
            "Recommendation": "Support with methyl donors like folate, B12, and B6; monitor homocysteine.",
            "Function": "Moderate reduction in folate metabolism and methylation efficiency.",
        },
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Maintain balanced intake of B vitamins through diet.",
            "Function": "Normal enzyme activity and folate metabolism.",
        }
    },
    {
        "Gene": "MTHFR",
        "Key SNPs": "rs1801131 (A1298C)",
        "Function": "",
        "description": "",
        "isRed": {
            "Results": "CC",
            "Recommendation": "Support with methylated B-complex vitamins, particularly methylfolate and B12.",
            "Function": "Reduced methylation and neurotransmitter synthesis.",
        },
        "isYellow": {
            "Results": "AC",
            "Recommendation": "Mild impairment in methylation cycle.",
            "Function": "Ensure adequate intake of folate-rich foods and consider active B-vitamin supplements.",
        },
        "isGreen": {
            "Results": "AA",
            "Recommendation": "Maintain general B-vitamin and folate intake through whole foods.",
            "Function": "Typical enzyme activity and methylation function.",
        }
    },
    {
        "Gene": "FOLH1",
        "Key SNPs": "rs61886492)",
        "Function": "Reduced folate absorption, may impair DNA synthesis in sperm.",
        "description": "",
        "isRed": {
            "Results": "T",
            "Recommendation": "Increase intake of natural folate-rich foods and consider folinic acid support.",

        },

    },
    {
        "Gene": "GSTP1",
        "Key SNPs": "rs1695",
        "Function": "",
        "description": "",
        "isRed": {
            "Results": "GG",
            "Recommendation": "Maintain antioxidant intake from a varied, nutrient-dense diet.",
            "Function": "Normal GSTP1 activity and antioxidant function.",
        },
        "isYellow": {
            "Results": "AG",
            "Recommendation": "Support with additional antioxidants and reduce toxin exposure.",
            "Function": "Moderate reduction in antioxidant enzyme function.",
        },
        "isGreen": {
            "Results": "AA",
            "Recommendation": "Use high-potency antioxidant support and evaluate toxin exposures.",
            "Function": "Lowest GSTP1 activity; increased susceptibility to oxidative damage.",
        }
    },
    {
        "Gene": "DAZL",
        "Key SNPs": "rs121918416",
        "Function": "Associated with disrupted spermatogenesis and infertility risk.",
        "description": "",
        "isRed": {
            "Results": "GG",
            "Recommendation": "Consult a fertility specialist; support testicular function with zinc and CoQ10.",

        },

    },
    {
        "Gene": "FSHR",
        "Key SNPs": "rs6166 (Asn680Ser)",
        "Function": "Reduced FSH receptor sensitivity, may impair sperm production.",
        "description": "",
        "isGreen": {
            "Results": "Ser/Ser ",
            "Recommendation": "Monitor FSH levels and consider reproductive endocrinology support.",

        },

    },
    {
        "Gene": "FSHR",
        "Key SNPs": "rs6165 (Thr307Ala)",
        "Function": "Altered FSH binding may affect spermatogenesis.",
        "description": "",
        "isGreen": {
            "Results": "Ala/Ala",
            "Recommendation": "Consider hormonal assessment and fertility-specific nutrient support."
        }
    },
    {
        "Gene": "LHCGR",
        "Key SNPs": "rs2293275",
        "Function": "",
        "description": "",
        "isGreen": {
            "Results": "GG",
            "Recommendation": "Maintain overall endocrine balance with lifestyle and diet.",
            "Function": "Normal LH receptor function and hormone regulation.",
        },
        "isYellow": {
            "Results": "AG",
            "Recommendation": "Support hormone production with healthy fats and micronutrients like zinc.",
            "Function": "Mild reduction in LH signaling.",
        },
        "isRed": {
            "Results": "AA",
            "Recommendation": "Monitor testosterone and support with zinc, vitamin D, and stress management.",
            "Function": "TReduced LH receptor sensitivity, may impact testosterone.",
        }
    },
    {
        "Gene": "NR5A1",
        "Key SNPs": "rs1110061",
        "Function": "Linked to reduced sperm output via impaired steroidogenesis.",
        "description": "",
        "isGreen": {
            "Results": "Variant",
            "Recommendation": "Assess hormone levels and support testicular health with targeted nutrition."
        }


    },
    {
        "Gene": "CYP1A1",
        "Key SNPs": "rs1048943",
        "Function": "Increased enzyme activity; altered estrogen metabolism.",
        "description": "",
        "isRed": {
            "Results": "GG",
            "Recommendation": "Assess hormone levels and support testicular health with targeted nutrition."
        }


    },

    {
        "Gene": "HFE",
        "Key SNPs": "rs1800562 (C282Y)",
        "Function": "Risk of iron overload; can impair sperm via oxidative stress.",
        "description": "",
        "isRed": {
            "Results": "GG",
            "Recommendation": "Check serum ferritin and iron, avoid excess iron intake or supplements."
        }


    },
    {
        "Gene": "MLH1",
        "Key SNPs": "rs1800734",
        "Function": "",
        "description": "",
        "isRed": {
            "Results": "TT",
            "Recommendation": "aintain antioxidant intake and general DNA support.",
            "Function": "MNormal DNA mismatch repair activity.",
        },
        "isYellow": {
            "Results": "CT",
            "Recommendation": "Support DNA integrity with antioxidants and reduce inflammation.",
            "Function": "MMild reduction in DNA repair function.",
        },
        "isGreen": {
            "Results": "CC",
            "Recommendation": "Use antioxidant support (e.g. vitamin E, selenium, NAC); limit environmental toxins.",
            "Function": "Impaired DNA repair; potential for increased sperm DNA fragmentation.",
        }
    },
    {
        "Gene": "PRM1",
        "Key SNPs": "rs737008",
        "Function": "Altered sperm chromatin structure; may affect fertility.",
        "description": "",
        "isRed": {
            "Results": "AA",
            "Recommendation": "Support sperm packaging with zinc, selenium, and L-carnitine."
        }


    },
    {
        "Gene": "TNP2",
        "Key SNPs": "rs199536093",
        "Function": "Linked to abnormal sperm morphology due to DNA packaging defects.",
        "description": "",
        "isRed": {
            "Results": "G Variant",
            "Recommendation": "Nutritionally support DNA condensation with zinc and arginine."
        }


    },











];



// Exports
export const hairGeneticsGenesData = hairGeneticsGenes;
export const maleFertilityGenesData = maleFertilityGenes;
export const femaleFertilityGenesData = femaleFertilityGenes;
