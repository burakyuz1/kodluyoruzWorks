const namei = document.getElementById("myName");
const myClock = document.getElementById("myClock");
const date = new Date();

namei.textContent = prompt("adınız");

let day = date.getDay(); // 0-sunday 1-monday ... 6-saturday
let day2;

if (day == 0) day2 = " Pazar ";
if (day == 1) day2 = " Pazartesi ";
if (day == 2) day2 = " Salı ";
if (day == 3) day2 = " Çarşamba ";
if (day == 4) day2 = " Perşembe ";
if (day == 5) day2 = " Cuma ";
if (day == 6) day2 = " Cumartesi ";

function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    myClock.textContent = 
      ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + " -- " + day2;
  }
  
  setInterval(time, 1000);


