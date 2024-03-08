// 1. Berilgan stiring ichidan olib tashlanishi kerak bo'lgan stringni birinchi uchraganini olib tashlash
function removeFirstOccurrences(str, value) {
    const index = str.indexOf(value);
    if (index !== -1) {
        return str.slice(0, index) + str.slice(index + value.length);
    } else {
        return str;
    }
}
console.log(removeFirstOccurrences('To be or not to be', 'not')); // 'To be or to be'
console.log(removeFirstOccurrences('I like legends', 'end')); // 'I like legs'
console.log(removeFirstOccurrences('ABABAB', 'BA')); // 'ABAB'


// 2. Berilgan stiring ichidan birinchi va so'ngi burchali qavslarni olib tashlash
    function unbracketTag(str) {
    const firstBracketIndex = str.indexOf('<'); 
    const lastBracketIndex = str.lastIndexOf('>'); 
    if (firstBracketIndex !== -1 && lastBracketIndex !== -1) {
        return str.slice(firstBracketIndex + 1, lastBracketIndex);
    } 
        return str;
    }

// Javoblar
console.log(unbracketTag('<div>')); // 'div'
console.log(unbracketTag('<span>')); // 'span'
console.log(unbracketTag('<a>')); // 'a'




// 3. Funksiyaga berilgan son tub bo’lsa true, aks holda false qaytarsin:
function isPrime(n) {
    if (n <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true; // Tub sani
}
// Javoblar
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
console.log(isPrime(7)); // true
console.log(isPrime(11)); // true
console.log(isPrime(12)); // false
console.log(isPrime(16)); // false
console.log(isPrime(17)); // true





// 4. Berilgan array ichidagi ma’lumotlardan yangi object yasab qaytaring. Functionga so’ralgan argumentlar kiritish orqali.

function arraydanObjectlarYaratish(array, kalitlar) {
    var jovob = [];
    for (var i = 0; i < array.length; i++) {
      var obj = {};
      for (var j = 0; j < kalitlar.length; j++) {
        obj[kalitlar[j]] = array[i][j];
      }
      jovob.push(obj);
    }
    return natijalar;
  }
  var jovoblarArray = [
    ["Ismi", "Muhammadbilol"],
    ["Yoshi", 17],
    ["Manzili", "Margilol"],
  ];
  
  var kalitlarArray = ["maydonIsmi", "qiymati"];
  
  var natijalar = arraydanObjectlarYaratish(jovoblarArray, kalitlarArray);
  
  console.log(natijalar);




// 1. n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring.

  function butunSonlarJamisi(n1, n2) {
    var jami = 0;
    for (var i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
        jami += i;
    }
    return jami;
  }
  var n1 = 5;
  var n2 = 10;
  var hamas =  butunSonlarJamisi(n1, n2);
  console.log(hamas);




/*6. n ta elementdan tashkil topgan arr nomli 
massiv berilgan. Massiv elementlari orasidan
 faqat 1 marta ishtirok etganlaridan iborat yangi
  massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.*/
const kitobs = [
    {
      title: "Halqa",
      author: "Akrom Malik",
      alreadyRead: false,
    },
    {
      title: "Dunyo ishlari",
      author: "O'tkir Hoshimov",
      alreadyRead: true,
    },
    {
      title: "Vaqtning qadri",
      author: "Abdulfattoh Abu G'udda",
      alreadyRead: false,
    },
  ];
  
  for (let i = 0; i < kitobs.length; i++) {
    const kitob = kitobs[i];
    const readStatus = kitob.alreadyRead ? "o'qilgan" : "o'qilmagan";
    console.log(`${i + 1}. ${kitob.author}ning "${kitob.title}" kitobi ${readStatus};`);
  }
  