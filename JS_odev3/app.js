const menu = [ //the array contains Foods.
    {
        id: "akdeniz",
        category: "Akdeniz",
        title: "Kerebiç",
        price: "15₺",
        img: "https://i.lezzet.com.tr/images-xxlarge-recipe/kerebic-52bcabeb-43d8-426f-8949-65f1e2323c88.jpg",
        info: "İrmikli kurabiye ismiyle de bilinen kerebiç, Hatay ve Mersin ile özdeşleşen bir tatlıdır. Arap mutfağında sık sık tüketilen bu tatlı, ceviz, fıstık, irmik ve çöven otu ile hazırlanır. Özellikle Ramazan ayında rağbet gören kerebiç tatlısı, çöven otu köpüğüyle süslenir. Kerebiç tarifinin en önemli püf noktası, köpüğü uzun süre çırpmaktır."
    },
    {
        id: "akdeniz",
        category: "Akdeniz",
        title: "Belen Tava",
        price: "45₺",
        img: "https://i.lezzet.com.tr/images-xxlarge-recipe/belen-tava-0a1e6ebb-053b-4102-9287-e02e8fd9fd2a.jpg",
        info: "Hatay mutfağından yayılan belen tava, kuzu eti, biber, soğan ve tereyağı ile hazırlanır. İsmini Hatay'ın Belen ilçesinden alan bu yemek, doğru adımlar uygulandığında oldukça lezzetli bir hale geliyor. Belen tava yapımında dikkat edilmesi gereken en önemli noktalar ise etin doğru seçilmesi ve pişirme işlemi için döküm tava kullanılmasından geçiyor."
    },

    {
        id: "akdeniz",
        category: "Akdeniz",
        title: "Yaprak Ciğer",
        price: "35.50₺",
        img: "https://i.lezzet.com.tr/images-xxlarge-recipe/yaprak-ciger-b6979329-75c3-4b83-92ee-979c856c72a4.jpg",
        info: "A vitamini bakımından zengin olan koyun ciğer, vücudun ihtiyaç duyduğu proteini önemli ölçüde karşılar. Enerji vermesinin yanı sıra cilt sağlığını korumasıyla da bilinir. Sağlık açısından birçok faydası olan yaprak ciğer, lezzetiyle de her zevke hitap ediyor. Özellikle Adana mutfağında sık sık yer verilen bu besin, kimi zaman sabah kahvaltılarında bile tüketiliyor. "
    },
    {
        id: "ege",
        category: "Ege",
        title: "İzmir Mantısı",
        price: "25.50₺",
        img: "https://i.lezzet.com.tr/images-xxlarge-recipe/izmir-mantisi-1869594c-d40a-4146-8a65-0ebb14eaa33e.jpg",
        info: "Türk mutfağında mantı denildiğinde ilk akla gelen Kayseri mantısı olsa da, mantının birçok çeşidi bulunmaktadır. İzmir ve çevresinde yapılan İzmir mantısı, diğerlerinden farklı olarak kızartma usulüyle pişirilir. Bu yüzden çıtır çıtır bir lezzeti vardır. İç harcında kıyma ve pirinç kullanılır."
    },
    {
        id: "ege",
        category: "Ege",
        title: "Ege Usulü Kuzu Etli Arapsaçı",
        price: "55.50₺",
        img: "https://i.lezzet.com.tr/images-xxlarge-recipe/ege-usulu-kuzu-etli-arapsaci-cba41c30-b842-44ca-9c58-d4e6512a929a.jpg",
        info: "Ülkemizde en çok Ege'de yetiştirilen arapsaçı, sindirim sistemini düzenlemesiyle bilinir. Sakinleştirici etkisiyle depresyon, stres ve uykusuzluk gibi sorunların giderilmesinde de kullanılır. İçeriğindeki mineraller sayesinde kalp sağlığını olumlu yönde etkiler. Genelde çorba, salata ve et yemeklerinde yer verilen bu besin, Akdeniz ülkelerinde de tüketilir."
    },
    {
        id: "icanadolu",
        category: "İç Anadolu",
        title: "Balaban Kebabı",
        price: "47.50₺",
        img: "https://i.lezzet.com.tr/images-xxlarge-recipe/balaban-kebabi-b875b894-274e-457e-a159-88b0017754db.jpg",
        info: "Balaban kebabı, Eskişehir mutfağına özgü bir lezzettir. Yoğurt, domates sosu, tırnak pide ve bol tereyağı ile hazırlanan Balaban köfte, orijinalinde döküm ütü ile bastırılarak pişirilir. Ancak döküm tavada pişirilen versiyonları da mevcuttur. Aroma katmak için pideler et suyu ile ıslatılır. "
    },
    {
        id: "icanadolu",
        category: "İç Anadolu",
        title: "Kayseri Yağlaması",
        price: "37.50₺",
        img: "https://i.lezzet.com.tr/images-xxlarge-recipe/yaglama_kayseri-054db424-0052-4249-8913-949630fe7f63.jpg",
        info: "Kayseri ile özdeşleştirilen yağlama, bazlama hamuruyla hazırlanan bir yemektir. İsteğe göre üst kısmında kıyma ve patates kullanılır. Yağlama yapılırken, yufkalar üst üste konulur ve aralarına yağ sürülür. Genellikle kahvaltı sofralarında veya çayın yanında ikram edilir. Hazırlanan bazlamaların arasına kıymalı harç eklenir. İsteğe göre hazır lavaştan Kayseri yağlaması yapmak da mümkündür. "
    },
    {
        id: "karadeniz",
        category: "Karadeniz",
        title: "Koca Karı Gerdanı Tatlısı",
        price: "31.31₺",
        img: "https://i.lezzet.com.tr/images-xxlarge-recipe/koca-kari-gerdani-tatlisi-d66dd4c8-fc02-4776-b7d7-fff4df481cd7.jpg",
        info: "Samsun ve Rize mutfağıyla özdeşleşen koca karı gerdanı tatlısı, aslında burma baklava olarak da bilinir. İç harcı ceviz veya fındık ile doldurulan bu tatlı, şerbetle bir araya getirilir. Özellikle bayram sofralarında sunulmasıyla bilinir. İsteğe göre dondurma ve kaymak eşliğinde servis edilir."
    },
    {
        id: "karadeniz",
        category: "Karadeniz",
        title: "Etli Pazı Sarma",
        price: "17.50₺",
        img: "https://i.lezzet.com.tr/images-xxlarge-recipe/etli-pazi-sarma-9d59ee44-a539-4d41-b660-be9d69fe9e54.jpg",
        info: "Dakikalar içinde tencerenin dibini göreceğiniz bir lezzet. Sarmanın her türlüsüne cevabım kesinlikle evet 👍 ister üzüm yaprağı, ister kara ister beyaz lahana, isterse pazı.. ister zeytinyağlı isterse etli.. her türlüsü hayır diyemeyeceğim lezzetlerdir.  "
    },

]

//Get elements

const btnConts = document.getElementById("btnConts");       
const menuIcerik = document.getElementById("menuIcerik");

//addlisteners
btnConts.addEventListener("click", getCategory);
window.addEventListener("DOMContentLoaded",bringFoods)

//filter by clicking button
function getCategory(e) {
    filter(e.target.value); //filter function send which button we click
    if(e.target.value == "all"){
        bringFoods(); // bringFoods run when we click "all button" & form loaded
     }

}


function filter(category1) {

    while (menuIcerik.firstChild) {//Clear list before get the filtered foods

        menuIcerik.removeChild(menuIcerik.lastChild);
    }

    menu.forEach(food => {  // itirating on menu array which defined above

        if (category1 == food.id) {

            menuIcerik.innerHTML += `<div class="menu-items col-lg-6 col-sm-12">
        <img src="${food.img}" class = "photo" alt="_">
        <span class="badge rounded-pill bg-primary">${food.category}</span>
        <div class="menu-info">
            <div class="menu-title">
                <h3>${food.title}</h3>
                <h3>${food.price}</h3>
            </div>
            <div class="menu-text">
                <p>${food.info}</p>
            </div>
        </div>`

        }

    });
}


function bringFoods(){

    menu.forEach(food => {   

            menuIcerik.innerHTML += `<div class="menu-items col-lg-6 col-sm-12">
        <img src="${food.img}" class = "photo" alt="_">
        <span class="badge rounded-pill bg-primary">${food.category}</span>
        <div class="menu-info">
            <div class="menu-title">
                <h3>${food.title}</h3>
                <h3>${food.price}</h3>
            </div>
            <div class="menu-text">
                <p>${food.info}</p>
            </div>
        </div>`
        

    });

}