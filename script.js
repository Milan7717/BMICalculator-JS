
//creating variable
const btnEl = document.getElementById("btn");

const bmiInputEl = document.getElementById("bmi-result");

const weightConditonEL = document.getElementById("weight-condition")


//creating function
function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;


    const bmiValue = weightValue / (heightValue * heightValue);

    bmiInputEl.value = bmiValue;

    //adding condition
    if (bmiValue < 18.5) {
        weightConditonEL.innerText = "Under Weight";

    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditonEL.innerText = "Normal Weight";
    }
    else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditonEL.innerText = "Over Weight"
    }
    else if (bmiValue >= 30) {
        weightConditonEL.innerText = "Obesity";
    }


}

//adding event listener
btnEl.addEventListener("click", calculateBMI)