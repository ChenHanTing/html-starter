/* 圖片所有路徑 */
const imagesWithPath = images.map(
  (imageName) => `${imagePath}/${imageName}.jpg`
);
/* 左、右按鈕 */
const leftButton = document.getElementById("asdf-prev");
const rightButton = document.getElementById("asdf-next");
/* 標題、內文 */
const title = document.getElementById("title");
const content = document.getElementById("content");
/* 改變標題、內文 */
title.innerHTML = customTitle;
content.innerHTML = customContent;
/* 判斷要不要有左右按鈕 */
const hasButton = images.length > 4;
/* 控制按鈕要不要出現 */
if (!hasButton) {
  /* 如果說沒有按鈕的話，就要讓按鈕消失 */
  leftButton.style.display = "none";
  rightButton.style.display = "none";
}
/* 該頁最上面的輪播照片 */
const controlledImage = document.getElementById("controlled-image");
/* 我們希望頁面一進去的照片是下面輪播組的第一張 */
controlledImage.src = imagesWithPath[0];
/* 輪播的4張照片 */
const swipeImage01 = document.getElementById("img-1");
const swipeImage02 = document.getElementById("img-2");
const swipeImage03 = document.getElementById("img-3");
const swipeImage04 = document.getElementById("img-4");
/* 我們希望頁面一進去的下面4張照片是全部照片的前4張 */
swipeImage01.src = imagesWithPath[0];
swipeImage02.src = imagesWithPath[1];
swipeImage03.src = imagesWithPath[2];
swipeImage04.src = imagesWithPath[3];
/* 組數 */
const swipeSet = images.length / 4;
console.log("所有組數:", swipeSet);
/* 目前在第幾組 */
let currentSet = 1;
console.log("目前組數:", currentSet);
/* 下面兩個輪播按鈕 */
function swipePrev() {
  console.log("目前組數:", currentSet);
  currentSet === 1 ? (currentSet = swipeSet) : currentSet--;

  commonMethod(currentSet);
}
/* 下面兩個輪播按鈕 */
function swipeNext() {
  console.log("目前組數:", currentSet);
  currentSet === swipeSet ? (currentSet = 1) : currentSet++;

  commonMethod(currentSet);
}
/* 共用方法 */
function commonMethod(currentSet) {
  swipeImage01.src = imagesWithPath[4 * (currentSet - 1)];
  swipeImage02.src = imagesWithPath[4 * (currentSet - 1) + 1];
  swipeImage03.src = imagesWithPath[4 * (currentSet - 1) + 2];
  swipeImage04.src = imagesWithPath[4 * (currentSet - 1) + 3];
}
/* 秀出大輪播牆的照片 */
function showNum(number) {
  /* 組數 ＋ 數字 */
  const formattedNumber = 4 * (currentSet - 1) + number;
  /* 我們把 number 指定給 counter */
  controlledImage.src = imagesWithPath[formattedNumber];
}
/* 第一次使用要宣告 */
let counter = 0;
/* 一登入瀏覽器畫面會印出 */
console.log("計數器:", counter);
/* 大輪播牆前一張 */
function prev() {
  counter === 0 ? (counter = images.length - 1) : counter--;
  controlledImage.src = imagesWithPath[counter];
}
/* 大輪播牆後一張 */
function next() {
  counter === images.length - 1 ? (counter = 0) : counter++;
  controlledImage.src = imagesWithPath[counter];
}
