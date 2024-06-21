const secretKey = "8sGCL_ud<)[E1>d6Wh*Ib_fkt}IN|c7^"; // Your secret key

// Encrypted results data
const encryptedResultsData = {
    "066894606": "U2FsdGVkX1... (encrypted data here)",
    "019888824": "U2FsdGVkX1... (encrypted data here)",
    "963410930": "U2FsdGVkX1... (encrypted data here)",
    "544265855": "U2FsdGVkX1... (encrypted data here)"
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
