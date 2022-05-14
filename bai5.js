function $(x) {
  return document.getElementById(x);
}
// B1: Tạo hàm xử lý in số nguyên tố
function baiTap5() {
  var result5 = $("result5");
  result5.style.display = "block";
  result5.style.color = "white";
  //B2 Tạo biến nhapN gán giá trị số nhập từ bàn phím
  var nhapN = +$("nhapN").value;
  var ketQua = "";
  // B3: Tạo vòng lặp for xử lý in số nguyên tố từ 1 -> nhapN
  for (i = 1; i <= nhapN; i++) {
    // Trường hợp i là số nguyên tố thì in ra ketQua
    if (soNguyenTo(i)) {
      ketQua += i + " ";
    }
  }
  // B5: In kết quả ra theo từng vong lặp
  result5.innerHTML = ketQua;
}

// B3: Tạo hàm với tham số n xác định n có phải số nguyên tố hay không
function soNguyenTo(n) {
  // Tạo biến cờ hiệu trả về giá trị boolean
  // 2 là số chẵn duy nhất trong số nguyên tố nên tách riêng 1 trường hợp
  // Nếu n < 2 hoặc n chia 2 có dư = 0 thì n không phải số nguyên tố
  var NT = true;
  if (n === 2) {
    NT = true;
  } else if (n < 2) {
    NT = false;
  } else if (n % 2 === 0) {
    NT = false;
  } else {
    // Vì 2 là số nguyên tố chẵn duy nhất nên tạo biến i bắt đầu từ 3, điều kiện là i <= căn bậc 2 của n, với bước nhảy là 2 để chạy vòng lặp
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      // Nếu n chia i có dư bằng 0 thì biến cờ hiệu trả về false và lập tức dừng vòng lặp
      if (n % i === 0) {
        NT = false;
        break;
      }
    }
  }
  return NT;
}
