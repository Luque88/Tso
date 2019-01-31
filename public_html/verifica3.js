/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Pavimento (larghezza, lunghezza, nome) {
    this.larghezza= larghezza;
    this.lunghezza= lunghezza;
    this.nome= nome;
    this.colore= "brown";
    this.prezzoFinale = function (quanto){
        let ris=0;
       
    }
    
}
 //creo variabili globali una volta sola
 
 var pav;
 var dris;
 var sp_totale;
 
 function disPavimento(){
    // mi serve lunghezza larghezza
    let lun=pav.lunghezza;
    let heightMax=document.getElementById("dpax").clientHeight;
    let lar=pav.larghezza;
    let nuovah=heightMax*lun/larghezza;
    document.getElementById("dpav").style.height=nuovah+"px";
 }
 
 function creaPavimento(){
    //inizializzo oggetti globali
    dris = document.getElementById("div_ris");
    sp_totale = document.getElementById("sp_totale");
    
    let larghezza= document.getElementById("ins_larghezza").value;
    let lunghezza= document.getElementById("ins_lunghezza").value;
    pav = new Pavimento (larghezza, lunghezza, nome);
    dris = document.getElementById("div_ris");
    let prn=pav.stato();
    dris.innerHTML=prn;
    disPavimento();
   
     
 }   
    
 function rigaPreventivo (){
     
 }

 
 
 
 
 
 
 
 
 
 
 
 