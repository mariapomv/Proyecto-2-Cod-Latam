const btnToggle = document.querySelector('#toggle');
btnToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnToggle.classList.toggle('active');
})

document.addEventListener("DOMContentLoaded", function () {
    // Close the menu when a link is clicked
    var navLinks = document.querySelectorAll(".navbar-nav a");
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function () {
            var navbarCollapse = document.getElementById("navbarSupportedContent");
            var bootstrapNavbar = bootstrap.Collapse.getInstance(navbarCollapse);
            bootstrapNavbar.hide(); // Close the collapse
        });
    }
});
