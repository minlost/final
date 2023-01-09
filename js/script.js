const hamburger = document.querySelector(".hamburger")
const overlay = document.querySelector("#overlay")
const mobileMenu = document.querySelector("#mobile-menu")

let imageGaleryNumber = 0
let currApp = 1

const imagesAp = document.querySelectorAll(".img-ap")
const imagesAp2 = document.querySelectorAll(".img-ap2")
const overlayGal = document.querySelector(".overlay-bg")
const currImage = document.querySelector(".curr-image ")
const faX = document.querySelector(".fa-x")

const arrRight = document.querySelector(".fa-arrow-right")
const arrLeft = document.querySelector(".fa-arrow-left")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open")
  overlay.classList.toggle("open-h")
  document.body.classList.toggle("stop-scrolling")
  mobileMenu.classList.toggle("show-menu")
})

function fillImages() {
  imagesAp.forEach((image, index) => {
    image.style.backgroundImage = `url(img/ap1/ap1-${index}.JPG)`
    image.addEventListener("click", () => {
      currApp = 1
      overlayGal.style.display = "flex"
      currImage.style.backgroundImage = `url(img/ap1/ap1-${index}.JPG)`
      imageGaleryNumber = index
      faX.addEventListener("click", () => {
        overlayGal.style.display = "none"
      })
      arrRight.addEventListener("click", () => {
        if (currApp === 1) {
          if (imageGaleryNumber >= imagesAp.length - 1) {
            return
          } else {
            imageGaleryNumber++
            currImage.style.backgroundImage = `url(img/ap1/ap1-${imageGaleryNumber}.JPG)`
          }
        } else {
          if (imageGaleryNumber >= imagesAp2.length - 1) {
            return
          } else {
            imageGaleryNumber++
            currImage.style.backgroundImage = `url(img/ap2/ap2-${imageGaleryNumber}.JPG)`
          }
        }
      })
      arrLeft.addEventListener("click", () => {
        if (currApp === 1) {
          if (imageGaleryNumber <= 0) {
            return
          } else {
            imageGaleryNumber--
            currImage.style.backgroundImage = `url(img/ap1/ap1-${imageGaleryNumber}.JPG)`
          }
        } else {
          if (imageGaleryNumber <= 0) {
            return
          } else {
            imageGaleryNumber--
            currImage.style.backgroundImage = `url(img/ap2/ap2-${imageGaleryNumber}.JPG)`
          }
        }
      })
    })
  })
  imagesAp2.forEach((image, index) => {
    image.style.backgroundImage = `url(img/ap2/ap2-${index}.JPG)`
    image.addEventListener("click", () => {
      currApp = 2

      overlayGal.style.display = "flex"
      currImage.style.backgroundImage = `url(img/ap2/ap2-${index}.JPG)`
      imageGaleryNumber = index
      faX.addEventListener("click", () => {
        overlayGal.style.display = "none"
      })
      arrRight.addEventListener("click", () => {
        if (currApp === 1) {
          if (imageGaleryNumber >= imagesAp.length - 1) {
            return
          } else {
            imageGaleryNumber++
            currImage.style.backgroundImage = `url(img/ap1/ap1-${imageGaleryNumber}.JPG)`
          }
        } else {
          if (imageGaleryNumber >= imagesAp2.length - 1) {
            return
          } else {
            imageGaleryNumber++
            currImage.style.backgroundImage = `url(img/ap2/ap2-${imageGaleryNumber}.JPG)`
          }
        }
      })
      arrLeft.addEventListener("click", () => {
        if (currApp === 1) {
          if (imageGaleryNumber <= 0) {
            return
          } else {
            imageGaleryNumber--
            currImage.style.backgroundImage = `url(img/ap1/ap1-${imageGaleryNumber}.JPG)`
          }
        } else {
          if (imageGaleryNumber <= 0) {
            return
          } else {
            imageGaleryNumber--
            currImage.style.backgroundImage = `url(img/ap2/ap2-${imageGaleryNumber}.JPG)`
          }
        }
      })
    })
  })
}

fillImages()
