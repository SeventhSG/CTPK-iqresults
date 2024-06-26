const secretKey = "8sGCL_ud<)[E1>d6Wh*Ib_fkt}IN|c7^"; // Your secret key

// Encrypted results data (replace with your actual encrypted data)
const encryptedResultsData = {
    "066894606": "U2FsdGVkX1+aIkOU9Pxdl3PMvi9tsuhCxEjen10L7GXOwtChazVMxXwGf95AIZh3Zr1iblwAFBDZcIG8SJ4mvhLpXPAIitZr3xSvx6Y4hkoFJfAhEy6NNxf9jykIw6j5RwttINGEHs5oJ5YRyCf9sOgclGvx3tkzUlvljpheF9Xc5q5xfISOtohlNsBUghE7Z/Gx+xQ0fBhmHWIzDRE2ySrtAjI+VdsbaEpcaMwJH57NZixTEc5Sk+oOVr3Zwhb5BpWtfwuPTgbUuRbpdTb1F9a1TBPoT/pGaUHeLl6Mv5xRWDbCkra8lCHaJnl+2Q1IIV7UuMfXMY0gPS3zxhwwd7GxeV2dXo19yabJnykGyU82sbE8dv45kUzHFf5A4tB1LPOX/rYTMk6p3XG/esxf13IFfdCiEKdR73E2ubt2x7G7INR5wbHw4zXm+BjxsOes",
    "019888824": "U2FsdGVkX19BiV7+M50Miy81Mi7dTfi5GIZ2DNMUzWZuf8p1N2fC8T1gUoZesgAyBStQgLoqi40kMLeNhw43+Q8XMqe6OUheVEkHupYRc1T7YhZWWDr3mH1fnCj5uxa22UCXvL8jRd1jG62a5vDarq+JUbduyMzYpcCFY21ZS0Wy0gin5axQ+GgYlJGQ4SLs3Myqf05h2Jx8jbXkrsuUTcYgkvHKEqACRExfPepgGMdF0X6Q/68uWP0kT7T2HPwUl5uRKelG42CIJ8Rk6Nsik3GldIV6/R/E/TSVHxmPgCB8fV3V2w0ryA6pMTnYZ9ClVfSFxz49aor6f5s3XilTWtmhrFbqoL3ftiPuhtqdG7UHaQKHLC2jrTlo4Buoejpl5KGRcJrbwe1UE0Hbd4GHqfg9y9PEmJRYPdepluMq1+Ii/gKFwY0SThqYeFZB6ueV",
    "963410930": "U2FsdGVkX1/H2ZQHJfCdg+o10tw5amZoLysU30o175epj9J+3AvIQc5ocq+qXWouoD9F7UKm51knPu3h0BJq7ujRyMMW42ERfrkUhxZ4YUL4TklnOcPfB7LiMWBOL9fNmIT3wiSXeGmZbygkZDZ6YhCJbZv9U0Tn9P2A0sOGceq86MbaFEKhkHXMu1U2JRX2WiziblhRa7MSCwsfq6I/k2mx7kClkYQ5aAVTMKWeah4exf6YMH3NsY7tv7p5+blWIR51UxCxe5H9ludtZrosp4O2kD5x4DhwTHsIoAE/lvDnQNWONG6z9yiEA4zbGw8loNsiWn9ALp+wWQ3ttpzBqpEX59Ge4JT5HVtR46MSmnopH5q4CA6I/Bm+B7NY0wKFYez9cZ2hgHwykB16BIRU2ogUGeLBCoylVHUrlIRLfV7NsUBTsKFZJOWGq5ReAi8J",
    "544265855": "U2FsdGVkX1+rvOHzeBRl0XHK4VsIrqcZjCbWZqMxwH6DAEEzfOh+64Nufjcx2CwDc5hWoFW5Axm98jz9Sy2Qic5cw0/LREV6grD0QWfxacfi34ez93cxuhip8qZVGXxe/auvJg6DuLAfwH0M1UdxBOVM2caMbQN9KlWa/xBmwRsDB23i0rpYT0TyLcntyt0bY+b/xIltssdukOp6ff+k6YtEVm8LZdgfBMEdgtVMQtF346Rw8RhfHTezqa7z9xY17fJiUtRvwRJjzgmcq3gbI51UuKi+Em1r6MWAOb+EcrXvW9q/RSiF40OUxpsT6nHVPJ/EomOzlOrw2Ko0NnEK8YOxN8ESqOq0xjPUOglc6IMvPgv0LcD/ITqzjrfNp7auX+FtX6v0mQcv53jnENUcuuEHih95rZhvGn8C73dtVeltGdiqANZVcrxVkamerWDC",
    "493185568": "U2FsdGVkX1/rdU8JYUgTQTDJu9XqWCo7eYy/FDxBWYlQBtRm5Bg8sXvH4uiz9v5qq5gXTiUPR7S8DEOhIjERdujc+FSzJJPr3NxTUFnV/P+/IVVtByVtM+N5pWvTtpR6Ip9NXewdJ/R7aPGSaXbMyt5y3X4j1fKcXMC3QFt25OGhG5WlXucXaW8Bxep9onAv9+LOwCWN8jcRNpLnkopPxZ/g+IFvQSvSZl3l5f1G/SvExifiwPHANxM2/R4yDvLQ90WmTOlfMlBbDLHU4rrQDYpa5WQ/kX9c1I9wHNRur5JnUv+lcrX9Ep2kj+Ku0HG1ZZNHn2zXnTyK0pnuhJfZFUDtiu1h7/Cl4hunbrjDcCamKnqDBhe/wwxbEN00VPyzSZN1Dlnv8TRM0zE+h5UR+9/sauijL1g2JAyMmXyyBBYerZPMd7+/sk9HJri37/DGbMB0N6P9rAwWBJULgD1C0Q==",
    "132241524": "U2FsdGVkX19Q/6oJ8VElHf7/PsZoFGMaSfJUwkAXp7HDgTHJ3S+sWcie/J2CXCdsXSpVwpKpqJmvfaP/7TWaFJYVcpWefLQ2xcioX2xOgKvCb8PaRM1S5uG/sPNc0vB8NKCKZn185nfnY19VIota1BzNplOKtnMcUWmGb6jtwT3oLN7cdALvjyMSqMofKMvjOIyfPTOUoNazWkJXJizK6Mpw513pFZb8T4Pu4+Quo8fwi/aGGDykzg1kn8J+mWTRnRkfqATVx2d8FSPKXcy6NDgEyVf2DkWeY7+ahNIPs4u0tXTGcAZwukus3ZjZd1SWOzSfYPjP8YbvZasS9hFkR+pMFtHsdoaeqGfXDVlXPHImp9/i3xMTYincpH8ffpmH7EfUJSi6lvdSTs5RhowyxF+PDvi6G4NOqMFbCeD1mBUMY/9MJPjKK/p4pdauhlWEICZ508/8bXBpwu7zk9tmkA=="
};

// Function to decrypt data
function decryptData(encryptedData, key) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
}

// Function to show results based on entered serial number
function showResults() {
    const serialNumber = document.getElementById('serialNumber').value;
    const encryptedData = encryptedResultsData[serialNumber];
    const resultsDiv = document.getElementById('results');
    
    if (encryptedData) {
        try {
            const result = decryptData(encryptedData, secretKey);
            resultsDiv.innerHTML = `
                <h2>Резултати за: ${result.name}</h2>
                <p><strong>Суров Резултат:</strong></p>
                <p>Вербално мислене: ${result.rawScores.verbal}</p>
                <p>Количествено разсъждение: ${result.rawScores.quantitative}</p>
                <p>Абстрактно/Визуално разсъждание: ${result.rawScores.abstract}</p>
                <p>Работна памет: ${result.rawScores.memory}</p>
                <p><strong>Преобразуван Резултат:</strong></p>
                <p>Вербално мислене: ${result.convertedScores.verbal}</p>
                <p>Количествено разсъждение: ${result.convertedScores.quantitative}</p>
                <p>Абстрактно/Визуално разсъждание: ${result.convertedScores.abstract}</p>
                <p>Работна памет: ${result.convertedScores.memory}</p>
                <p><strong>Общ Суров Резултат:</strong> ${result.totalRawScore}</p>
                <p><strong>Композитен преобразуван резултат:</strong> ${result.compositeConvertedScore}</p>
                <p><strong>IQ резултат:</strong> ${result.iq}</p>
            `;
        } catch (error) {
            resultsDiv.innerHTML = `<p>Грешка при декриптиране на данните.</p>`;
        }
    } else {
        resultsDiv.innerHTML = `<p>Няма резултати за този сериен номер.</p>`;
    }
}
