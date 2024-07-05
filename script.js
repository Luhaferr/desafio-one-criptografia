function criptografar() {
  const textInput = document.getElementById("textInput").value;
  document.getElementById("textOutput").innerHTML = textInput
    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function descriptografar() {
  const textInput = document.getElementById("textInput").value;
  document.getElementById("textOutput").innerHTML = textInput
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function textCheck() {
  const textAreaOutputValue = document.getElementById("textOutput").value.trim();
  const buttonCopiar = document.getElementById("copiar");
  
  if (textAreaOutputValue.length > 0) {
    buttonCopiar.style.display = "inline-block";
  } else {
    buttonCopiar.style.display = "none";
  }
}

function toCheckCriptografia() {
  criptografar();
  textCheck();
  hideResultArea();
}

function toCheckDescriptografia() {
  descriptografar();
  textCheck();
  hideResultArea();
}

function copy() {
  const textAreaOutput = document.getElementById("textOutput").innerHTML;
  navigator.clipboard.writeText(textAreaOutput).then(() => {
    document.getElementById("copiar").innerHTML = "Copiado!";
  }, () => {
    alert("Falha ao copiar texto.");
  });
}

function hideResultArea() {
  const textAreaOutput = document.getElementById("textOutput").innerHTML;
  const resultArea = document.getElementById("result__area");

  if (textAreaOutput.length > 0) {
    resultArea.style.display = "inline-block";
  } else {
    resultArea.style.display = "none";
  }
}