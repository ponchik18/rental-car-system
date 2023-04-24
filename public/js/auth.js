// JS
const modalOverlay = document.querySelector("#modal-overlay");
const modal = document.querySelector("#modal");
const modalBtn = document.querySelector("#modal-btn");
const modalClose = document.querySelector("#modal-close");

modalBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modalOverlay.style.display = "inline";
    modal.style.display = "block";
    document.querySelector('body').style.overflow = "hidden";
});

modalClose.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    modal.style.display = "none";
});

window.onclick = function(event) {

    if (event.target === modalOverlay) {
        modalOverlay.style.display = "none";
        modal.style.display = "none";
        document.querySelector('body').style.overflow = "auto";
    }
}