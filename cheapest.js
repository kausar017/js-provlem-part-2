const mobiles = [
    { name: 'samsung', price: 20000, camara: '12mp', color: 'black'},
    { name: 'xoumi', price: 25000, camara: '12mp', color: 'black'},
    { name: 'sempony', price: 30000, camara: '12mp', color: 'black'},
    { name: 'infinix', price: 50000, camara: '12mp', color: 'black'},
    { name: 'relmi', price: 40000, camara: '12mp', color: 'black'},
    { name: 'nokeya', price: 60000, camara: '12mp', color: 'black'}
]

function cheapest(phones) {
    //console.log(phones);
    let min = phones[0];
    for(const phone of phones){
        if(phone > min){
            min = phone;
        }
    }
    return min;
}
const cheap = cheapest(mobiles);
console.log(cheap);
