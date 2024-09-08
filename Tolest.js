// function getMax(numbars) {
//    let max = numbars[0];
//    for( const numbar of numbars){
//      if(numbar > max){
//       max = numbar;
//      }
//    }
// return max;
// }
// const heights1 = [55, 56, 88, 556, 454, 98, 145, 98, 455]
// const max = getMax(heights1);
// console.log('max value is ', max);


// function getmin(numbars){
//    let min = numbars[0];
//    for(const numbar of numbars){
//       if(numbar < min){
//          min = numbar;
//       }
//    }
//    return min;
// }
// const heights = [55, 56, 88, 556, 454, 98, 145, 98, 455];
// const min = getmin(heights);
// console.log('min value is', min);

function getMax(numbars) {
   let max = numbars [0];
   for(const numbsr of numbars){
      if(numbsr > max){
         max = numbsr;
      }
   }
   return max;
}
const allNumbar = [100, 200, 500, 900, 600, 700, 20, 50];
const max = getMax(allNumbar);
console.log('max  value is:', max);

console.log('====================');

function getmin(numbars) {
   let min = numbars[0];
   for(const numbar of numbars){
      if(numbar < min){
         min =numbar
      }
   }
   return min;
}
const allNumbar1 = [100, 200, 500, 900, 600, 700, 20, 50];
const min = getmin(allNumbar1);
console.log('min value is:',min);

console.log('================');

