let switchMode =document.getElementById("switch_mode");
switchMode.onclick=function(){
    let theme =document.getElementById("theme");

    if(theme.getAttribute("href")=="/styles/ligth.css"){
        theme.href ="/styles/dark.css";
    }
    else{
        theme.href = "/styles/ligth.css";
    }

}
function changeBg(){
    var navbar=document.getElementById('nav_bar');
    var scrollValue=window.scrollY;
    if(scrollValue < 140){
        navbar.classList.remove('bg_color');
    }
    else{
        navbar.classList.add('bg_color');

    }
}
function changeBg2(){
    var navbar=document.getElementById('nav_bar');
    var scrollValue=window.scrollY;
    if(scrollValue < 140){
        navbar.classList.remove('bg_color2');
    }
    else{
        navbar.classList.add('bg_color2');

    }
}
window.addEventListener('scroll',changeBg)
window.addEventListener('scroll',changeBg2)


const changeText = document.querySelector("#change-text");

changeText.addEventListener("click", function() {
    changeText.style.transition ='2s'
    changeText.textContent = "Sended!";
  
});

const btn = document.getElementById('change-text');
btn.addEventListener('click', function onClick(event) {
  const backgroundColor = btn.style.backgroundColor;
  if (backgroundColor === 'salmon') {
    btn.style.backgroundColor = 'green';
  } else {
    btn.style.backgroundColor = 'salmon';
  }
});