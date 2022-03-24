let listaEmail = [ "matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];

const inserisciEmail = prompt("Inserisci la tua email");
console.log(inserisciEmail);

for(let i = 0; i < listaEmail.length; i++){
    if(listaEmail[i] == inserisciEmail){
        alert("Accesso consentito!");
        break;
    } else {
        let confermaDiInserimentoMail = confirm("Vuoi inserire la tua email in lista?");
        if(confermaDiInserimentoMail){
            listaEmail.push(inserisciEmail);
            alert("Email inserita!");
            break;
        } else {
            alert("Grazie e Arrivederci!");
            break;
        }
    }
}

console.log(listaEmail);
