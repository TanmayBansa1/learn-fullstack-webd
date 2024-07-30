// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter(n){
    console.log(n);
    setTimeout(()=>{
      counter(n+1);
    },1000)
  }
  
counter(5);
  





































































// (Hint: setTimeout)