var entreprise;
var poste;
var lieu;
var url;
var description;
var tabJob = [];

function scrapJobAltP(){
    // const xEntreprise = "/html/body/div[1]/div[3]/article/div[2]/div[2]/div[1]/p[1]";
    // entreprise = document.evaluate(xEntreprise, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    // entreprise = entreprise.innerHTML;
    // console.log(entreprise);
    // tabJob.push(entreprise);
    entreprise = document.querySelector("div.entry-content.clearfix").innerHTML || "fuck";
    console.log(entreprise);
    tabJob.push(entreprise);
}