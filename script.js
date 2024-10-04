// fetch("const.html")
//   .then((Response) => Response.text())
//   .then((data) => {
//     document.getElementById("const_place").innerHTML = data;
//   });
/*-------------------------------------------------*/
const governoratesCities = {
  cairo: ["القاهرة"],
  giza: ["الجيزة", "أكتوبر", "بدر", "الشيخ زايد"],
  alexandria: ["الإسكندرية"],
  dakahlia: ["منية النصر", "المنصورة", "طلخا", "جمصه", "محلة دمنة"],
  aswan: ["أسوان", "كوم أمبو", "نصر النوبة"],
  assiut: ["أسيوط", "ديروط", "منفلوط", "ساحل سليم"],
  beheira: ["دمنهور", "كوم حمادة", "الرحمانية", "أبو المطامير"],
  beni_suef: ["بني سويف", "الواسطى", "سمسطا", "الناصر"],
  damietta: ["دمياط", "فارسكور", "عزبة البرج", "الزرقا"],
  fayoum: ["الفيوم", "سنورس", "طامية", "إطسا"],
  gharbia: ["طنطا", "محلة سبع", "كفر الزيات", "زفتى"],
  ismailia: ["الإسماعيلية", "فايد", "القنطرة شرق", "القنطرة غرب"],
  kafr_el_sheikh: ["كفر الشيخ", "قلين", "فوه", "بيلا"],
  luxor: ["الأقصر", "الزينية", "القرنة", "إسنا"],
  matrouh: ["مطروح", "سيدي براني", "السلوم", "الحمام"],
  minya: ["المنيا", "ملوي", "بني مزار", "سمالوط"],
  monufia: ["منوف", "شبين الكوم", "بركة السبع", "السادات"],
  new_valley: ["الوادي الجديد", "الخارجة", "الداخلة", "الفرافرة"],
  north_sinai: ["شمال سيناء", "العريش", "رفح", "الشيخ زويد"],
  port_said: ["بورسعيد"],
  qalyubia: ["بنها", "قليوب", "شبين القناطر", "كفر شكر"],
  qena: ["قنا", "نجع حمادي", "دشنا", "قوص"],
  red_sea: ["البحر الأحمر", "الغردقة", "سفاجا", "مرسى علم"],
  sharqia: ["الشرقية", "الزقازيق", "بلبيس", "فاقوس"],
  sohag: ["سوهاج", "جرجا", "طهطا", "ساقلته"],
  south_sinai: ["جنوب سيناء", "شرم الشيخ", "سانت كاترين", "نويبع"],
  suez: ["السويس"],
};
// استرجاع العناصر القديمة
const governorateSelect = document.getElementById("governorate");
const citySelect = document.getElementById("city");

// إضافة حدث تغيير على قائمة محافظات الميلاد (الكود القديم)
governorateSelect.addEventListener("change", function () {
  const selectedGovernorate = this.value;
  const cities = governoratesCities[selectedGovernorate] || [];

  citySelect.innerHTML = '<option value="">-اختر المدينة-</option>';
  cities.forEach(function (city) {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
});

