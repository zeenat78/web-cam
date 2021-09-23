const constraints = {
  audio: false,
  video: true,
};

function cameraOn() {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      stream.getVideoTracks();
      window.stream = stream;
      video.srcObject = stream;
    })
    .catch((error) => {
      console.error("Error accessing media devices.", error);
    });
}

function cameraOff() {
  const mediaStream = video.srcObject;
  const tracks = mediaStream.getTracks();
  tracks.forEach((track) => track.stop());
}

function clearphoto() {
  var context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function takepicture() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  canvas.width = 640;
  canvas.height = 480;

  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  let image_data_url = canvas.toDataURL("image/jpeg");
}

document.querySelector("#clear").onclick = function () {
  clearphoto();
};
document.querySelector("#none").onclick = function () {
  canvas.style.filter = "none";
};

document.querySelector("#btn-start").onclick = function () {
  cameraOn();
};
document.querySelector("#btn-stop").onclick = function () {
  cameraOff();
};
document.querySelector("#btn-capture").onclick = function () {
  takepicture();
};
document.querySelector("#btn-captureSmall").onclick = function () {
  takepicture();
};
document.querySelector("#blur").onclick = function () {
  canvas.style.filter = "blur(5px)";
};
document.querySelector("#brightness").onclick = function () {
  canvas.style.filter = "brightness(1.5)";
};
document.querySelector("#contrast").onclick = function () {
  canvas.style.filter = "contrast(200%)";
};

document.querySelector("#saturate").onclick = function () {
  canvas.style.filter = "saturate(80%)";
};
document.querySelector("#sepia").onclick = function () {
  canvas.style.filter = "sepia(60%)";
};
document.querySelector("#drop-shadow").onclick = function () {
  canvas.style.filter = "drop-shadow(16px 16px 10px )";
};
document.querySelector("#greyScale").onclick = function () {
  canvas.style.filter = "grayscale(80%)";
};
document.querySelector("#hue-rotate").onclick = function () {
  canvas.style.filter = " hue-rotate(90deg)";
};
document.querySelector("#combine-filter").onclick = function () {
  canvas.style.filter = "contrast(175%) brightness(103%)";
};
document.querySelector("#opacity").onclick = function () {
  canvas.style.filter = "opacity(70%)";
};
document.querySelector("#combine-filter2").onclick = function () {
  canvas.style.filter = "contrast(150%) blur(2px)";
};
