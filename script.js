var coll = document.getElementsByClassName("collapsible");
var i;

//Vi kalder på collapsible ( i er et tilfældigt bogstav)

//man starter på 0 fordi at vi har sagt at i er 0
for (i = 0; i < coll.length; i++) {

    // om i er mindre end 0 til den sidste på listen, der ikke er difineret (lenght).
    //Ovenstående betyder også at når den er færdig med at tæller så starter den forfra.

    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        //Når man klikker på den så aktivere den.

        // Kalder på content og alt der der ligger under content.
        // Block er standart visning og vi fortæller javascript at content er vist fra  start af når siden loades. Så går den til None og content skjules når vi trykker på den. Hvis ikke så vises content. Vi har dog sat content til display none i CSS da vi gerne vil have at content ikke viser sig når siden uploades og derved skal trykke på den før den viser sig.

        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            // når content er blokeret, så vises den ikke. (none).
        } else {
            content.style.display = "block";
        }
    });
}

//Når siden uploades så vises content ikke, først når man trykker på feltet.

// Hvis man udkommentere Content: display: none; Så vises drop down felterne så snart siden vises og det skal de ikke.
