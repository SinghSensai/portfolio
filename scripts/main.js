const roleList = ["Petroleum Engineer","Business Analyst", "Data Analyst", "Data Scientist"];
let index = 0;
let charIndex = 0;
const speed = 200; 
const delayBetweenRoles = 1000;
const cursor = "|";

function typeWriter() {
    const roleElement = document.getElementById("role");
    if (charIndex < roleList[index].length) {
        roleElement.textContent = roleList[index].substring(0, charIndex + 1) + cursor;
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, delayBetweenRoles);
    }
}

function eraseText() {
    const roleElement = document.getElementById("role");
    if (charIndex > 0) {
        charIndex--;
        roleElement.textContent = roleList[index].substring(0, charIndex) + cursor;
        setTimeout(eraseText, speed / 2); 
    } else {
        index = (index + 1) % roleList.length; 
        setTimeout(typeWriter, speed);
    }
}

function blinkCursor() {
    const roleElement = document.getElementById("role");
    if (roleElement.textContent.endsWith(cursor)) {
        roleElement.textContent = roleElement.textContent.slice(0, -1);
    } else {
        roleElement.textContent += cursor;
    }
}

window.onload = () => {
    typeWriter();
    setInterval(blinkCursor, 500);
};




window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    scroll = 1- scroll;
    let nameElement = document.querySelector("#intro");
    console.log(scroll);

    if (nameElement) {
        let opacity = (scroll - 0.55) / (1- 0.55); 
        opacity = Math.max(0, Math.min(1, opacity)); 

        let translateY = Math.max(0, Math.min(10, (0.59- scroll) * 20)); 
        let scale = Math.max(0.9, Math.min(1, 0.9 + (opacity * 0.1))); 

        nameElement.style.opacity = opacity;
        nameElement.style.transform = `translateY(${translateY}px) scale(${scale})`;
    }
});
window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    let nameElement = document.querySelector("#about-me");

    if (nameElement) {
        let opacity = (scroll - 0.3) / (0.59- 0.3); 
        opacity = Math.max(0, Math.min(1, opacity)); 

        let translateY = Math.max(0, Math.min(10, (0.59- scroll) * 20)); 
        let scale = Math.max(0.9, Math.min(1, 0.9 + (opacity * 0.1))); 

        nameElement.style.opacity = opacity;
        nameElement.style.transform = `translateY(${translateY}px) scale(${scale})`;
    }
});
window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    let nameElement = document.querySelector("#contact");

    if (nameElement) {
        let opacity = (scroll - 0.82) / (1- 0.82); 
        opacity = Math.max(0, Math.min(1, opacity)); 

        let translateY = Math.max(0, Math.min(10, (1- scroll) * 20)); 
        let scale = Math.max(0.9, Math.min(1, 0.9 + (opacity * 0.1))); 

        nameElement.style.opacity = opacity;
        nameElement.style.transform = `translateY(${translateY}px) scale(${scale})`;
    }
});


// setInterval(() => {
//     currentTime = new Date().toLocaleTimeString();
//     document.getElementById("current-time").textContent = currentTime;
// }, 1000);

function scrollToDiv(div) {
    document.getElementById(div).scrollIntoView({ behavior: "smooth" });
}







