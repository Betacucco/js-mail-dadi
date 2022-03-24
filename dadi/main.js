let confermaDiGioco = confirm("Vuoi vedere se sei piu' fortunato del computer?");

if(confermaDiGioco){
    let numeroCasualeGiocatore = Math.floor((Math.random() * 6) + 1);
    console.log(numeroCasualeGiocatore);
    let numeroCasualeComputer = Math.floor((Math.random() * 6) + 1);
    console.log(numeroCasualeComputer);

    if(numeroCasualeGiocatore > numeroCasualeComputer){
        alert("Hai vinto!");
    } else if(numeroCasualeGiocatore < numeroCasualeComputer){
        alert("Hai perso!");
    } else {
        alert("Pareggio!");
    }
} else {
    alert("Arrivederci");
}