// 0 = idle, 1 = smack, 2 = talk, 
// 3 = ne, 4 = kta, 5 = ryn, 6 = ki
var henioState = 0

const imgHenio = document.getElementById("henioImg");
const aHenio = document.getElementById("henioA");

const smack = document.getElementById("smackAud");
const babel = document.getElementById("babelAud");
const splat = document.getElementById("splatAud");


const imgNektarynka = document.getElementById("nektarynkaImg");
const aNektarynka = document.getElementById("nektarynkaA");

const nekta = document.getElementById("nektarynkaAud");
const fnaf = document.getElementById("fnafAud");

aHenio.addEventListener("click", () => {
    if (henioState == 0) {
        henioState = henioState + 1;
        imgHenio.src = "assets/babel/withTP/babelpunch.png";
        smack.play();
        setTimeout(() => {
            henioState = henioState + 1;
            imgHenio.src = "assets/babel/withTP/babeltalk.png";
            babel.play();
            setTimeout(() => {
                henioState = 0;
                imgHenio.src = "assets/babel/withTP/babelstand.png";
            }, 800);
        }, 800);
    }
});

setTimeout(() => {
    aNektarynka.classList.add("move-in");
}, 2000);

aNektarynka.addEventListener("click", () => {
    aNektarynka.classList.add("click");
    setTimeout(() => {
        aNektarynka.classList.remove("click");
        fnaf.play();
    }, 140);
    if (henioState == 0) {
        henioState = 3;
        imgHenio.src = "assets/babel/nekta/nekta1hq.png";
        nekta.play();
        setTimeout(() => {
            henioState = henioState + 1;
            imgHenio.src = "assets/babel/nekta/nekta2hq.png";
            setTimeout(() => {
                henioState = henioState + 1;
                imgHenio.src = "assets/babel/nekta/nekta3hq.png";
                setTimeout(() => {
                    henioState = henioState + 1;
                    imgHenio.src = "assets/babel/nekta/nekta4hq.png";
                    setTimeout(() => {
                        henioState = 0;
                        imgHenio.src = "assets/babel/withTP/babelstand.png";
                    }, 600);
                }, 700);
            }, 600);
        }, 700);
    }
})