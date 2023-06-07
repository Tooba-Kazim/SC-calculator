function getNum(num){
    document.getElementById('result').value += num;
}

function clearNum(){
    document.getElementById('result').value = '';
}

function removeNumb(){
    var res = document.getElementById('result').value; 
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.length-1)
}

function getResults(){
    document.getElementById('result').value = eval(document.getElementById('result').value)
}
function syntaxError() {
    if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
      display.value == "Syntax Error";
    }
  }
  function PI() {
    display.value = (display.value * Math.PI);
  }
  function sq() {
    display.value = Math.sq(display.value,2);
  }
  
  function sqrt() {
    display.value = Math.sqr(display.value,2);
  }
  function Sin() {
    display.value = Math.sin(display.value);
  }
  
  function Cos() {
    display.value = Math.cos(display.value);
  }
  
  function Tan() {
    display.value = Math.tan(display.value);
  }
  
  function Log() {
    display.value = Math.lg10(display.value);
  }
  function E() {
    display.value = Math.Exp(display.value);
  }