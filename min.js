function getMin(numbars) {
   let min = numbars[0];
   for(const numbar of numbars){
    if(numbar < min){
        min = numbar;
    }
   }
    return min
}
const mobilePrice = [12000, 30000, 50000, 60000, 80000, 350000, 40000];
const min = getMin(mobilePrice);
console.log(min);
