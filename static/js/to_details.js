window.onload = () => {
    [...document.getElementsByClassName("to_details")].forEach(
    (e) => {
        e.addEventListener("click", () => {
            document.getElementById(e.dataset.id).open = true;
        }); 
    });
}; 
