
const pages = [
  "Hai Bianca",
  "Aku mau jujur sebenarnya...",
  "Aku kangen banget sama kamu. Aku nyariin letak rumahmu. Dan ketika web ini kamu baca berarti aku udah nyerah nyari :). Aku cuman pengen kita jadi temen lagi, trus juga sebenarnya ketika aku nemuin akunmu, kenangan-kenangan lama itu muncul. Lalu hal itu yang membuat aku buat ngechat atau ngedm kamu. Oh iya aku sebenarnya takut buat ngechat dan semua chattan yang aku kirim itu buatan ai :). Lucu ya? Atau aneh? Ya memang seperti itu adanya.",
  "Yaudah, itu aja yang mau aku sampein. Oh iya kamu mau jadi temen ku lagi? Jawab di chat ya, yang jujur aja aku gak bakal ngapa-ngapain. Maaf ya aku ngeganggu kamu. Trima kasih udah jadi kisah di hidupku. I Love you ❤️"
];

let pageIndex = 0;
function nextPage() {
  pageIndex++;
  const content = document.getElementById("page-content");
  if (pageIndex < pages.length) {
    content.innerHTML = `<h1>${pages[pageIndex]}</h1><button onclick="nextPage()">Lanjut</button>`;
  }
}
