function loadMenu() {
    const main = document.getElementsByClassName('main')[0];
    main.textContent = "";
    main.appendChild(createMenu());
}

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add('menu');
    const message = document.createElement("p");
    message.textContent = "Daily Menu";
    menu.appendChild(message);
    menu.appendChild(createMenuItem("Recipe1", "Description description description", "menu1.jpeg"));
    menu.appendChild(createMenuItem("Recipe1", "Description description description", "menu2.jpeg"));
    menu.appendChild(createMenuItem("Recipe1", "Description description description", "menu3.jpeg"));
    menu.appendChild(createMenuItem("Recipe1", "Description description description", "menu4.jpeg"));
    menu.appendChild(createMenuItem("Recipe1", "Description description description", "menu5.jpeg"));
    menu.appendChild(createMenuItem("Recipe1", "Description description description", "menu6.jpeg"));
    menu.appendChild(createMenuItem("Recipe1", "Description description description", "menu7.jpeg"));
    menu.appendChild(createMenuItem("Recipe1", "Description description description", "menu8.jpeg"));
    menu.appendChild(createMenuItem("Recipe1", "Description description description", "menu9.jpeg"));
    menu.appendChild(createMenuItem("Recipe1", "Description description description", "menu10.jpeg"));
    return menu; 
}

function createMenuItem(name, description, imgUrl) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

        const menuText = document.createElement("div");
            const menuItemName = document.createElement("h2");
            menuItemName.textContent = name;
            
            const menuItemDescription = document.createElement("p");
            menuItemDescription.textContent = description;

            menuText.appendChild(menuItemName);
            menuText.appendChild(menuItemDescription);
        menuItem.appendChild(menuText);

    const foodImageDiv = document.createElement("div");
    foodImageDiv.classList.add("food-image-container");
        const foodImage = document.createElement("img");
        foodImage.src = `images/${imgUrl}`;
        foodImage.alt = `${name}`;
        foodImageDiv.appendChild(foodImage);
    menuItem.appendChild(foodImageDiv);

    return menuItem; 
}

export { loadMenu }