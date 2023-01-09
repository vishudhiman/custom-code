const img = document.getElementById("umbrella-img");
//umbrella color selector
const colors = document.querySelectorAll(".form-group div");
colors.forEach((color) => {
  color.addEventListener("click", () => {
    img.src = `./assets/${color.className} umbrella.png`;
  });
});

//upload button color selector
const uploadBtn = document.querySelector(".logoLabel");
colors.forEach((color) => {
  color.addEventListener("click", () => {
    uploadBtn.style.backgroundColor = color.className;
    uploadBtn.classList.add("active");
  });
});

//background color selector
const container = document.querySelector(".container");
colors.forEach((color) => {
  color.addEventListener("click", () => {
    container.style.backgroundColor = color.className;
  });
});

//merge both the images
const dimensions = { height: 406, width: 451 };
const logo = document.getElementById("logo");
logo.addEventListener("change", () => {
  const reader = new FileReader();
  reader.onload = () => {
    const logoImg = new Image();
    logoImg.width = 100;
    logoImg.height = 100;
    const logoName = logo.files[0].name;
    uploadBtn.innerHTML = logoName;

    logoImg.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);
      ctx.drawImage(
        logoImg,
        dimensions.width / 2 - logoImg.width / 2,
        dimensions.height - logoImg.height - 30,
        logoImg.width,
        logoImg.height
      );

      const dataURL = canvas.toDataURL("image/png");
      img.src = dataURL;
    };
    logoImg.src = reader.result;
  };
  reader.readAsDataURL(logo.files[0]);
});