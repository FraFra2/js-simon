const generateRandomNumbers = () => {
    const numbers = [];
    
    for (let i = 0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      numbers.push(randomNumber);
    }
    
    return numbers;
  };


  let second = 5;
  let userInputs = [];

  const numbersContainer = document.querySelector(".numbers-container");
  const timerContainer = document.querySelector(".timer-container");


  numbersContainer.innerHTML = `<h1 class = "text-center">Simon Says: ${generateRandomNumbers()}</h1>`;

    timerContainer.innerHTML = `Tempo rimanente: ${second}`;

  setInterval(() =>{
    second -= 1;
    timerContainer.innerHTML = `Tempo rimanente: ${second}`;
    if(second < 1){
        timerContainer.innerHTML = "Tempo Scaduto";

    }
}, 1000);   

setTimeout(() =>{
    numbersContainer.classList.add("d-none");
    for (let index = 0; index < 5; index++) {
        let element = userInputs[index];
        element = prompt(`Inserire l'${index} numero.`);
        userInputs.push(element);
    }
}, second * 1000);


