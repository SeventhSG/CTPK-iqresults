const secretKey = "8sGCL_ud<)[E1>d6Wh*Ib_fkt}IN|c7^"; // Your secret key

// Encrypted results data
const encryptedResultsData = {
    "066894606": "U2FsdGVkX19fSHnty9YdNISUeQ5FaGedj6EF4CbtBtntC6e35qd7F7Nng+LujVvLybXY7/zgTY5u0HAG1/27k7MPCDP/8xyA0Lk96Mh/opLhPHQLLHjId3CjAq7lF+CdzTrZ6wFCiZGrfFz0cQWa8ep1ga6aV0kT5uLKn0KW8npwblPWpGY9i2CpXPzM112uvklp8umAe6qY+XJ/MEX6RBDwvay9VKz5JWZVhUxS3+BIeuv77iraN2QAWcHSdJyYtaRBoaS4R3EicZp/SM5SwrfUGwIOgxEYgHNh+SZMv6x5X+OCzEKtKzjj/LDYpzm2WFUMkUWSQtmhZjnayEJRAB7rf/UtBAslTVWmz2CXBgvrjDcF6/k7oFSPLgEbnGx9ZP8zbdumjyHUf47m3YvdnQPwoIlIOOSfDHN/qzp6akwh7yzBNY9ci8Z1cvY79btw",
    "019888824": "U2FsdGVkX1+fy1UhauBaljEwV0wsSnw8x6Wd70NdCTcEdN89W8R7Gbp8lIZ3fselDyAo54jLHdDRDtd9rQDFDQh7xackcYtZ8ObVNWOIdJs7Z556WrONhMov7SFF//wq9UzZOUUKWaKzN6MyR9q/CU2oDiM9af5ruaOOPFeonhgRwlQdvlpEmwFBMdfonqphx8Co0WhcVDyaCXjYm+lLhYJXjCPRU9TYt+4v0HVx2AibUiNDFlB3gHuw2ZPF4CCGa0NaZM7r5Che/2TUGuQaGZ7VYtBwkWLemuhi/wYVohOn8rSQKQSZVLYvJcoGOTSI89wXLMjxkWZyVCi+XkCQ85G5CRF55Kdd2WAE6R5G4t7ijcZM0qPQZ3v5q29iilOau8zr6twS2XoeltFsMkU1/1SfE0/MvwkNlPCAB4jQDcbwf0lk3G+AwG7mQtw7gcPs",
    "963410930": "U2FsdGVkX19NATf/63bzGElrpOYeXLunOvvAwke5X3h5eX4ylXTXrA0ty3FsHyvwfLql7h0Mlc+ourXMJeMMnOlthAa9+tKvvw9wqMHs/o7on+BPLwG0e+TpnIWfgKUaPU3BRsfeH9dDWwJjGqAsZ19gxnaE1+RkXutDuK+DlMWku5OiuXV1xxRlPfERbwIKMkwsLt3uZLYGBpog4StTBDp3VhI/ijEbUPVwC/LOoglhnXElAOBM+PTr8Y9qmvfLfRnR5h+eQ2YeNea80qjG0j5LogQl2QtmbR0ZVOrLZoI/gVPf0ZR1NMtxPFlB9qZF7FlH/4at3Soi9l8J2wVavQV76XoHZyfJOil3ej7L4bGG4uf5v3RB7jA4RN4yzsNVHrx6dwHf4v3scui97P2wYUbrFrsa4zogZwozizh8XqWMqM7yBujb7+PqPdLWxZMz",
    "544265855": "U2FsdGVkX1+LdNYMbHxVGqQG6k6xreBtudYniaHRUXXPcCM48caSYQvs5jte1YhcwhGknhZKLcARwbSiIC1w59/PF+1Dh3yfR+pdllt82AyBRCVmSR7Iwv1j8lxa5Cqr+3FBvBgdK3IQQVCMEhC7NPdpZyee4InGW+Y+3Z7OxpHIIDs76OPekUV3/Xf83rQhXz+3LG30G0+NzqxG9R5AFcKndMgjj/ZaIuG3vSJZOUcnFoTnBcsI4tDDxLLA/GvsrQ54lK8hOL0W0NELY1EpZB5Dk5EvGbK0flantBgmSNW0sXeeBpGw7ZFv+oB2W0CAuV3C1ptQUakvgHna46dhDPtnPLwkBrABhx0STZdInKtDOzI7kIYyu4N8abY9omE0aOQ0Anmvx3VTXmfBkrNitE1e7JIvJTB11p3KtrqXClMk0fpVv+8PEsZRYw0DMPSs"
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
