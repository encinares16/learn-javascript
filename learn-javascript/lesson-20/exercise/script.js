
//  Counter

let x = 0;
document.getElementById('increase').onclick = function (){
  x+=1;
  document.getElementById('myLabel').innerHTML = x;
}

document.getElementById('decrease').onclick = function (){
  x-=1;
  document.getElementById('myLabel').innerHTML = x;
}