const panels = document.querySelectorAll(".pannel");

panels.forEach((pannel) => {
    pannel.addEventListener('click', () => {
        // console.log(123)
        removeActiveClasses()
        pannel.classList.add("active")
    })
})

function removeActiveClasses() {
    panels.forEach(pannel => {
        pannel.classList.remove("active")
    })
}