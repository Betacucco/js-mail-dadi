//Chiediamo all'utente se vuole giocare
let confermaDiGioco = confirm("Vuoi vedere se sei piu' fortunato del computer?");

//Se gioca verrano generati due numeri casuali
if(confermaDiGioco){
    let numeroCasualeGiocatore = Math.floor((Math.random() * 6) + 1);
    console.log("Il numero del giocatore e':" + numeroCasualeGiocatore);
    let numeroCasualeComputer = Math.floor((Math.random() * 6) + 1);
    console.log("Il numero del computer e':" + numeroCasualeComputer);

    //In base ai numeri casuali vincera' l'utente o il computer, oppure pareggiano
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