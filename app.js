// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg Вивести зображення з цієї папки, отримане випадковим чином (Math.random)<!-- HTML розмітка -->




let folderPath = 'images/';
const imageFiles = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
let randomIndex = Math.floor(Math.random() * imageFiles.length);
let randomImageName = imageFiles[randomIndex];
const randomImagePath = folderPath + randomImageName;
const randomImageElement = document.getElementById('randomImage');

randomImageElement.src = randomImagePath;