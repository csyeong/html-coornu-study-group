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

document.querySelectorAll('input[name="options-year"]').forEach((radio, index) => {
    radio.addEventListener('click', () => {
        fn_historyDisplayEvent(index);
    });
});

function fn_historyDisplayEvent(index){
    if(index === 0){
        document.getElementById("display-year0").style.display = "block";
        document.getElementById("display-year1").style.display = "block";
        document.getElementById("display-year2").style.display = "block";
        document.getElementById("display-year3").style.display = "block";
        document.getElementById("display-year4").style.display = "block";
        document.getElementById("display-year5").style.display = "block";
    }else if(index === 1){
        document.getElementById("display-year0").style.display = "none";
        document.getElementById("display-year1").style.display = "none";
        document.getElementById("display-year2").style.display = "none";
        document.getElementById("display-year3").style.display = "block";
        document.getElementById("display-year4").style.display = "block";
        document.getElementById("display-year5").style.display = "block";
    }else if(index === 2){
        document.getElementById("display-year0").style.display = "none";
        document.getElementById("display-year1").style.display = "block";
        document.getElementById("display-year2").style.display = "block";
        document.getElementById("display-year3").style.display = "none";
        document.getElementById("display-year4").style.display = "none";
        document.getElementById("display-year5").style.display = "none";
    }else {
        document.getElementById("display-year0").style.display = "block";
        document.getElementById("display-year1").style.display = "none";
        document.getElementById("display-year2").style.display = "none";
        document.getElementById("display-year3").style.display = "none";
        document.getElementById("display-year4").style.display = "none";
        document.getElementById("display-year5").style.display = "none";
    }
}
