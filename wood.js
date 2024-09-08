function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 20;

    const allChairWood = chairQuantity * perChairWood;
    const allTableWood = tableQuantity * perTableWood;
    const allBadeWood = bedQuantity * perBedWood;

    const totalWood = allChairWood + allTableWood + allBadeWood;
    return totalWood;
    
}
const wood = woodQuantity(1, 2, 3);
console.log(wood);

console.log('==============================');

function fationQuantity(pantQuantity, sartQuantity, showQwantity) {
    parPant = 300;
    parSart = 500;
    parShow = 900;

    const allPant = pantQuantity * parPant;
    const allSart = sartQuantity * parSart;
    const allShow = showQwantity * parShow;

    const totalFation = allPant + allSart + allShow;
    return totalFation;
}
const fation = fationQuantity(10, 5, 3);
console.log(fation);


function bazarQuantity(richQuantity, dalQuantity, peyajQuantity, anajpatiQuantity) {
   
    riceKg = 50;
    dalKg = 70;
    peyajKg = 60;
    anajpati = 40;

    const totalRice = richQuantity * riceKg;
    const totalDal = dalQuantity * dalKg;
    const totalPeaj = peyajQuantity * peyajKg;
    const totalAnajpati = anajpatiQuantity * anajpati;

    const totalBazar = (totalRice + totalDal + totalPeaj + totalAnajpati);

    return totalBazar;
}
const bazar = bazarQuantity(5, 6, 8, 10);
console.log(bazar);
