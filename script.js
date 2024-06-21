const secretKey = "8sGCL_ud<)[E1>d6Wh*Ib_fkt}IN|c7^"; // Your secret key

// Encrypted results data
const encryptedResultsData = {
    "066894606": "U2FsdGVkX1+7Z8y796+08dNGd2Lng3lOgqUQOQlG+thCpHiBUT8psa1xYQ45ijNLJqgMIzTD1f9wy3UWMDwcTh4sMNWOT149JuQiehKlCAB3Fqs5h8jTgkQwMRkW+h2jp966kCUgKf5o4IjF+eNhj22I6YYRtEtyyEEsdqjmf55IlD8qyotl2oqWeSg3rhKkfrxkH42W2oiKCan+ZmnotjgOolUaVa6z60Fl/8L8AcCAzrAB4bJyjzY1eW4j0XbCUZfMrCoqRJyeTSlJOHXz/M89GKHCieQdodk3/60yTi4FUWzKrz5vBBDGhzxAoFkYPfcLHPr+bYxMyYEHmOr5+tGvtKyvVASO6G4bbioSSrkIEx1RfqU/Vq1EwCM3V8rbR8D6lKaZ8GIiEkJBaalPC/AxNEJlwDN2pytnMowqieMHtSMTEodokjI5jNSxVH8D",
    "019888824": "U2FsdGVkX180QYFq1puVDqyzBGRe9BmERT+WHASg5hSHmPpWj2OPgTfVzbHr+kxs/7uYdA/gDxC1OxcijUa/CvhNEkWGXDHlIjbNJdcOLMJlWtegB4g8wOkv6o5mvom73sayh162yyd7O+pJejSOxraKBgCOqdyWSJm5kbJVhhGUSn1q/CWArHTXvdG41TuFbCU6XBZthrLEGw93tkcgDqI/8aCACDAHQS7afmEGKM8Z8u69iGc8ayHOckhs/E0PKhP15s3XzNwzo8zgJB2ZYVh/JS8kCv5TwCiTmEZAB6li6jDsEr9LX2Byk/oedBRjwXJ+l99H7LJ4rWGHZj/SqxpBxVWcxYLxVQnct5o043Sk56Pz+0HPZWYK/8VouMls8Xd1gwMM1SIvQuqtxTBcHiIvqAZIXHiAipcG9VYnbh+IGZvMSVIgF+RHmnwvCOO/",
    "963410930": "U2FsdGVkX1+ygoQNwi4FWXzJ+16HLaMtqoQQpcvKKP/CdQ6cq9mPgFjQo4R0sfW5jbCIFSSqJAjfjvoJdYzAgDJ+cC/WuU9lCw/1CG8YcXLLqRXHlk/neUFjMSPN5r13pce7MqdMacB9EoQpFlAF2DM8fBfUfzv2A30QIkXs9GMLfmYYnYu2053PwM6BWr4rf0A/mBzsKIFTjiggnBCg7sWPsgmePgx8Jbfm5xJfkDRi3IK6m7Yjroi705dNzJ4ZsYiLuA2gzwWqyEAHPxdFcXaanb6CrD5RYVzLkZGoJtOJL0r9CTsaoyHnu1Mq8pPd+6A+9hVmiqhb6END4d27n6a/W5aGO6pNae4hbeOU0i4rAPoo3c0I+qwzitmggDHbpwPJr1UaCXzbfKrZEVPe7ogQuDPPvYWsd6gBGmpSZAh/rBhp5VW9i37fPjoMxDVK",
    "544265855": "U2FsdGVkX18SIrpyBkhY5bR0cBAAS9MtxD05uaLnm1+TizYnelii+uINCmtlCMvuUj5GNWZaXijJFXQZGJnd6yv4PeJRPP30iTQTWQAl5tqXN4ojJ4qjLm1muE7arka9tpOAAlqMssM3ZXbIXmOPq7r0Fpau0LeZylkPU24aEZIYMphY9lMzoZi9cf7GRY5cKzk0MZ0aPE9LRR2r2ui8d82zinYmbKh7esUOV+wynKIQvDv0vc+hzHUBebVuyiNRnqPXLg4ZiInV2n9eGLnsvG+SpvTXUKok01RVPibZKMwI0NvWD0SIg0sgRyv6N0nFQhAZNdDAl5jLXK4S8coeWo5OxX9kXCJdNmjqCTW50g8qFZvotZer7jitozoPAak7CCpn76H8GQLT5wwopsLutwRUrjsN7Tve7ufxeNYXTZzfRGs9Nb7kQRDwlIKj6Ch7"
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
