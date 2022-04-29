const photoContainer = document.querySelector(".photo-container");
const contents = document.querySelector(".contents");
const gallery = document.querySelector(".gallery");
const footer = document.querySelector("footer");
const photoHeading = document.querySelectorAll(".photoHeading");
const close = document.querySelector(".close");
const galImg = document.querySelectorAll(".galImg");
const para = document.querySelector(".heading");
let desc = undefined;



close.addEventListener("click", () => {
  photoContainer.classList.add("hidden");
  para.removeChild(desc);
  gallery.classList.remove("trans");
  footer.classList.remove("trans");
});

galImg.forEach((img) => {
  img.addEventListener("click", () => {
    contents.style.background = `url('${img.src}') no-repeat center center/cover`;
    desc = document.createTextNode(`${img.alt}`);
    para.appendChild(desc);
    photoContainer.classList.remove("hidden");
    gallery.classList.add("trans");
    footer.classList.add("trans");
  });
});

