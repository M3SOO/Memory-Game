let gamemaster = document.getElementById("game");
let img1 = '';
let img2 = '';
let m = 0;
let truenum = 0;
const identity = [];
let pushloop = false;

const getRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

if (pushloop == false) {
    for (let index = 0; identity.length < 29; index++) {
        const randomNumber2 = getRandomInteger(0, 29);
        if (identity.includes(randomNumber2) == false) {
            identity.push(randomNumber2);
        }
    }

    pushloop = true;
}

function countnum(num1, num2) {
    if (num1.length != 0 && num2.length != 0) {
        if (document.getElementById(num1).src == document.getElementById(num2).src) {
            img1 = "";
            img2 = "";
            m = 0;
            truenum++;
        } else {
            var delayInMilliseconds = 1000; //1 second

            setTimeout(function () {
                //your code to be executed after 1 second

                document.getElementById(num2).style.transitionDelay = '3s';
                document.getElementById(num1).style.position = 'fixed';
                document.getElementById(num1).style.display = 'none';
                document.getElementById(num2).style.position = 'fixed';
                document.getElementById(num2).style.display = 'none';
                img1 = "";
                img2 = "";
                m = 0;
            }, delayInMilliseconds);
        }
        if (truenum == 15) {
            var delayInMilliseconds = 500; //0.5 second
            setTimeout(function () {
                alert("congratulation ");
            }, delayInMilliseconds);
        }

    }
}

function iden(index2) {
    document.getElementById(index2).style.position = 'relative';
    document.getElementById(index2).style.display = 'block';
    m++;
    if (m == 1) {
        img1 = index2;
    } else if (m == 2) {
        img2 = index2;
        countnum(img1, img2);
    }
}

function addgame() {
    let imagearray = ["1.jpeg",
        "2.jpeg",
        "3.jpg",
        "4.webp",
        "5.png",
        "8.jpg",
        "9.jpg",
        "10.webp",
        "11.webp",
        "12.webp",
        "13.webp",
        "14.webp",
        "15.webp",
        "16.webp",
        "17.jpg"];
    for (let index = 0; index < 2; index++) {
        for (let i = 0; i < imagearray.length; i++) {
            let container1 = document.createElement("div");
            let imcon = document.createElement("img");

            imcon.style.position = 'fixed';
            imcon.src = './images/' + imagearray[i];
            imcon.className = 'imcon1';
            imcon.id = 'IMCO' + index + i;
            if (index == 0) {
                container1.style.order = identity[i];
            } else {
                container1.style.order = identity[i + 14];
            }
            container1.onclick = () => {

                if (img1.length != 0 && img2.length != 0 && m != 0) {

                } else if (img1 != imcon.id) {
                    if (document.getElementById(imcon.id).style.position == 'fixed') {
                        iden(imcon.id);
                    } else {
                        alert("ooops !!")
                    };

                } else {
                    alert("اختر صورة أخرى");
                }

            }
            container1.className = 'container11';

            container1.appendChild(imcon);
            gamemaster.appendChild(container1);
        }
    }

}

addgame();
