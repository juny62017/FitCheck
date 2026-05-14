let calculateBtn =
    document.querySelector(".calculate-btn");

let resetBtn =
    document.querySelector(".reset-btn");

let heightInput =
    document.getElementById("heightInput");

let weightInput =
    document.getElementById("weightInput");

let ageInput =
    document.getElementById("ageInput");

let resultNumber =
    document.querySelector(".result-number");

let resultText =
    document.querySelector(".result-text");

calculateBtn.onclick = function () {

    let heightValue =
        heightInput.value;

    let weightValue =
        weightInput.value;

    if (
        heightValue === "" ||
        weightValue === ""
    ) {

        resultNumber.innerText =
            "00.0";

        resultText.innerText =
            "Please fill all fields";

        resultText.style.color =
            "#d67b7b";

        return;
    }

    let heightInMeter =
        Number(heightValue) / 100;

    let weightInKg =
        Number(weightValue);

    let bmi =
        weightInKg /
        (heightInMeter * heightInMeter);

    let finalBmi =
        bmi.toFixed(1);

    resultNumber.innerText =
        finalBmi;

    if (bmi < 18.5) {

        resultText.innerText =
            "Underweight";

        resultText.style.color =
            "#d8a657";

    }

    else if (
        bmi >= 18.5 &&
        bmi <= 24.9
    ) {

        resultText.innerText =
            "Healthy Range";

        resultText.style.color =
            "#7da67d";

    }

    else if (
        bmi >= 25 &&
        bmi <= 29.9
    ) {

        resultText.innerText =
            "Overweight";

        resultText.style.color =
            "#d8a657";

    }

    else {

        resultText.innerText =
            "Obese";

        resultText.style.color =
            "#d67b7b";

    }

};

resetBtn.onclick = function () {

    heightInput.value = "";

    weightInput.value = "";

    ageInput.value = "";

    resultNumber.innerText =
        "00.0";

    resultText.innerText =
        "Healthy Range";

    resultText.style.color =
        "#7da67d";

};