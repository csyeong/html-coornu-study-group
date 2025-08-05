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

const date = new Date();
var year = date.getFullYear(), month = date.getMonth();
document.getElementById("choi-date-title").innerText = year + "." + (month < 9 ? "0" : "") + (month + 1);
var lastDay = new Date(year, month + 1, 0).getDate();
const setCalendar = () => {
    const startWeek = new Date(year, month, 1).getDay();
    for(let i=1;i <= lastDay;i++){
        document.getElementById("day" + (startWeek + i - 1)).innerText = i;
        document.getElementById("day" + (startWeek + i - 1)).classList.add("choi-schedule-span-before-js");
        // document.getElementById("day" + (startWeek + i - 1)).innerText = document.getElementById("day" + (startWeek + i - 1)).className;
    }
}
setCalendar();

var scheduleDayList = [];
function fn_changeCalendar(before){
    // document.getElementById("choi-date-title").innerText = "next "+before;
    if(before){
        if(month === 0){
            year = year - 1;
            month = 11;
        }else{
            month = month - 1;
        }
    }else{
        if(month === 11){
            year = year + 1;
            month = 0;
        }else{
            month = month + 1;
        }
    }
    
    document.getElementById("choi-date-title").innerText = year + "." + (month < 9 ? "0" : "") + (month + 1);
    const changeStartWeek = new Date(year, month, 1).getDay();
    let changeLastDay = new Date(year, month + 1, 0).getDate();
    for(let i=0;i<changeStartWeek;i++){
        document.getElementById("day" + i).innerText = '';
        document.getElementById("day" + i).classList.remove("choi-schedule-span-after-js");
    }
    for(let i=1;i <= changeLastDay;i++){
        const element = document.getElementById("day" + (changeStartWeek + i - 1));
        element.innerText = i;
        let comp = (month + 1) + " / " + i;
        if(scheduleDayList.includes(comp)){
            element.classList.remove("choi-schedule-span-before-js");
            element.classList.add("choi-schedule-span-after-js");
        }else{
            element.classList.remove("choi-schedule-span-after-js");
            element.classList.add("choi-schedule-span-before-js");
        }
    }
    for(let i = changeStartWeek + changeLastDay;i<42;i++){
        document.getElementById("day" + i).innerText = '';
        document.getElementById("day" + i).classList.remove("choi-schedule-span-after-js");
    }
}

const calBefore = document.getElementById("calendar-before");
calBefore.addEventListener('click', () => {
    fn_changeCalendar(true);
});
const calAfter = document.getElementById("calendar-after");
calAfter.addEventListener('click', () => {
    fn_changeCalendar(false);
});

function fn_addSchedule(index){
    const element = document.getElementById("day" + index);
    const dayValue = element.innerText;
    if(dayValue === '') return;
    var schedule = prompt("스케쥴을 입력하세요.");
    if(schedule != null) {
        const d = document.createElement("p");
        scheduleDayList.push((month + 1) + " / " + dayValue);
        d.innerText = (month + 1) + " / " + dayValue;
        document.getElementById("schedule-date").appendChild(d);

        const c = document.createElement("p");
        c.innerText = schedule;
        document.getElementById("schedule-contents").appendChild(c);
        
        
        element.classList.remove("choi-schedule-span-before-js");
        element.classList.add("choi-schedule-span-after-js");
        // document.getElementById("day" + index).style.color = "#ffb7ca";
    }
}

document.querySelectorAll('span[name="day"]').forEach((dayLi, index) => {
    dayLi.addEventListener('click', () => {
        fn_addSchedule(index);
    });
});



       

