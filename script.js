// DBS Mobile Mechanic Website JavaScript


// Smooth scrolling for page links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});



// Add animation when sections appear

const sections = document.querySelectorAll(
    ".about, .services, .cta, .card"
);


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold:0.2
});



sections.forEach(section => {

    observer.observe(section);

});




// Mobile menu preparation

console.log(
"DBS Mobile Mechanic Website Loaded Successfully"
);
