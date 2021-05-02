const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const reader = new FileReader()
const img = new Image();

img.src = "planet-1702788_1920.jpg";
img.onload = () => {
    canvas.width = img.width;
    canvas.height = imp.height;
    context.drawImage(img, 0, 0);
};

function uploadImage(e) {
    reader.onload = () => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
}

const imageLoader = document.getElementById('uploader');
imageLoader.addEventListener("change", uploadImage)