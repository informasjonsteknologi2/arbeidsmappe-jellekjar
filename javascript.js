var steinEl = document.querySelector("#stein");
var saksEl = document.querySelector("#saks");
var papirEl = document.querySelector("#papir");
var maskinEl = document.querySelector("#maskin");
var vinnerEl = document.querySelector("#vinnertekst");
var spillerSumEl = document.querySelector("#spillersum")
var maskinSumEl = document.querySelector("#maskinsum")
var linkEl = document.querySelector("#link")

steinEl.addEventListener("click", sjekkSpiller);
saksEl.addEventListener("click", sjekkSpiller);
papirEl.addEventListener("click", sjekkSpiller);

var spillerPoeng = 0;
var maskinPoeng = 0;







function sjekkSpiller (e) {
  var spillervalg = e.target.id;
  var maskinvalg = tilfeldig();




  console.log("Maskinen valgte: " + maskinvalg);
  maskinEl.src = "Bilder/maskin_" + maskinvalg + ".png"

  if (spillervalg == maskinvalg) {
    vinnerEl.innerHTML="Uavgjort!";
  }
  else if (spillervalg == "stein") {
    if (maskinvalg == "papir") {
      maskinPoeng++;
      maskinSumEl.innerHTML="Maskin: "+ maskinPoeng;
      vinnerEl.innerHTML="Fillern, du tapte!";
    } else {
      spillerPoeng++;
      spillerSumEl.innerHTML="Spiller: "+ spillerPoeng;
      vinnerEl.innerHTML="Du vant!";
    }
  }

  else if(spillervalg == "saks") {
    if (maskinvalg == "stein") {
      maskinPoeng++;
      maskinSumEl.innerHTML="Maskin: "+ maskinPoeng;
      vinnerEl.innerHTML="Fillern, du tapte!";
    } else {
      spillerPoeng++;
      spillerSumEl.innerHTML="Spiller: "+ spillerPoeng;
      vinnerEl.innerHTML="Du vant!";
    }
  }
  else if (spillervalg == "papir") {
    if (maskinvalg == "saks") {
      maskinPoeng++;
      maskinSumEl.innerHTML="Maskin: "+ maskinPoeng;
      vinnerEl.innerHTML="Fillern, du tapte!";
    } else {
      spillerPoeng++;
      spillerSumEl.innerHTML="Spiller: "+ spillerPoeng;
      vinnerEl.innerHTML="Du vant!";

    }

  }
  var vinnerSum = 5;
  if (spillerPoeng == vinnerSum) {
    vinnerEl.innerHTML="Gratulerer du vant spillet!";
  } else if (maskinPoeng == vinnerSum) {
    vinnerEl.innerHTML="Oida, kanskje du vinner neste gang!";
  }
  if (spillerPoeng === vinnerSum || maskinPoeng === vinnerSum) {
    steinEl.removeEventListener("click", sjekkSpiller);
    saksEl.removeEventListener("click", sjekkSpiller);
    papirEl.removeEventListener("click", sjekkSpiller);

    steinEl.style.cursor ="auto";
    saksEl.style.cursor ="auto";
    papirEl.style.cursor ="auto";

    linkEl.innerHTML="Trykk her for å spille igjen!"
}

function tilfeldig() {
  var ran = Math.floor(Math.random()*3);

  if (ran == 0){
    return "saks"
  } else if (ran == 1){
    return "stein";
  } else{
    return "papir";
  }

}
}
