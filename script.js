const secretKey = "8sGCL_ud<)[E1>d6Wh*Ib_fkt}IN|c7^"; // Your secret key

// Encrypted results data
const encryptedResultsData = {
    "066894606": "U2FsdGVkX19oPuQQ8xRaLI+EkoS7/ejpb05R480txXCk/zPqPRbfljVxIfvDZ+JfBHcFFo7iPcq+TQY0/s0RuBkv/59CLZ3/8EnvAFFQ87nZCpuPqEo8ODcCkidX0MXsbAGuHA2TideTw1WM1tv5mJiI5VgCdKoO5fIfgWEUMbbGTkb+tYfjYYjdblJWI9dLYaxeSRbqT2MqapCcDv4x5fXwXjRX8cpoldjaGmUHWQNK0cc4qlHhH2TlVIGd9gRe7ZtWw58KKz+EnfbLdkYgr5Rz5bgwwzCmi4yJ8YUr4pjLKTxU9wWf+rZ4UkSTj0xEoL9LSRdPngA9vC8p+tGgRfcF06sYDZenDX4u+H/pd5ZwNdfpn2vYqirgwJpu7ZOJOrk/uXQrzx9eA2DZT1IZSC91Gxbu40tDUNavb4/lOctX31lBlgLbuCRh/YjJsrCmAb/GvmvXQPlZzfZ7E+qbOA==",
    "019888824": "U2FsdGVkX1+gYPTxZ2JbA/8mjCAWxM8J0NsiXVuRp0j0nYuBhIr3j4hBMfotClNe/4Q0P0GSZxpl1MqR592SOn+LReNDB5QFXfYilNusoTmCiVOiltpcdIGFvzzlljGlhU+00oXpYQllAjq3a8dwrlBm1528mNPNluCEHIrpj34XVFkaorBoPNBM9/VS6UksuHckgWE6AVYG6x6Z6oD3bEqd0qgGWj0D96v7+lhK0rkTkrmYSPFrof8WXrVKVILpBLMpD+AqEvo/O4KQ+zMLmV6pj00GpkBa8U9zYjU4cDgttIR1YkXKcxk54g6ERdT51m0JSCsWh0SItC40s0tcU8eif0qOL5QbSB5xTdiL5JW88vyEtiyTR8YdY6GrdMHIGBtR539Gb/amkb3YzYLZ4EzdYJR7Z4vgFRGYgULSou3S156asYYyApFgQjyfZp5UqwJqpx7HfVPTRPhp/HDguw==",
    "963410930": "U2FsdGVkX18N1P3YLrwd3k117iHt6b3tSogsAbDnUy4hSS7pdHt/N6ZODj/6rn9z3jaPbZ5O1sqkPwEOIjqUCJae04Dv1ILiZxrLehkWDsehaQP5AVFsVBZl0R/1yGzZVMHOiM3DRT0xUM7C1tklpCpeTDPMgkJgPZCPxkTVZIryXawKXFcNycVHCgaOYQcQKE/MzfdV8FHW80f4Wk9yS9BMaWnBVy0ZsU+adzCTpd12XABWhQusqV3YTjLQbUDdynBh198pgofzkd/oUA45JEYy37pqMdPAmk/a3Hy4Azr0gp4dttLIcPaVISs0bHHpbu5kR7VtjCBQqnyYacWPooRZK2SnO76MiGMv1lBAqAI53p/bC+UCSdTfhP5fyyAekoBSb55enbJYCuBaXdKzFKYFKcwHu66yw0AzSMnYMq7dBPeYTeWhPR62Q4aN72jk7cmeehUX3DhvmlIev8ZMYg==",
    "544265855": "U2FsdGVkX1/MVWDBHJjPMMES4uDv4Kb8RGoRf9jRKQ5d9o75WbD2rt94oCJ7PJq2qW6SYSa4r0hLgWPzQaa6VdUjclhYK/ciLeRyhOneFRMTR+Cjs3GpKukdcPmcy2cPyM4+XX4X/IhksXxy1P6yMMDruiAkw6sR4swc7DOmvYeGrdqqs0SxxKRHKoVP71hBfqDsGTY5R+gnznny9cAI+djQajSB4qA2c++x/smkoS7Uvpok+AYxp9ywd+/ShdouDcaR8fbupmj2rDtgzsaeTy5Y65KnkAaP2smWFC/2uPCs1HaRyVoTCb54yUeOVscOblBodd6u1Wrs7O23wk2OQLZohauHnSYqqfKh3bCZ9AVsnSU/R6SCdPMn6auZzBCY/NlTdukmw2gh99/mJBGZTDn9H6FI9OtSYaNVwwdByvAu4gyLkWHHYRT7XcsBPczVUmTk8aYpG6heZQ6SsKvkgA=="
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
