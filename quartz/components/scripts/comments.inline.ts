function toggleComments(this: HTMLElement) {
  this.classList.toggle("collapsed")
  const content = this.nextElementSibling as HTMLElement
  content.classList.toggle("collapsed")
  content.style.maxHeight = content.style.maxHeight === "0px" ? "100%" : "0px"
}

function setupComments() {
  const comments = document.getElementById("comments")
  if (comments) {
    const collapsed = comments.classList.contains("collapsed")
    const content = comments.nextElementSibling as HTMLElement
    content.style.maxHeight = collapsed ? "0px" : "100%"
    comments.removeEventListener("click", toggleComments)
    comments.addEventListener("click", toggleComments)
  }
}

window.addEventListener("resize", setupComments)
document.addEventListener("nav", () => {
  setupComments()
})
