const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const reader = new FileReader();
const img = new Image();

img.src = "planet-1702788_1920.jpg";
img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
};

function uploadImage(e) {
    reader.onload = () => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
}

const imageLoader = document.getElementById("uploader");
uploader.addEventListener("change", uploadImage);
const greyscale = () => {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
        data[i] = grey;
        data[i + 1] = grey;
        data[i + 2] = grey;
    }
    context.putImageData(imageData, 0, 0);
};

const sepia = () => {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
        data[i] = grey + 95;
        data[i + 1] = grey + 58;
        data[i + 2] = grey;
    }
    context.putImageData(imageData, 0, 0);
};

const invert = () => {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
    context.putImageData(imageData, 0, 0);
};


imageLoader.addEventListener("change", uploadImage);
document.querySelectorAll("button")[0].addEventListener("click", greyscale);
document.querySelectorAll("button")[1].addEventListener("click", sepia);
document.querySelectorAll("button")[2].addEventListener("click", invert);