var giocatore;
var punteggioGiocatore = 0;
var computer;
var punteggioComputer = 0;

var scelte = ["sasso", "carta", "forbici"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        // <img id="sasso" src="sasso.png">
        let scelta = document.createElement("img");
        scelta.id = scelte[i];
        scelta.src = scelte[i] + ".png";
        scelta.addEventListener("click", selezionaScelta);
        document.getElementById("scelte").append(scelta);
    }
}

function selezionaScelta() {
    // Scelta del giocatore basata sull'immagine cliccata
    giocatore = this.id;
    document.getElementById("scelta-giocatore").src = giocatore + ".png";

    // Scelta casuale del computer
    computer = scelte[Math.floor(Math.random() * 3)];
    document.getElementById("scelta-computer").src = computer + ".png";

    // Aggiornamento dei punteggi
    if (giocatore === computer) {
        punteggioGiocatore += 1;
        punteggioComputer += 1;
    } else {
        if ((giocatore === "sasso" && computer === "forbici") ||
            (giocatore === "forbici" && computer === "carta") ||
            (giocatore === "carta" && computer === "sasso")) {
            punteggioGiocatore += 1;
        } else {
            punteggioComputer += 1;
        }
    }

    // Mostra i punteggi aggiornati
    document.getElementById("punteggio-giocatore").innerText = punteggioGiocatore;
    document.getElementById("punteggio-computer").innerText = punteggioComputer;
}
