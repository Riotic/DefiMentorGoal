var entreprise;
var poste;
var lieu;
var url;
var description;
var tabJob = [];

function scrapJobPoleEmploi(){
    entreprise = document.querySelector("h3.t4.title").innerHTML;
    tabJob.push(entreprise);

    poste = document.querySelector("h1.t2.title").innerHTML;
    tabJob.push(poste);

    const xLieu = "/html/body/main/div/div/div/div/div/div/div/div/div/p/span/span[5]";
    lieu = document.evaluate(xLieu, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    lieu = lieu.innerHTML;
    tabJob.push(lieu);

    url = window.location.href;
    tabJob.push(url);
    
    description = document.querySelector("div.description.col-sm-8.col-md-7").innerText;
    tabJob.push(description);

    return tabJob;
}