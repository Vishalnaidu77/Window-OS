const main = document.querySelector("main")
const contextMenu = document.querySelector(".option")


document.addEventListener("contextmenu", (e) => {
    e.preventDefault()

    contextMenu.style.opacity = 0

    setTimeout(() => {
        contextMenu.style.opacity = 1;
        contextMenu.style.left = e.x + "px"
        contextMenu.style.top = e.y + "px"
    }, 300);
})

document.addEventListener("click", () => {
    contextMenu.style.opacity = 0
})

document.addEventListener("keydown", (key) => {
    key.key === "Escape" ? contextMenu.style.opacity = 0 : null;
})