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