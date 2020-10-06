const navbar = (function() {
    const header = document.createElement('header');
    header.classList.add('header');

    header.innerHTML = `
    <h1 class="h1">
        Chocolatey</h1>
    <ul class="sections-list ">
        <li class="sections-list__item"><a href="#" data-content="home">Home</a></li>
        <li class="sections-list__item"><a href="#" data-content="menu">Menu</a></li>
        <li class="sections-list__item"><a href="#" data-content="contact">Contact</a></li>
    </ul>

        `;

    content.append(header);
})();