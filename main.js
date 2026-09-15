document.addEventListener("DOMContentLoaded", () => {

    const menuToggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".main-nav");

    const navLinks =
        document.querySelectorAll(".main-nav a");

    const form =
        document.querySelector("#contactForm");

    const year =
        document.querySelector("#year");


    /*
     * Dynamic copyright year
     */

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }



    /*
     * Mobile navigation
     */

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                nav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }



    /*
     * Contact form
     *
     * Opens the user's email client and
     * creates an enquiry addressed to
     * Imhotep Engineering.
     */

    if (form) {

        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const data =
                    new FormData(form);


                const name =
                    data.get("name") || "";

                const company =
                    data.get("company") || "";

                const email =
                    data.get("email") || "";

                const message =
                    data.get("message") || "";


                const subject =
                    encodeURIComponent(
                        `Recruitment enquiry${
                            company
                                ? ` - ${company}`
                                : ""
                        }`
                    );


                const body =
                    encodeURIComponent(
                        `Name: ${name}\n` +
                        `Company: ${company}\n` +
                        `Email: ${email}\n\n` +
                        `Hiring requirements:\n${message}`
                    );


                window.location.href =
                    `mailto:info@imhotepengineering.co.za` +
                    `?subject=${subject}` +
                    `&body=${body}`;

            }
        );

    }

});