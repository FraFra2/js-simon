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
  const userNumbersLabel = document.querySelector(".user-numbers");
  
  const simonNumbers = generateRandomNumbers();
  
  numbersContainer.innerHTML = `<h1 class="text-center">Simon Says: ${simonNumbers}</h1>`;
  
  timerContainer.innerHTML = `Tempo rimanente: ${second}`;
  
  setInterval(() => {
    second -= 1;
    timerContainer.innerHTML = `Tempo rimanente: ${second}`;
    if (second < 1) {
      timerContainer.innerHTML = "Tempo Scaduto";
      numbersContainer.classList.add("d-none");
    }
  }, 1000);   
  
  setTimeout(() => {
    for (let index = 0; index < 5; index++) {
      let element = prompt(`Inserire il ${index + 1}° numero.`);
      userInputs.push(Number(element));
    }
  
    userNumbersLabel.innerHTML = `
      <div>
          <h1>I numeri di Simon: ${simonNumbers}</h1>
          <h1>I numeri da te inseriti: ${userInputs}</h1>
      </div>
    `;
  
    const compareArrays = (array1, array2) => {
      const resultArray = array1.filter((element) => array2.includes(element));
      return resultArray;
    };
  
    let rightNums = compareArrays(simonNumbers, userInputs);
    userNumbersLabel.innerHTML += `Numeri corretti inseriti: ${rightNums}`; 
  }, second * 1000);
  