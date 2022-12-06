// function IsBissextile(annee)
// {
// if ((annee%4==0) && ((annee%100!=0) || (annee%400==0))) return true;
// else return false;
// }
function afficherBoiteDialogue()
{
    var condition=false;
    do{
        var annee=prompt("Entrez une année sous forme YYYY:")
        if((isNaN(annee) === true)  || (annee.lenght!=4)  || (annee.lenght<=0)){
            condition=false;}
        else{
            condition=true;
            EstBissextile(annee);
        }

        }
        while(condition===false);
    }
    function EstBissextile(annee)
    {
        if ((annee % 4 === 0  && annee % 100 > 0)  || (annee % 400 === 0))
        {
            document.getElementById('zone saisie').innerHTML="<p style='color:green;'>L'année "+annee+" : est une année bissexile</p>";
        }
        else{
            document.getElementById('zone saisie').innerHTML="<p style='color:red;'>L'année "+annee+" : n'est pas une année bissexile</p>";
        }
    }
