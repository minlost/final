btn1 = document.getElementById("btn-ap-1")
btn2 = document.getElementById("btn-ap-2")

btn1.addEventListener("click", (e) => {
  document.cookie = "optionAp=1"
})
btn2.addEventListener("click", (e) => {
  document.cookie = "optionAp=2"
  console.log("helloo")
})
