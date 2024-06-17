// var titulo = document.querySelector(`h1`);
// titulo.innerHTML = `Jogo Adivinha`;
// var paragrafo = document.querySelector(`p`);
// paragrafo.innerHTML = `Insira um número de 1 à 100`;
// console.log(`O número secreto é: ${secretNumber}`)
let secretArray = [];
var maxSecretNumber = 100;
var secretNumber = getRandomNumberinator();
var tryGuess = 0;
var tryLeft = 6;
function showTextScreeninator(tag, texto) {
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}
function textRestartinator() {
    showTextScreeninator('h1', 'Jogo do Número Secreto');
    showTextScreeninator('p', `Escolha um número entre 1 e ${maxSecretNumber}. Você tem 6 tentativas no total!`);
}
textRestartinator();
function getRandomNumberinator() {
    var chosenNumber = parseInt(Math.random() * maxSecretNumber + 1);
    var maxSecretArray = secretArray.length
    if (maxSecretArray == maxSecretNumber) {
        secretArray = [];
    }
    if (secretArray.includes(chosenNumber)) {
        return getRandomNumberinator();
    }
    else {
        secretArray.push(chosenNumber);
        console.log(secretArray)
        return chosenNumber;
    }
}
function checkGuessNumberinator() {
    var guessedNumber = document.querySelector("input").value;
    fieldClearinator();
    tryGuess++;
    tryLeft--;
    var tryLeftText = tryLeft > 1 ?
    `${tryLeft} tentativas restantes`
    :
    `Essa é sua ÚLTIMA chance`
    var tryText = tryGuess > 1? 
    'tentativas!'
    : 
    'tentativa. Tá xitando né fdp?'
    var tryHigherOrLower = guessedNumber > secretNumber ? 
    `Tente um número MENOR que ${guessedNumber}` 
    :
    `Tente um número MAIOR que ${guessedNumber}.`;
    if (guessedNumber == secretNumber) {
        showTextScreeninator('h1', `ACERTOU!`);
        showTextScreeninator('p', `O número secreto era ${secretNumber}! Com ${tryGuess} ${tryText}`);
        endButtons();
    }
    else if (tryLeft == 0) {
        showTextScreeninator('h1', `PERDEDOR!`);
        showTextScreeninator('p', `Você é horrível nisso. Morra. O número correto era: ${secretNumber}`);
        endButtons();
    }
    else if (guessedNumber > secretNumber) {
        showTextScreeninator('h1', tryLeftText);
        showTextScreeninator('p', tryHigherOrLower);
    }
    else if (guessedNumber < secretNumber) {
        showTextScreeninator('h1', tryLeftText);
        showTextScreeninator('p', tryHigherOrLower);
    }
    function logShowinator() {
        console.log(`Tries Guessed: ${tryGuess}`);
        console.log(`Secret Number: ${secretNumber}`);
        console.log(`Guessed Number: ${guessedNumber}`);
        console.log(`Tries Left: ${tryLeft}`);
    }
    logShowinator();
}
function fieldClearinator() {
    var fieldClear = document.querySelector("input");
    fieldClear.value = "";
}
function endButtons() {
    document.getElementById('numberBox').setAttribute('disabled', true);
    document.getElementById('guessButton').setAttribute('disabled', true);
    document.getElementById('restartButton').removeAttribute('disabled');
}
function startButtons() {
    document.getElementById('numberBox').removeAttribute('disabled');
    document.getElementById('guessButton').removeAttribute('disabled');
    document.getElementById('restartButton').setAttribute('disabled', true);
}
function restartinator() {
    textRestartinator();
    startButtons();
    secretNumber = getRandomNumberinator();
    triesRestartinator();
    return secretNumber;
}
function triesRestartinator() {
    tryGuess = 0;
    tryLeft = 6;
}


// unction wordLenght(word) {
//     var wordCount = word.length
//     console.log(`Comprimento de ${word} é: ${wordCount}`)
// }
// wordLenght("Domingo")
// function loopinator(nLoop) {
//     for (let i=1;i<=nLoop;i++){
//         console.log(`loop ${i} de ${nLoop}`);
//     }
// }
// loopinator(10)
// function tabuada(x) {
//     for (let i = 1; i <= 10; i++) { 
//     var resultado = x * i;
//     console.log(`${x} x ${i} = ${resultado}`)
//     }
// }
// tabuada(5)

// var N1 = parseInt(prompt("Digite a primeira nota:"));
// var N2 = parseInt(prompt("Digite a segunda nota:"));
// var M = (N1 + N2) / 2;
// console.log(`A média do aluno é: ${M}`)
// if (M >= 7) {
//     console.log("ALUNO APROVADO!")
// }
// else if(M>=5 && M<7) {
//     console.log("ALUNO EM RECUPERAÇÃO!")
// }
// else console.log("ALUNO REPROVADO!")
// var linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
// console.log(linguagensDeProgramacao)
// linguagensDeProgramacao.push("Java", "Ruby", "GoLang")
// console.log(linguagensDeProgramacao)
// console.log(linguagensDeProgramacao[0])
// console.log(linguagensDeProgramacao[1])
// console.log(linguagensDeProgramacao[2])