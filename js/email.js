const cookie = document.cookie
let optionAp = getCookie("optionAp")
let optionAparmant = document.querySelector("#apartman")
const numberOfG = document.querySelector("#numberOfG")
const btn = document.querySelector("#testBtn")

const emailData = {
  apartman: "ap1",
  jmeno: "",
  prijmeni: "",
  pocet: "",
  email: "",
  tel: "",
  pDatum: "",
  oDatum: "",
}

function getCookie(name) {
  let value = `; ${document.cookie}`
  let parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(";").shift()
}

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return false
  }
  alert("Zadali jste chybný email")
  return true
}

optionAparmant.addEventListener("change", (e) => {
  emailData.apartman = e.target.value
  numberOfG.value = ""
})

const fName = document
  .querySelector("#fname")
  .addEventListener("change", (e) => {
    emailData.jmeno = e.target.value
  })
const lName = document
  .querySelector("#lname")
  .addEventListener("change", (e) => {
    emailData.prijmeni = e.target.value
  })

numberOfG.addEventListener("change", (e) => {
  if (emailData.apartman === "ap1") {
    numberOfG.min = 1
    numberOfG.max = 3
  } else {
    numberOfG.max = 5
    numberOfG.min = 1
  }
  emailData.pocet = e.target.value
})
const emailDatas = document
  .querySelector("#email")
  .addEventListener("change", (e) => {
    emailData.email = e.target.value
  })
const telData = document
  .querySelector("#tel")
  .addEventListener("change", (e) => {
    emailData.tel = e.target.value
  })
const dateFrom = document
  .querySelector("#dateFrom")
  .addEventListener("change", (e) => {
    changeDate()
    emailData.pDatum = e.target.value
  })
const dateTo = document
  .querySelector("#dateTo")
  .addEventListener("change", (e) => {
    emailData.oDatum = e.target.value
  })

btn.addEventListener("click", () => {
  console.log(emailData.pDatum, emailData.oDatum)

  if (ValidateEmail(emailData.email)) {
    return
  }

  if (
    emailData.apartman == "" ||
    emailData.jmeno == "" ||
    emailData.prijmeni == "" ||
    emailData.pocet == "" ||
    emailData.email == "" ||
    emailData.tel == "" ||
    emailData.pDatum == "" ||
    emailData.oDatum == ""
  ) {
    alert("Doplňte všechny údaje")

    return
  } else {
    sendData()
  }
})

const sendData = async () => {
  try {
    const response = await fetch("https://frantic-blue-foal.cyclic.app/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailData,
      }),
    })
    const data = await response.json()
    // enter you logic when the fetch is successful
    console.log(data)
    window.location.assign("thankyoupage.html")
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)

    console.log(error)
  }
}

function chckOpAp() {
  if (optionAp == 1) {
    emailData.apartman = "ap1"
    document.getElementById("apartman").value = "ap1"
  } else if (optionAp == 2) {
    emailData.apartman = "ap2"
    document.getElementById("apartman").value = "ap2"
    console.log(emailData)
  }
}
chckOpAp()

function setMindate() {
  document.getElementById("dateFrom").min = new Date()
    .toISOString()
    .split("T")[0]
  document.getElementById("dateTo").min = new Date().toISOString().split("T")[0]
}
setMindate()

document.getElementById("test1").addEventListener("click", () => {
  console.log(emailData)
})

function changeDate() {
  let parts = document.getElementById("dateFrom").value.split("-")
  let aviableDate = new Date(parts[0], parts[1] - 1, parts[2])

  aviableDate.setDate(aviableDate.getDate() + 3)
  document.getElementById("dateTo").min = aviableDate
    .toISOString()
    .split("T")[0]
}
