const secretKey = "8sGCL_ud<)[E1>d6Wh*Ib_fkt}IN|c7^";

// Encrypted results data
const encryptedResultsData = {
    "066894606": "U2FsdGVkX1+1PzqP8U+NOnOa/dxyBXjAEQBSkS2zbrvLzAIpTExHGjvhvFokbm5mXMs5iW+DJkwoEwnl3u3DJw==",
    "019888824": "U2FsdGVkX1/9b1Fz8HzH2eBuxWbB8KUn2b/60pKjilBEV9vvh5Z3otyoNfpTpxS+y0OTY1V6B+WORLeP/UQ/4g==",
    "963410930": "U2FsdGVkX1/sRLPckEDJBFx4GmrgE1CpRoxp0DgglDoU1CfPjGNHMVR/S2jbkiYZ7nXEdOD4tPm0AtI3D8gWEQ==",
    "544265855": "U2FsdGVkX18a4XlIVBN7M8NOUXG+ZtHS0K36r2Fk6LMmD7k72OHf5cH8RCrH9TgfbMtE4b/RzrBSa8sOqXYpYQ=="
};

function decryptData(encryptedData, key) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
}

function showResults() {
    const serialNumber = document.getElementById('serialNumber').value;
    const encryptedData = encryptedResultsData[serialNumber];
    const resultsDiv = document.getElementById('results');
    
    if (encryptedData) {
        const result = decryptData(encryptedData, secretKey);
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
