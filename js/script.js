// GOAL: replicare le funzioni della todo-list viste a lezione con le seguenti caratteristiche
//- stampare in pagina un item per ogni elemento contenuto in un array
//- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
//- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
function init(){
  // costruttore classe
   new Vue({
    'el': '#app',
    'data':{
      list: [
        'elem1',
        'elem2',
        'elem3',
        'elem4'
      ],
      nuvovaElm:'' //prende il valore che dà l'utente
    },
    // mettiamo delle funzioni che attiviamo ad un oggetto
    'methods':{
      rimuoviElmList:function(paramentroIndice){
        // elimino con la x gli elementi
        this.list.splice(paramentroIndice,1);
      },
      aggiungiElmList:function(){
        if(this.nuvovaElm.length > 0){
          this.list.push(this.nuvovaElm)
        }else{
          console.log('non hai scritto niente')
        };
        // cancella valore della lista
        this.nuvovaElm=""
      }
    }
  });
};

init();
