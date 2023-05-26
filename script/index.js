let TIMER  = document.querySelectorAll("div>.bold_colock_num");
const COMING_DATE = document.querySelector('.delay_header>span');


const ARR_MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAY = new Date().getDate();
const MONTH=  ARR_MONTH[new Date().getMonth()+1];
const YEAR = new Date().getFullYear()
COMING_DATE.textContent=`${DAY} ${MONTH} ${YEAR}`



// Get the current date
var currentDate = new Date();

// Calculate the target date 30 days from the current date
var targetDate = new Date(currentDate.getTime() + (30 * 24 * 60 * 60 * 1000));

// Calculate the time difference between the current date and the target date
var timeDifference = targetDate.getTime() - currentDate.getTime();

// Convert the time difference to seconds
var timeInSeconds = Math.floor(timeDifference / 1000);

function updateTimer() {
    let day = Math.floor(timeInSeconds / (24 * 60 * 60));
    let hours = Math.floor((timeInSeconds % (24 * 60 * 60)) / (60 * 60));
    let minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
    let seconds = Math.floor(timeInSeconds % 60);
    for (let i = 0; i < TIMER.length; i++) {
        const element = TIMER[i];
        if(element.dataset.days==="days"){
            element.textContent=day;
        }
        if(element.dataset.hours==="hours"){
            element.textContent=hours;
        }
        if(element.dataset.min==="min"){
            element.textContent=minutes;
        }
        if(element.dataset.sec==="sec"){
            element.textContent=seconds;
        }
    }
    timeInSeconds--;
  }
let timerInterval = setInterval(updateTimer, 1000);


const select = document.querySelector(".show_select");
const click_fix= document.querySelector(".click");
const arrow = document.querySelector(".show_select>img")
const list= document.querySelector(".dropdown_grid");
const option = document.querySelectorAll(".dropdown>p"); 
const slect_value = document.querySelector(".show_select>p")
const select_input = document.querySelector(".select_input")
select_input.style.visibility="hidden";

        
const svg =document.createElement("img");
svg.setAttribute("class","checked")
svg.src="assets/sign-up/icon-check.svg";

check:for (let i = 0; i < option.length; i++) {
    const e = option[i];
    if(e.classList.contains("true")){
        e.setAttribute('class',"false")
    }

    e.addEventListener("click",()=>{
        if(e.classList.contains("false")){
            for(let i = 0 ;i<option.length; i++){
                if(option[i].classList.contains("true")){
                    option[i].setAttribute('class',"false")
                }
            }
            e.setAttribute('class',"true");
            e.append(svg)
            slect_value.innerHTML=e.innerHTML;
            select_input.value=e.textContent;
            console.log(select_input.value)
        }else if(e.classList.contains("true")){
            e.setAttribute('class',"false")
            e.removeChild(svg)
        }
    })
}


click_fix.addEventListener("click",()=>{
    if(select.classList.contains("show")){
        arrow.style.transform="rotate(180deg)"


        select.classList.add("close")
        select.classList.remove("show")


        list.classList.add("show")

        
        

    }else if(select.classList.contains("close")){
        arrow.style.transform="rotate(0deg)"

        
        select.classList.add("show")
        select.classList.remove("close")

        
        list.classList.remove("show")
    }
})





