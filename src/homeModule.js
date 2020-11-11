const home = function() {
    const mainSection = document.createElement('section');
    mainSection.classList.add('main-section');
    mainSection.classList.add('main-home');
    mainSection.innerHTML =
        `<h2 > Best Dessert in Town </h2> 
     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus malesuada leo eget metus pretium fermentum.Etiam ultrices, quam sed fermentum maximus, lacus ex vestibulum urna, eu suscipit erat nisl eu quam.Ut at condimentum quam.Nullam
    eu ullamcorper nunc, ac dapibus enim.Nunc dignissim ullamcorper mi vitae blandit.Curabitur eget condimentum lacus, sit amet dictum mauris.Fusce ultrices enim erat, in ullamcorper risus aliquet ut.Morbi ac lectus et mi varius porta.
    Phasellus ut mi tristique, feugiat arcu vel, venenatis justo < br > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus malesuada leo eget metus pretium fermentum.Etiam ultrices, quam sed fermentum maximus, lacus ex vestibulum </p>
         <video width = "700" height = "540" controls >
        <source src = "img/WhatsApp Video 2020-07-23 at 07.46.15.mp4" type = "video/mp4" >
        </video>
        </div>`;

    document.body.append(mainSection);
};

export { home };