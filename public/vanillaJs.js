const time = document.getElementById("time");
console.log(new Date().toLocaleString());
console.log(time)
setInterval(() => {
    const timeMoment = new Date();
    time.textContent = timeMoment.toLocaleString()
}, 1000)
const showHideBtn = document.getElementById("showHideBtn");
showHideBtn.addEventListener("click", () => {
    if (time.classList.contains("noclicked")) {
        time.classList.toggle("noclicked");
        // console.log("noclicked removed");
        time.hidden = true


    } else {
        time.classList.toggle("noclicked");
        // console.log("noclicked added")
        time.hidden = false

    }
})
