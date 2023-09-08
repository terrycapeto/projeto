const modeLight  = document.querySelector('html');
const btn = document.querySelector('button');
const avatar = document.querySelector('img');

btn.onclick = () => {
    if(modeLight.className === ""){
        modeLight.className = "light";
        avatar.src = "./assets/avatar-light.png";
    }else {
        modeLight.className = "";
        avatar.src = "./assets/avatar.png";
    }
}