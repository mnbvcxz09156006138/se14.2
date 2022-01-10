let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
    alert ("گردون شانش را بچرخانید و به سوالات پاسخ دهید اگر عدد 1- فتوشاپ چیست 2- فتوشاپ 2022 جه امکاناتی دارد 3- ایا میشود با فتوشاپ فیلم ادیت کرد 4-چطوری باید فتوشاپ را نصب کنیم؟ 5-ایا فتوشاپ بر روی گوشی نصب میشود 6- ایا میتوانیم فتوشاپ را در وب باهش کار کنیم  7- برنام فتوشاپ چه کسی ساخته است ؟ 8-ارتفاع و عرض کارت ویزیت")
}