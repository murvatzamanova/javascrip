//Taskiniz:
//1. Obyekt yaradin.
//2. Array icinde coxlu obyektler yaradin
//3. Telebeler obyektinde bir nece telebe elave edin. Hobbileri, xususiyettleri kimi icerisindede deyerleri qeyd edin.
//4. Students arrayinin qiymet ortalamasini cixardin. (Butun telebelerin qiymetlerini alib sayini bolun.)
//5. Qiymeti 90-dan az olan telebeleri Ad ve Soyadi ile birlikde ekrana cixardib onlara xeberdarliq edin.




////.....TASK-1.....////

//1. Obyekt yaradin.

//let  istifadeci = {
//    ad: "Murvat",
//    soyad: "Zamanova",
//    yas: 18.5,
//    dogumtarixi: "15:04:2006",
//    email: "zamanova0504@gmail.com",
//    yasayisyeri: "Nakhchivan",
//    ixtisas: "İnformasiya texnologiyalari-1",
//    hobileri: "masin surmek ,  kitab oxumaq , gezmek , film izlemek , yatmaq :)"
//}

//console.log("Istifadecinin adı:   ", istifadeci.ad);
//console.log("Istifadecinin soyadı:   ", istifadeci.soyad);
//console.log("Istifadecinin yası:   ", istifadeci.yas);
//console.log("Istifadecinin dogum tarixi:   ", istifadeci.dogumtarixi);
//console.log("Istifadecinin emaili:   ", istifadeci.email);
//console.log("Istifadecinin yasayis yeri:   ", istifadeci.yasayisyeri);
//console.log("İstifadecinin ixtisasi:  ", istifadeci.ixtisas)
//6console.log("Istifadecinin hobileri:   ", istifadeci.hobileri);




////.....TASK-2.....////

//2. Array icinde coxlu obyektler yaradin


//let  zamanovlar = [
//    {
//        ad: "Rahima",
//        soyad: "Zamanova",
//        yas: 20,
//        email: "zamanova@gmail.com",
//        yeri: {
//            seher: "Naxcivan",
//            rayon: "Babek",
//            kend: "Naxisnergiz"
//        },
//        hobisi: ["kitab oxumaq", "gezmek", "filme baxmaq"]
//    },
//    {
//        ad: "Sefiqe",
//        soyad: "Zamanli",
//        yas: 16,
//        email: "zamanlisefiqe@gmail.com",
//        yeri: {
//            seher: "Naxcivan",
//            rayon: "Babek",
//            kend: "Naxisnergiz"
//        },
//        hobisi: ["telefona baxmaq", "film izlemek", "seyahet"]
//    },
//    {
//        ad: "Yusif",
//        soyad: "Zamanov",
//        yas: 45,
//        email: "zamanov7786@gmail.com",
//        yeri: {
//            seher: "Naxcivan",
//            rayon: "Babek",
//            kend: "Naxisnergiz"
//        },
//        hobisi: ["telefona baxmaq", "sahibkarliq", "seyahet", "istirahet etmek"]
//    }
//];


//console.log("Zamanovlarin ferdi:  ", zamanovlar[1].ad);
//console.log("Zamanovlarin diger ferdinin hobisi:  ", zamanovlar[0].hobisi);
//console.log("Zamanovlarin basqa bir ferdinin emaili: ", zamanovlar[2].email);




////......TASK-3.....////

//3. Telebeler obyektinde bir nece telebe elave edin. Hobbileri, xususiyettleri kimi icerisindede deyerleri qeyd edin.



// let telebeler = [
//     {
//         ad: "Fatima",
//         soyad: "Masumova",
//         hobisi: ["telefona baxmaq", "film izlemek", "seyahet"],
//         xasiyyeti: ["ergen", "utancaq", "esebi"],
//         coders: {
//             ortalama: 70,
//             seviyye: "yaxsi",
//         }
//     },
//     {
//         ad: "Ceyran",
//         soyad: "Oruclu",
//         hobisi: ["telefona baxmaq", "film izlemek", "seyahet"],
//         xasiyyeti: ["sevimli", "soyuq", "qemgin"],
//         coders: {
//             ortalama: 80,
//             seviyye: "cox yaxsi",
//         }
//     },
//     {
//         ad: "Gulcin",
//         soyad: "Suleymanova",
//         hobisi: ["telefona baxmaq", "film izlemek", "seyahet"],
//         xasiyyeti: ["paxil", "gezeyen", "esebi"],
//         coders: {
//             ortalama: 68,
//             seviyye: "Kafi"
//         }
//     }
// ];

// console.log("Telebelerden birinin xasiyyeti:  ", telebeler[0].xasiyyeti);
// console.log("Telebelerden birinin hobisi:  ", telebeler.hobisi);
// console.log("Telebelerden biri codersdeki fealiyyeti:  ", telebeler[2].coders);





////.....TASK-4.....////

//4. Students arrayinin qiymet ortalamasini cixardin. (Butun telebelerin qiymetlerini alib sayini bolun.)


let students = [
  {
    id: 1,
    name: "Umid",
    surname: "Rzayev",
    group_id: 2,
  },
  {
    id: 2,
    name: "Fatime",
    surname: "Mesumova",
    group_id: 1,
  },
  {
    id: 3,
    name: "Gulcin",
    surname: "Suleymanova",
    group_id: 1,
  },
  {
    id: 4,
    name: "Vaqif",
    surname: "Memmedov",
    group_id: 2,
  },
];

let groups = [
  {
    id: 1,
    name: "Coders Caravan",
  },
  {
    id: 2,
    name: "Coders Nakhchivan",
  },
];

students.map((student) => {
  let group = groups.find((t) => t.id === student.group_id)
  console.log(`${student.name} ${student.surname} >> ${group.name}`);
});

Object.keys(students).map((a) => {
  console.log(`${students[a].name} ${students[a].surname} >> ${students[a].group_id}`);
});





////.....TASK-5.....////
//5. Qiymeti 90-dan az olan telebeleri Ad ve Soyadi ile birlikde ekrana cixardib onlara xeberdarliq edin.

// Öğrenci bilgilerini içeren bir dizi
// var telebeler = [
//     { 
//       ad: "Ahmet",
//       soyad: "Ahmadov",
//       qiymet: 20 
//     },
//     { 
//       ad: "Ayşe",
//       soyad: "Murselova",
//       qiymet: 75 
//     },
//     {
//       ad: "Mehmet",
//       soyad: "Kerimov",
//       qiymet: 60 
//     },
//     { 
//       ad: "Fatima",
//       soyad: "Alekbarova",
//       qiymet: 85 
//     }
// ];

// for (let i = 0; i < telebeler.length; i++) {
//     if (telebeler[i].qiymet < 65) {
//         console.log(telebeler[i].ad + " " + telebeler[i].soyad + " - Qiymetin asagidir: " + telebeler[i].qiymet);
//     }
// }
