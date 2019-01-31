/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ar_articolo=[];
var ar_costo=[];


 function aggiorna(){
            let today = new Date().toLocaleDateString()
            let testo = document.getElementById("inserisci_nome").value;
            let visualizza = document.getElementById("visualizza_testo");
            
            visualizza.innerHTML = "Oggi è il " + today + " ciao " + testo + " buona giornata";
        }



function spostaNomi(){
   
    
    let nome1= document.getElementById("in_nome1").value;
    let nome2= document.getElementById("in_nome2").value;
    let nome3= document.getElementById("in_nome3").value;
    
    document.getElementById("in_nome1").value= nome3;
    document.getElementById("in_nome2").value= nome1;
    document.getElementById("in_nome3").value= nome2;
     
     
    
     
}


function aggiungiProdotti(){
    //carico gli array
    ar_articolo.push(document.getElementById("in_articolo").value);
    ar_costo.push(document.getElementById("in_costo").value);
    prep_output();

}

function prep_output (){
    let text="";
    let totale=0;
    for (i=0; i< ar_costo.length; i++){
         totale+= ar_costo[i]*1;
    text +="<span id='sp_totale" + i + "'>#" + (i+1)+ "-" + ar_articolo[i] + " -" + ar_costo [i] + "</span><br>";
       
    }
      
  document.getElementById("div_list").innerHTML=text;
  document.getElementById("sp_totale").innerHTML=totale;
 
  }

 
function somma (){
    ris=0;
    v1=v1*1;
    v2=v2*1;
    v3=v3*1;
    
    ris= v1+v2 +v3;
    
    return ris;
  
 }  

function media(){
    ris=0;
    
}  
 

 
    

    
  
 
   
  






