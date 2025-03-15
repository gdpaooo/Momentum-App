import confetti from 'https://cdn.skypack.dev/canvas-confetti';

let mainGoalCheckbox = document.getElementById("mainGoalCheckbox");

function makeConfetti(){
    confetti()
}

mainGoalCheckbox.addEventListener('change', function() {
    if (this.checked) {
    makeConfetti();
    }
});