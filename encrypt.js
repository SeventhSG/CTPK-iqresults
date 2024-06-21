const CryptoJS = require('crypto-js');

const resultsData = {
    "066894606": {
        name: "Биляна",
        rawScores: {
            verbal: "24/30 точки",
            quantitative: "23/30 точки",
            abstract: "21/30 точки",
            memory: "29/30 точки"
        },
        convertedScores: {
            verbal: 136,
            quantitative: 132,
            abstract: 124,
            memory: 156
        },
        totalRawScore: 97,
        compositeConvertedScore: 137,
        iq: "127.75 (мин. 120)"
    },
    "019888824": {
        name: "Мишо",
        rawScores: {
            verbal: "16/30 точки",
            quantitative: "17/30 точки",
            abstract: "16/30 точки",
            memory: "29/30 точки"
        },
        convertedScores: {
            verbal: 104,
            quantitative: 108,
            abstract: 104,
            memory: 156
        },
        totalRawScore: 78,
        compositeConvertedScore: 119,
        iq: "113.50 (мин. 120)"
    },
    "963410930": {
        name: "Озан",
        rawScores: {
            verbal: "20.5/30 точки",
            quantitative: "19/30 точки",
            abstract: "20/30 точки",
            memory: "30/30 точки"
        },
        convertedScores: {
            verbal: 122,
            quantitative: 116,
            abstract: 120,
            memory: 160
        },
        totalRawScore: 89.5,
        compositeConvertedScore: 129.5,
        iq: "122.12 (мин. 120)"
    },
    "544265855": {
        name: "Никола",
        rawScores: {
            verbal: "14/30 точки",
            quantitative: "19/30 точки",
            abstract: "21/30 точки",
            memory: "30/30 точки"
        },
        convertedScores: {
            verbal: 96,
            quantitative: 116,
            abstract: 124,
            memory: 160
        },
        totalRawScore: 84,
        compositeConvertedScore: 124,
        iq: "118.00 (мин. 120)"
    }
};

const secretKey = "8sGCL_ud<)[E1>d6Wh*Ib_fkt}IN|c7^";

for (let serial in resultsData) {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(resultsData[serial]), secretKey).toString();
    console.log(`${serial}: "${encrypted}"`);
}
