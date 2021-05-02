const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const img = new Image();
img.src = "planet-1702788_1920.jpg";
img.onload = () => {
    canvas.width = img.width;
    canvas.height = imp.height;
    context.drawImage(img, 0, 0);
};