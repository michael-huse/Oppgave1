
// Variabler som skal fylle arrayet som vises på html siden
let utFornavn="";
let utEtternavn="";
let utEpost="";
let utTlf="";


//Arrayet som printes for å vise kjøpte billetter
let billetter= [];

//regex utrykk som validerer innputen i inputenfeltene
const regexNavn = /^[a-zA-Z]+$/;
const regexEpost = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const regexNummer = /^((0047)?|(\+47)?)[4|9]\d{7}$/;


//Valideringsfunksjoner for hvert enkelt felt i bestillingstabellen
function inputValideringfornavn() {

    let fornavninput = document.getElementById('fornavn').value;

    if (regexNavn.test(fornavninput)) {
        utFornavn=fornavninput;
       document.getElementById('fornavnvalidering').innerText="";

    } else {
        utFornavn="feil";
        document.getElementById('fornavnvalidering').innerText="Du må skrive inn et fornavn";
    }
}

function inputValideringEtternavn() {

    let etternavninput=document.getElementById('etternavn').value;

    if (regexNavn.test(etternavninput)) {
        utEtternavn=etternavninput;
        document.getElementById('etternavnvalidering').innerText="";
    } else {
        utEtternavn="feil";
        document.getElementById('etternavnvalidering').innerText="Du må skrive inn et etternavn";
    }

}


function inputValideringtelefonnummer() {

    let tlfinput=document.getElementById('telefonnummer').value;

    if (regexNummer.test(tlfinput)) {
        utTlf=tlfinput;
        document.getElementById('telefonvalidering').innerText="";
    }else {
        utTlf="feil";
        document.getElementById('telefonvalidering').innerText="Du må skrive inn et gyldig telefonnummer";
    }

}


function inputValideringepost() {

    let epostinput=document.getElementById('epost').value;

    if (regexEpost.test(epostinput)) {
        utEpost=epostinput;
        document.getElementById('epostvalidering').innerText="";
    } else {
        utEpost="feil";
        document.getElementById('epostvalidering').innerText="Du må skrive inn en gyldig epost";
    }

}


// Funksjon som lager et billettobjekt av inputen og legger det til i arrayet som printes om inputen består regex testen
function opprettBillett() {
    let outputstreng = "";

    billett = {
        film: document.getElementById('velgFilm').value,
        Antall: document.getElementById('Antall').value,
        Fornavn: utFornavn,
        Etternavn: utEtternavn,
        Epost: utEpost,
        Telefonnr: utTlf
    };

    if (utFornavn !== "feil" && utEtternavn !== "feil" && utEpost !== "feil" && utTlf !== "feil") {
        billetter.push(billett);
    }

    for (let i = 0; i < billetter.length; i++) {
        outputstreng += billetter[i].Antall + " stykk billetter til " + billetter[i].film + "\n" +
            "Bestilt av: " + "\n" + "\n" +
            "Fornavn: " + billetter[i].Fornavn + "\n" +
            "Etternavn: " + billetter[i].Etternavn + "\n" +
            "Epost: " + billetter[i].Epost + "\n" +
            "Telefonnr: " + billetter[i].Telefonnr + "\n" + "\n" + "\n";
    }

    document.getElementById('billettfelt').innerText = outputstreng;

    //for loop som bruker getElementsByName for å tømme alle html elementer med name input

    let inputbokser = document.getElementsByName('input');
    for (let i = 0; i < inputbokser.length; i++) {
        inputbokser[i].value = "";
    }

    let valideringsbokser = document.getElementsByName('validering');
    for (let i = 0; i < valideringsbokser.length; i++) {
        valideringsbokser[i].value = "";

    }
}

// funksjon som tømmer arrayet og fjerner kjøpte billetter fra siden

function tomarray () {
    billetter.pop();
    document.getElementById('billettfelt').innerText="";
}




