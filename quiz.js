function checkAnswer(){
    const choice = document.querySelector('input[name="quiz"]:checked')
    const feedback = document.getElementById("feedback")
    const userAnswer =  choice.value
    console.log(userAnswer) 
    console.log(choice) 
    const correctAnswer = "4"
    if(userAnswer===correctAnswer){
        feedback.textContent = "Correct! Well done."
    }else{
        feedback.textContent = "That's incorrect. Try again!"
    }
}

const submit = document.getElementById("submit-answer");
submit.addEventListener("click",checkAnswer)