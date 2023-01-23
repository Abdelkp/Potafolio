// Constantes
const textArea = document.querySelector(".text-area");
const encryptButton = document.querySelector(".btn-encriptar");
const desencryptButton = document.querySelector(".btn-desencriptar");
const mensaje = document.querySelector(".mensaje");
const copyButton = document.querySelector(".btn-copiar");
const noEncontrado = document.querySelector(".textEn");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    copyButton.style.display = "block"
    noEncontrado.style.display = "none"

}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    
}

// "llaves" de encriptación
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],
                    ["i", "imes"],
                    ["a", "ai"],
                    ["o", "ober"],
                    ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],
                    ["i", "imes"],
                    ["a", "ai"],
                    ["o", "ober"],
                    ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

copyButton.addEventListener("click", () =>{
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});

