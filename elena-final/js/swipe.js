   /* 第一次使用要宣告 */
   let counter = 1;
   const controlledImage = document.getElementById('controlled-image')

   /* 一登入瀏覽器畫面會印出 */
   console.log("計數器:", counter);
   document.getElementById("demo").innerHTML = `<span>${counter}</span>`;

   function prev() {
     counter === 1 ? counter = imageLength : counter--
     console.log("計數器:", counter);
     controlledImage.src = `./images/example/${counter}.jpg`
     document.getElementById("demo").innerHTML = counter;
   }

   function next() {
     counter === imageLength ? counter = 1 : counter++
     console.log("計數器:", counter);
     controlledImage.src = `./images/example/${counter}.jpg`
     document.getElementById("demo").innerHTML = counter;
   }