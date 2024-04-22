document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".title");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    title.addEventListener("click", function() {
        if (dropdownMenu.style.display === "none") {
            dropdownMenu.style.display = "inline-block";
        } else {
            dropdownMenu.style.display = "none";
        }
    });
});
