let generateButton, preview, output, copyButton, showHide, lastSignature;

document.addEventListener("DOMContentLoaded", () => {
  generateButton = document.querySelector("#generate");
  showHide = document.querySelector("#show-hide");
  preview = document.querySelector("#preview");
  output = document.querySelector("#output");
  copyButton = document.querySelector("#copy");

  generateButton.addEventListener("click", e => {
    e.preventDefault();
    generateSignature();
  });

  showHide.addEventListener("click", e => {
    preview.style.display =
      preview.style.display === "none" ? "contents" : "none";
    output.style.display =
      output.style.display === "none" ? "contents" : "none";
  });
});

const generateSignature = () => {
  const inputs = document.querySelectorAll("input");
  let input = {};
  inputs.forEach(e => {
    input[e.name] = e.value;
  });
  const signatureText = signature(input);
  const textNode = document.createTextNode(signatureText);
  output.appendChild(textNode);
  preview.innerHTML = signatureText;
  lastSignature = signatureText;
};
