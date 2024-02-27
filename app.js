const inputText = document.querySelector(".text-input");
const outputText = document.querySelector(".div-mensagem");
const btnCriptografar = document.querySelector(".btn-criptografar");
const btnDescriptografar = document.querySelector(".btn-descriptografar");
const btnCopiar = document.querySelector(".btn-copiar");

// Função para criptografar o texto
function criptografar() {
  let textoOriginal = inputText.value;

  const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < matriz_code.length; i++) {
    let regex = new RegExp(matriz_code[i][0], "gi"); // Adicionado 'i' para tornar a regex insensível a maiúsculas/minúsculas
    textoOriginal = textoOriginal.replace(regex, matriz_code[i][1]);
  }

  outputText.value = textoOriginal;
}

// Função para descriptografar o texto
function descriptografar() {
  let textoCriptografado = inputText.value;

  const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < matriz_code.length; i++) {
    let regex = new RegExp(matriz_code[i][1], "g");
    textoCriptografado = textoCriptografado.replace(regex, matriz_code[i][0]);
  }

  outputText.value = textoCriptografado;
}

// Função para copiar o texto
function copiarTexto() {
  outputText.select();
  document.execCommand("copy");
}

// Adiciona event listeners aos botões
btnCriptografar.addEventListener("click", criptografar);
btnDescriptografar.addEventListener("click", descriptografar);
btnCopiar.addEventListener("click", copiarTexto);
