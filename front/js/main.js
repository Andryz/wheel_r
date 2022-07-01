const wheel = document.querySelector('#wheel');
const firstSpin = document.querySelector('#spin');
const prize = document.querySelector('#prize');
const btnTry = document.querySelector('#try');
const giftInfo = document.querySelector('#gift-info');


let spinActive = false;

const rotation = (rotate) => {
    if (rotate === 1) {
        wheel.classList.add('first-spin');
        spinActive = true;
        setTimeout(()=>{
            spinActive = false;
            prize.classList.add('try');
        }, 3100)
    } else if (rotate === 2){
        wheel.classList.remove('first-spin');
        wheel.classList.add('second-spin');
        spinActive = true;
        setTimeout(()=>{
            spinActive = false;
            prize.classList.add('gift');

        }, 3100)
        setTimeout(()=>{
            giftInfo.classList.add('show');
        }, 4100)
    }

}

firstSpin.addEventListener('click', () => {
    if (!spinActive) rotation(1)

});

btnTry.addEventListener('click', ()=>{
    prize.classList.remove('try');
    rotation(2)
});
