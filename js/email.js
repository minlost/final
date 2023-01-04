let app = "ap1"

let optionAparmant = document
  .querySelector("#apartman")
  .addEventListener("change", (e) => {
    emailData.apartman = e.target.value
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
const numberOfG = document
  .querySelector("#numberOfG")
  .addEventListener("change", (e) => {
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
    emailData.pDatum = e.target.value
  })
const dateTo = document
  .querySelector("#dateTo")
  .addEventListener("change", (e) => {
    emailData.oDatum = e.target.value
  })

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

const btn = document.querySelector("#testBtn")

btn.addEventListener("click", () => {
  console.log(emailData.pDatum, emailData.oDatum)
  if (
    (emailData.apartman == "" || emailData.jmeno == "",
    emailData.prijmeni == "",
    emailData.pocet == "",
    emailData.email == "",
    emailData.tel == "",
    emailData.pDatum == "",
    emailData.oDatum == "")
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
    window.location.href = "http://127.0.0.1:5500/thankyoupage.html"
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)

    console.log(error)
  }
}
