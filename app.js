const tikla = document.querySelector(".items");

tikla.addEventListener("click", (e) => {
  if (e.target.classList.contains("minus")) {
    if (e.target.nextElementSibling.innerText > 0) {
      e.target.nextElementSibling.innerText--;
      pTotal(e.target.closest(".elements"));
    } else {
      alert("YOUR ITEM WILL BE REMOVED");
      e.target.closest(".item").remove();
      calc();
    }
  } else if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText++;
    pTotal(e.target.closest(".elements"));
  } else if (e.target.classList.contains("btn-remove")) {
    e.target.closest(".item").remove();

    calc();
  }
});

let pTotal = (e) => {
  let ucret = e.querySelector("b").innerText;
  let sayi = e.querySelector(".amount").innerText;
  let total = (ucret * sayi).toFixed(0);

  e.querySelector(".proTotal").innerText = total;
  calc();
};

let calc = () => {
  let toplam = 0;
  let hepsi = document.querySelectorAll(".proTotal");

  hepsi.forEach((e) => {
    toplam += +e.innerText;
  });

  let vergi = toplam * 0.18;
  let son = toplam + vergi;

  document.querySelector("#SubTotal").innerText = "$" + toplam.toFixed(2);
  document.querySelector("#tax").innerText = "$" + vergi.toFixed(2);
  document.querySelector("#end").innerText = "$" + son.toFixed(2);
};
//Chuckepy
