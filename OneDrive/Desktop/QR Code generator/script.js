document.addEventListener("DOMContentLoaded", () => {
    const qrInput = document.getElementById("url");
    const generateBtn = document.getElementById("generateBtn");
    const qrImg = document.querySelector(".qr-code img");
    const wrapper = document.querySelector(".wrapper");
    let preValue = "";

    generateBtn.addEventListener("click", () => {
        const qrValue = qrInput.value.trim();
        if (!qrValue || preValue === qrValue) return;
        preValue = qrValue;
        generateBtn.innerText = "Generating QR Code...";
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
        qrImg.addEventListener("load", () => {
            wrapper.classList.add("active");
            generateBtn.innerText = "Generate QR Code";
        });
    });

    qrInput.addEventListener("keyup", () => {
        if (!qrInput.value.trim()) {
            wrapper.classList.remove("active");
            preValue = "";
        }
    });
});
