
document.addEventListener("DOMContentLoaded", () => {
  newCoolText()
})

const newCoolText = () => {
  let paragraph = document.querySelector("p#text")

  paragraph.innerHTML = "This is really cool!"
}
