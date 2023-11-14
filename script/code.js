document.getElementById('calculateGrade').addEventListener("click",function(){
    const marks = parseFloat(document.getElementById('marks').value)
    const btnSubmit = parseFloat(document.getElementById('btnSubmit').alert)
    switch (marks) {
        case 100:
            alert("A+")
        break;
        case 99>=90:
            alert("A")
        break;
        case 89>=80:
            alert("B+")
        break;
        case 79>=70:
            alert("Distinction")
        break;
        case 69>=60:
            alert("C+")
        break;
        case 59>=50:
            alert("Passed")
        break;
        case 49>=0:
            alert("Failed")
        break;
    }
});
/* 
let btnSubmit = document.querySelector('[data-submit]')
function displayMarks () {
    let marks = +document.querySelector('[data-marks]').value
    let output = document.querySelector('[data-output]')
    switch (true) {
        case marks < 50:
            output.innerText = `You failed`;
        break;
        case marks <= 59:
            output.innerText = `You Pass`;
        break;
        case marks <= 69:
            output.innerText = `C+`;
        break;
        case marks <= 79:
            output.innerText = `Distinction`;
        break;
        case marks <= 89:
            output.innerText = `B+`;
        break;
        case marks <= 99:
            output.innerText = `A`;
        break;
        case marks == 100:
            output.innerText = `A+`;
        break;
        default:
            output.innerText = `You are not valid`
        break;   
    }
}
btnSubmit.addEventListener('click', displayMarks);
*/