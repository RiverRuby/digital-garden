const userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
const currentTheme = localStorage.getItem("theme") ?? userPref
document.documentElement.setAttribute("saved-theme", currentTheme)

function swap(type: "light" | "dark") {
  if (type === "dark") {
    document.getElementById("comments-content-light")?.removeAttribute("hidden")
    document.getElementById("comments-content-dark")?.setAttribute("hidden", "true")
  } else {
    document.getElementById("comments-content-dark")?.removeAttribute("hidden")
    document.getElementById("comments-content-light")?.setAttribute("hidden", "true")
  }

  document.documentElement.setAttribute("saved-theme", type)
  localStorage.setItem("theme", type)
}

document.addEventListener("nav", () => {
  const switchTheme = (e: any) => {
    if (e.target.checked) {
      swap("dark")
    } else {
      swap("light")
    }
  }

  // Darkmode toggle
  const toggleSwitch = document.querySelector("#darkmode-toggle") as HTMLInputElement
  toggleSwitch.removeEventListener("change", switchTheme)
  toggleSwitch.addEventListener("change", switchTheme)
  swap(currentTheme === "dark" ? "dark" : "light")
  if (currentTheme === "dark") {
    toggleSwitch.checked = true
  }

  // Listen for changes in prefers-color-scheme
  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  colorSchemeMediaQuery.addEventListener("change", (e) => {
    const newTheme = e.matches ? "dark" : "light"
    swap(newTheme)
    toggleSwitch.checked = e.matches
  })
})
