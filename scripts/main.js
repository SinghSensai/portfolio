
const roleList = ["Business Analyst", "Data Analyst", "Data Scientist"];


let index= 0;


function changeRole() {

    document.getElementById("role").textContent = roleList[index];
    index = (index + 1) % roleList.length; 
    // console.log(index);
}

setInterval(changeRole, 1000);

function scrollToDiv(div) {
    document.getElementById(div).scrollIntoView({ behavior: "smooth" });
}


window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    // console.log(window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
  }, false);


