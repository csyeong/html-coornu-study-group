const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("fade-in");
        }else{
            entry.target.classList.remove("fade-in");
        }
    });
    },{threshold: 0.1}
);

const targetElements = document.querySelectorAll(".fade-wrap");
targetElements.forEach((element) => {
    observer.observe(element);
});
