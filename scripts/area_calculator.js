function calculateTriangleArea(){
  const baseField = document.getElementById('triangle-base');
  const baseValueText = baseField.value;
  const baseValue = parseFloat(baseValueText);
  console.log(baseValue);
  const heightField = document.getElementById('triangle-height');
  const heightValueText = heightField.value;
  heightValue = parseFloat(heightValueText);
  console.log(heightValue);

  const area = 0.5*baseValue * heightValue;
  console.log(area);
  document.getElementById('triangle-area').innerText = area;
}

function calculateRectangleArea(){
  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const widthValue = parseFloat(widthValueText);
  console.log(widthValue);
  const heightField = document.getElementById('rectangle-height');
  const heightValueText = heightField.value;
  heightValue = parseFloat(heightValueText);
  console.log(heightValue);

  const area =widthValue * heightValue;
  console.log(area);
  document.getElementById('rectangle-area').innerText = area;
}

//reusable function --> DRY code

function calculateParallelogramArea(){
   const base = getInputValueById('parallelogram-base');
   const height = getInputValueById('parallelogram-height');
   const area = base*height;
   setInnerTextById('parallelogram-area',area);
}

function calculateEllipseArea(){
  const first = getInputValueById('ellipse-first-radius');
  const second = getInputValueById('ellipse-second-radius');
  const area = 3.14*first*second;
  setInnerTextById('ellipse-area',area);
}


function getInputValueById(fieldId){
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}

function setInnerTextById(elementId, text){
   const element = document.getElementById(elementId);
   element.innerText = text;
}
