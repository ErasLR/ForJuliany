document.addEventListener("DOMContentLoaded", () => {

    const musica = document.getElementById("musica");
    const stars = document.getElementById("stars");


    // ================= ESTRELLAS =================

    for (let i = 0; i < 120; i++) {

        const estrella = document.createElement("div");

        estrella.classList.add("star");


        estrella.style.left =
            Math.random() * 100 + "%";


        estrella.style.top =
            Math.random() * 100 + "%";


        const tamaño =
            Math.random() * 3 + 1;


        estrella.style.width =
            tamaño + "px";


        estrella.style.height =
            tamaño + "px";


        estrella.style.animationDelay =
            Math.random() * 3 + "s";


        stars.appendChild(estrella);

    }


    // ================= CAMBIAR DE PANTALLA =================

    window.irA = function(id) {

        const paginas =
            document.querySelectorAll(".pagina");


        paginas.forEach(pagina => {

            pagina.classList.remove("activa");

        });


        const siguiente =
            document.getElementById(id);


        if (siguiente) {

            siguiente.classList.add("activa");

        }


        // Regresar al inicio de la pantalla

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


        // ================= MÚSICA =================

        if (musica.paused) {

            musica.play().catch(() => {

                console.log(
                    "El navegador bloqueó el audio hasta una interacción."
                );

            });

        }

    };

});