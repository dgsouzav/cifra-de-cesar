const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputOriginal = document.getElementById('input-original');
const cifra = document.getElementById('cifra');
const resultado = document.getElementById('resultado');
const classificacao = document.getElementById('classificacao');

const shifMessage = () => {
    const wordArray = [...inputOriginal.value.toUpperCase()];
    printChar(0, wordArray);
}

const printChar = (currentLetterIndex, wordArray) => {
    if(wordArray.length === currentLetterIndex) return;
    inputOriginal.value = inputOriginal.value.substring(1)
    const spanChar = document.createElement("span");
    resultado.appendChild(spanChar);
    animateChar(spanChar)
        .then( () => {
            const charCodificar = wordArray[currentLetterIndex];
            spanChar.innerHTML = alfabeto.includes(charCodificar) ? 
                alfabeto[(alfabeto.indexOf(charCodificar) + parseInt(rango.value)) % alfabeto.length] : 
                charCodificar
            printChar(currentLetterIndex + 1, wordArray);
        });
}

const animateChar = spanChar => {
    let trocaDeLetra = 0;
    return new Promise(resolve => {
        const intervalo = setInterval(() => {
            spanChar.innerHTML = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            trocaDeLetra++;
            if(trocaDeLetra === 3) {
                clearInterval(intervalo);
                resolve();
            }
        }, 50);
    });
}

const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shifMessage()
}

cifra.onsubmit = submit;