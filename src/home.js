function loadHome() {
    const main = document.getElementsByClassName("main")[0];
    main.textContent = ""; 
    main.appendChild(createHome());
}

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const mainImage = document.createElement("img");
    mainImage.src = "images/home_icon.jpeg";
    mainImage.alt = "Carla's Cafe";
    mainImage.classList.add('home-image');

    home.appendChild(paragraph("Welcome to Carla's Cafe!"));
    home.appendChild(paragraph("A warm and welcoming cafe on the Camino de Santiago:)"));
    home.appendChild(mainImage);
    home.appendChild(paragraph("Stop by on your way of St James for a cup of coffee!"));

    return home; 

}

function paragraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

export { loadHome, paragraph };