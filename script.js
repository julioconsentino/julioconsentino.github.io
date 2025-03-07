        function slide(direction) {
            const slider = document.getElementById('slider');
            slider.scrollBy({ left: direction * 220, behavior: 'smooth' });
        }

 document.addEventListener("DOMContentLoaded", function () {
        const pins = document.querySelectorAll(".pin");
        const infoBox = document.querySelector(".aldeiasinf");
        const ufElement = document.getElementById("uf");
        const comunidadeElement = document.getElementById("comunidade");
        const municipioElement = document.getElementById("municipio");

        // Define the information for each state
        const pinData = {
            mt: { uf: "MT", comunidade: "1 comunidade", municipio: "Haliti-Paresi (Aldeia Wazare)" },
            ce: { uf: "CE", comunidade: "1 comunidade", municipio: "Jenipapo-Kaninde" },
            sp: { uf: "SP", comunidade: "4 comunidades", municipio: "Aldeia Guarani Rio Silveira; Aldeia Boa Vista; Aldeia Awa Porungawa Dju; Aldeias Tenondé Porã " },
            ac: { uf: "AC", comunidade: "4 comunidades", municipio: "Aldeia Shanenawa; Aldeia Yawarani; Mariri Yananawa; Aldeia Mutum" },
            ro: { uf: "RO", comunidade: "1 comunidade", municipio: "Aldeia Paiter Surui" },
            am: { uf: "AM", comunidade: "4 comunidades", municipio: "Aldeia Tuyuka; Aldeia Cipia; Comunidade Tatuyo; Serras Guerreiras de Tapuruquara" },
            ba: { uf: "BA", comunidade: "4 comunidades", municipio: "Aldeia Tibá; Reserva Pataxó Porto do Boi; Aldeia Pataxó Pé do Monte; Reserva Pataxó da Jaqueira" },
            pr: { uf: "PR", comunidade: "1 comunidade", municipio: "Comunidade da Floresta Estadual Metropolitana" }
        };

        pins.forEach(pin => {
            pin.addEventListener("mouseenter", function () {
                let stateClass = this.classList[1]; // Get the second class (state abbreviation)
                
                if (pinData[stateClass]) {
                    ufElement.textContent = pinData[stateClass].uf;
                    comunidadeElement.textContent = pinData[stateClass].comunidade;
        // Convert municipios to a list format
        let municipiosArray = pinData[stateClass].municipio.split("; ");
        municipioElement.innerHTML = "<ul>" + municipiosArray.map(m => `<li>${m}</li>`).join("") + "</ul>";
    }

                infoBox.style.visibility = "visible";
            });




  pin.addEventListener("mouseleave", function () {
            // Instead of hiding immediately, only hide when the mouse leaves both the pin and infoBox
            setTimeout(() => {
                if (!infoBox.matches(":hover")) {
                    infoBox.style.visibility = "hidden";
                }
            }, 400); // Delay to allow transition
        });
    });

    // Ensure the box stays visible when hovering over it
    infoBox.addEventListener("mouseleave", function () {
        infoBox.style.visibility = "hidden";
    });
});