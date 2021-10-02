function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("t").deleteRow(i);
  }
function ajouter()
{
    var table=document.getElementById(t);
    var code=document.getElementById('c').value;
    alert('vous etes sur du votre code '+ code +'?' );    
    var quantite=document.getElementById('q').value;
    if(code=="c001"){
        var Price=3999*quantite;
     var prix=prix+Price;
     var ligne="<tr><td>Pc msi</td><td>3999</td><td>"+quantite+"</td><td><input type='button' value='Supprimer' class='dil' onclick='deleteRow(this)' ></input> </td></tr>"
     t.innerHTML +=ligne;
     var totalpanier=Price;
        h.innerHTML =totalpanier;
    } else if(code=="c002"){
        var Price2=2299*quantite;
    
        var prix=prix+Price2;

        var ligne="<tr><td>PC Acer</td><td>2299</td><td>"+quantite+"</td><td><input type='button' value='Supprimer' class='dil' onclick='deleteRow(this)' ></input> </td></tr>"
        t.innerHTML +=ligne;
        
        var totalpanier=Price2;
        h.innerHTML =totalpanier;

    } else if(code=="c003"){
        var price3=1979*quantite;
        var prix=prix+price3;
        var ligne="<tr><td>PC Lenovo</td><td>1979</td><td>"+quantite+"</td><td><input type='button' value='Supprimer' class='dil' onclick='deleteRow(this)' ></input> </td></tr>"
        
        t.innerHTML +=ligne;
        var totalpanier=price3;
        h.innerHTML =totalpanier;
    } else {
        alert("verifier votre choix");
    }
    
}
