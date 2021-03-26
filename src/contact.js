import { paragraph } from './home'

function loadContact() {
    const main = document.getElementsByClassName('main')[0];
    main.textContent = "";
    main.appendChild(createContact());
    createMap();
}

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.appendChild(paragraph("You can find us in Santiago!"));
    contact.appendChild(paragraph("tel: +123456789"));

    // add google map
    const mapContainer = document.createElement("div");
    mapContainer.setAttribute("id", "map");
    contact.appendChild(mapContainer);
    return contact;
}

function createMap() {
    const santiago = { lat: 42.878212, lng: -8.544844 };
    const mapDiv = document.getElementById("map");

    const map = new google.maps.Map(mapDiv, {
        zoom: 9,
        center: santiago,
    });

    const marker = new google.maps.Marker({
        position: santiago,
        map: map,
    });
}

export { loadContact };

