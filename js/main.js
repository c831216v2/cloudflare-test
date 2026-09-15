document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Thank you for contacting Imhotep Engineering. We will get back to you soon."
        );

        this.reset();
    });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document
            .querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});