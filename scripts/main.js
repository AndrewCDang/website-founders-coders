function loadComponent(selector, file) {
    fetch(file)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error loading ${file}`);
            }
            return response.text();
        })
        .then((data) => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch((error) => console.error(error));
}

loadComponent("#landing", "./layouts/landing.html");
loadComponent("#journey", "./layouts/journey.html");
loadComponent("#portfolio", "./layouts/portfolio.html");
