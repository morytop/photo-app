const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const reader = new FileReader()
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

function change() {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data
    for (let i = 0; i < data.lenght; i += 4) {
        data[i];
        data[i + 1];
        data[i + 2];
    }
    context.putImageData(imageData, 0, 0);
}

const imageLoader = document.getElementById('uploader');
imageLoader.addEventListener("change", uploadImage);
document.querySelectorAll("button")[0].addEventListener("click", change);