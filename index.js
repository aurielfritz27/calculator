const display = document.getElementById("display");
window.addEventListener('load', function () {
  display.value = "0";
});

function appendtoDisplay(input) {
  if (display.value === "0" || display.value === "error" || display.value === "Error") {
    display.value = input;
  } else {
    display.value += input;
  }
}

function appendtoDisplay(input) {
  if(display.value === "0" || display.value === "error" || display.value === "Error"){
    display.value = input;
  }else{
     display.value += input;
  }
}

function calculate(){
  try {
    let result = eval(display.value);
    if (result == undefined || result == null){
      display.value = "error";
    }else{
      display.value = result;
    }
  } catch(error){
    display.value = "error";
  }
}

function clearDisplay() {
  display.value = "0";
}

function backspace(){
  if (display.value === "error" || display.value === "0" || display.value.length <= 1){
    display.value = "0";
  }else{
    display.value = display.value.slice(0, -1);  
  }
}