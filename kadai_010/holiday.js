const holidays = [
  "正月",
  "成人の日",
  "建国記念日",
  "天皇誕生日",
  "春分の日",
  "昭和の日",
  "憲法記念日",
  "みどりの日",
  "こどもの日",
  "海の日",
  "山の日",
  "敬老の日",
  "秋分の日",
  "スポーツの日",
  "文化の日",
  "勤労感謝の日",
];

// for文の場合（ここではholidays.length（要素数）は16）
for (let i = 0; i < holidays.length; i += 1) {
  console.log(holidays[i]);
}

// while文の場合（numが要素数未満ならtrue、インクリメント演算子で1足す）
let num = 0;

while (num < holidays.length) {
  console.log(holidays[num]);
  num++;
}
