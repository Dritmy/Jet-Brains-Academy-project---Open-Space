
let passBtn = document.querySelector(".passBtn");


let checks = document.querySelectorAll(".check");
let ranges = document.querySelectorAll(".lever");
let launch = document.querySelector(".launch");

for (let i = 0; i < checks.length; i++) {
    checks[i].setAttribute("disabled", "");
}

for (let i = 0; i < ranges.length; i++) {
    ranges[i].setAttribute("disabled", "");
}

launch.setAttribute("disabled", "");
launch.style.backgroundColor = "indianred";

passBtn.onclick = function () {
    let pass = document.querySelector(".pass");
    if (pass.value === "TrustNo1") {



        for (let i = 0; i < checks.length; i++) {
            checks[i].removeAttribute("disabled");
        }

        for (let i = 0; i < ranges.length; i++) {
            ranges[i].removeAttribute("disabled");
            console.log(ranges[i].value);
        }

    }
}

let flag = 1;
for (let i = 0; i < checks.length; i++) {

    checks[i].onclick = function  () {
        checks = document.querySelectorAll(".check");
        ranges = document.querySelectorAll(".lever");
        for (let j = 0; j < checks.length; j++) {
            if (checks[j].checked == true) {
                for (let k = 0; k < ranges.length; k++) {
                    if (ranges[k].value == 100) {
                        flag = 1;

                    } else {
                        flag = 0;
                    }
                }
            } else {
                flag = 0;
            }
            console.log(flag);
        }

        if (flag === 1) {
            launch.removeAttribute("disabled");
            launch.style.backgroundColor = "red";
            console.log("panel activated");
        }

    }
}

for (let i = 0; i < ranges.length; i++) {

    ranges[i].onchange = function  () {
        checks = document.querySelectorAll(".check");
        ranges = document.querySelectorAll(".lever");

        for (let j = 0; j < checks.length; j++) {
            if (checks[j].checked === true) {
                for (let k = 0; k < ranges.length; k++) {
                    if (ranges[k].value === 100) {
                       flag = 1;

                    } else {
                        flag = 0;
                    }
                }
            } else {
                flag = 0;
            }
            console.log(flag);
        }

        if (flag === 1) {
            launch.removeAttribute("disabled");
            launch.style.backgroundColor = "red";
            console.log("panel activated");
        }

    }
}

let rocket = document.querySelector(".rocket");
let intervalID

launch.onclick = function () {
    console.log("GO");
   // let start = Date.now();
   intervalID = setInterval(Go, 40);

}

let start = 0;


function Go() {
    start += 4;
    //let timePassed = Date.now() - start;
    rocket.style.transform = 'translate(0px, '+ -start + 'px)';
    if (start > 600) {
        console.log("We go to some planet)))");
        console.log(start);
        clearInterval(intervalID);

    }
}



