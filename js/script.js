const hamburger = document.querySelector(".hamburger")
const overlay = document.querySelector("#overlay")
const mobileMenu = document.querySelector("#mobile-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open")
  overlay.classList.toggle("open-h")
  document.body.classList.toggle("stop-scrolling")
  mobileMenu.classList.toggle("show-menu")
})

const imagesAp = document.querySelectorAll(".img-ap")
const imagesAp2 = document.querySelectorAll(".img-ap2")
const overlayGal = document.querySelector(".overlay-bg")
const currImage = document.querySelector(".curr-image ")

let imageGaleryNumber = 0

const faX = document.querySelector(".fa-x").addEventListener("click", () => {
  overlayGal.style.display = "none"
})

const arrRight = document
  .querySelector(".fa-arrow-right")
  .addEventListener("click", () => {
    if (imageGaleryNumber >= imagesAp.length - 1) {
      return
    } else {
      imageGaleryNumber++
      currImage.style.backgroundImage = `url(img/ap1/ap1-${imageGaleryNumber}.JPG)`
    }
  })
const arrLeft = document
  .querySelector(".fa-arrow-left")
  .addEventListener("click", () => {
    if (imageGaleryNumber <= 0) {
      return
    } else {
      imageGaleryNumber--
      currImage.style.backgroundImage = `url(img/ap1/ap1-${imageGaleryNumber}.JPG)`
    }
  })

function onClick(element) {
  document.getElementById("img01").src = element.src
  document.getElementById("modal01").style.display = "block"
}

function fillImages() {
  imagesAp.forEach((image, index) => {
    image.style.backgroundImage = `url(img/ap1/ap1-${index}.JPG)`
    image.addEventListener("click", () => {
      overlayGal.style.display = "flex"
      currImage.style.backgroundImage = `url(img/ap1/ap1-${index}.JPG)`
      imageGaleryNumber = index
    })
  })
}
function fillImages2() {
  imagesAp2.forEach((image, index) => {
    image.style.backgroundImage = `url(img/ap1/ap1-${index}.JPG)`
    image.addEventListener("click", () => {
      overlayGal.style.display = "flex"
      currImage.style.backgroundImage = `url(img/ap1/ap1-${index}.JPG)`
      imageGaleryNumber = index
    })
  })
}

fillImages()
fillImages2()
