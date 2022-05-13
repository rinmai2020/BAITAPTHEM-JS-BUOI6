function baiTap1() {
  //  B1: Dung DOM
  var result1 = $("result1");
  result1.style.display = "block";
  result1.style.background = "aquamarine";

  // var s = 0;
  // var i = 0;
  // while (s < 10000) {
  //   i++;
  //   s += i;
  //   result1.innerHTML =  `Số nguyên dương nhỏ nhât: ${i}`;
  // }
  //D
  //B2 khai bao biến, dùng vòng lặp for
  var s = 0;
  for (var i = 0; s < 10000; i++) {
    s += i;
    result1.innerHTML = `Số nguyên dương nhỏ nhât: ${i}`; //B3 In ra ket quả
  }
}
function $(x) {
  return document.getElementById(x);
}
