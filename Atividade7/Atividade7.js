
let numJog;
let escolhaComp;

function jogar() {
    numJog = prompt("Escolha uma opção a seguir: 1 = Pedra, 2 = Papel, 3 = Tesoura.");
    

    numJog = parseInt(numJog);

    if (numJog === 1) {
        alert("Você escolheu Pedra!");
    } 
    else {
        if (numJog === 2) {
            alert("Você escolheu Papel!");
        } 
        else {
            if (numJog === 3) {
                alert("Você escolheu Tesoura!");
            } 
            else {
                alert("Escolha inválida!");
                jogar(); 
                return;  
            }
        }
    }
    
  
    computador();
    comparar();
}

function computador() {
    let numcomp = Math.random();
    numcomp = numcomp * 100;
    
    if (numcomp < 33.33) {
        escolhaComp = 1; // Pedra
        alert("Computador escolheu pedra")
    } 
    else {
        if (numcomp < 66.66) {
            escolhaComp = 2; // Papel
            alert("Computador escolheu papel")
        } 
        else {
            escolhaComp = 3; // Tesoura
            alert("Computador escolheu tesoura")
        }
    }
}

function comparar() {
    if (escolhaComp === numJog) {
        alert("EMPATE!");
    } 
    else {

        if (
            (numJog === 1 && escolhaComp === 3) || 
            (numJog === 2 && escolhaComp === 1) || 
            (numJog === 3 && escolhaComp === 2)
        ) {
            alert("Você venceu!");
        } 
        else {
            alert("Você perdeu!");
        }
    }
}


jogar();