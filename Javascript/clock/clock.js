let nameAlert = prompt("Adınız Nedir?"); // Kullanıcıdan isim bilgisini istedik.
let myName = document.getElementById("myName");

if(nameAlert) {
    myName.innerHTML = `${nameAlert}` // Propmt'tan alınan kullanıcısı bilgisini yazar. if-else kullanmazsak bile ismin ekrana yazılması için bunu yazmamız yeterli.
} else {
    alert("Lütfen bir isim giriniz!");
    location.reload(); // Sayfayı yeniler.
}

// Kullanıcı ismini girerse ekrana yazacak, girmezse tekrardan ismini isteyecek.

let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]; // Fonksiyon oluşturmadan önce günleri bir dizi içerisine aldık.

function clock(){
    let dateTime= new Date();
    let day = days[dateTime.getDay()];
    let hours = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();
    document.getElementById("myClock").innerHTML = `${hours}: ${minute}: ${second}  ${day}`
}

setInterval(clock, 1000); // Her 1 saniyede bir clock fonksiyonunu yeniden çalıştır.
