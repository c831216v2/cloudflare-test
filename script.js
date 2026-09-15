console.log("Imhotep Engineering loaded successfully");

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation clicked");
    });
});