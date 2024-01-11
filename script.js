var dateDiffInDays = function (date1, date2) {
  let val1  = new Date(date1).getTime();
   let val2 = new Date(date2).getTime();
   if(val1 > val2){
       return -1;
   }else if(val1 === val2){
       return 0;
   }else {
       let diff = Math.round(( val2 - val1 )/(1000* 3600*24));
       return diff;
   }
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
