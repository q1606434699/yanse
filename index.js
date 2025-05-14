document.addEventListener('DOMContentLoaded', () => {
  const colors = [
    { name: '红色', hex: '#FF0000' },
    { name: '橙色', hex: '#FFA500' },
    { name: '黄色', hex: '#FFFF00' },
    { name: '绿色', hex: '#008000' },
    { name: '青色', hex: '#00FFFF' },
    { name: '蓝色', hex: '#0000FF' },
    { name: '紫色', hex: '#800080' },
    { name: '黑色', hex: '#000000' },
    { name: '白色', hex: '#FFFFFF' }
  ];

  const colorNameElement = document.getElementById('color-name');
  const colorCubeElement = document.getElementById('color-cube');
  const changeColorButton = document.getElementById('change-color-button');

  function randomizeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const currentColor = colors[randomIndex];
    colorNameElement.textContent = currentColor.name;
    colorCubeElement.style.backgroundColor = currentColor.hex;
  }

  changeColorButton.addEventListener('click', randomizeColor);

  // Initialize with a random color
  randomizeColor();
});