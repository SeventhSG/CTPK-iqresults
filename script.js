const resultsData = {
    "066894606": {
        name: "Биляна Карушкова",
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
        name: "Михаел Бекяров",
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
        name: "Озан Сербест",
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
        name: "Никола Величков",
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

function showResults() {
    const serialNumber = document.getElementById('serialNumber').value;
    const result = resultsData[serialNumber];
    const resultsDiv = document.getElementById('results');
    
    if (result) {
        resultsDiv.innerHTML = `
            <h2>Резултати за: ${result.name}</h2>
            <p><strong>Суров Резултат:</strong></p>
            <p>Вербално мислене: ${result.rawScores.verbal}</p>
            <p>Количествено разсъждение: ${result.rawScores.quantitative}</p>
            <p>Абстрактно/Визуално разсъждение: ${result.rawScores.abstract}</p>
            <p>Работна памет: ${result.rawScores.memory}</p>
            <p><strong>Преобразуван Резултат:</strong></p>
            <p>Вербално мислене: ${result.convertedScores.verbal}</p>
            <p>Количествено разсъждение: ${result.convertedScores.quantitative}</p>
            <p>Абстрактно/Визуално разсъждение: ${result.convertedScores.abstract}</p>
            <p>Работна памет: ${result.convertedScores.memory}</p>
            <p><strong>Общ Суров Резултат:</strong> ${result.totalRawScore}</p>
            <p><strong>Композитен преобразуван резултат:</strong> ${result.compositeConvertedScore}</p>
            <p><strong>IQ резултат:</strong> ${result.iq}</p>
        `;
    } else {
        resultsDiv.innerHTML = `<p>Няма резултати за този сериен номер.</p>`;
    }
}
