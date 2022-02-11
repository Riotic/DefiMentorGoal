var entreprise;
var poste;
var lieu;
var url;
var description;
var tabJob = [];

function scrapJobDirectEmploi(){

    const xentreprise = "/html/body/article/div/div/div/div/div/div/div/div/div/div/span/span[1]"
    entreprise = document.evaluate(xentreprise, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    entreprise = entreprise.innerHTML;
    tabJob.push(entreprise);

    const xposte = "/html/body/article/div/div/div/div/div/div/div/div/div/div[1]/span"
    poste = document.evaluate(xposte, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    poste = poste.innerHTML;
    tabJob.push(poste);

    const xlieu = "/html/body/article/div/div/div/div/div/div/div/div/div[1]/div[6]"
    lieu = document.evaluate(xlieu, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    lieu = lieu.innerHTML;
    tabJob.push(lieu);

    url = window.location.href;
    tabJob.push(url);

    description = document.querySelector("div.contenu_offre").innerText;
    tabJob.push(description);

    return tabJob;
}