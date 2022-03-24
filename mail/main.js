//Lista delle email che abbiamo
let listaEmail = [ "matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];

//Inserimento da tastiera della email
const inserisciEmail = prompt("Inserisci la tua email");
console.log(inserisciEmail);

//Variabile booleana per uscire dal ciclo for
let controlloDiAccessoInserimento = false;

//Scorriamo l'array per tutta la sua lunghezza e finche' la variabile booleana non e' true
for(let i = 0; (i < listaEmail.length) && (!controlloDiAccessoInserimento); i++){
    //Se l'email inserita e' uguale ad una email nella lista usciamo dal for
    if(inserisciEmail == listaEmail[i]){
        
        alert("Accesso consentito!");
        controlloDiAccessoInserimento = true;
        
        //Altrimenti se non e' nel for decidiamo se aggiungerla o meno 
    } else if(i == listaEmail.length - 1){

        let confermaDiInserimentoMail = confirm("Vuoi inserire la tua email in lista?");

        if(confermaDiInserimentoMail){
            listaEmail.push(inserisciEmail);
            alert("Email inserita. Accesso Consentito");
            controlloDiAccessoInserimento = true;
    
        } else {
            alert("Accesso Negato!");
             controlloDiAccessoInserimento = true;
    
        }

    }
}


//Stampa in console della lista e del valore booleano
console.log(listaEmail);
console.log(controlloDiAccessoInserimento);


