const genereateStepCounter = (currentStep) => {
  const currentStepInfo = document.createElement("div");

  currentStepInfo.classList.add("step-info");

  currentStepInfo.innerHTML = `<strong>Step ${currentStep} of</strong> 3`;

  return currentStepInfo;
};

const createBackButton = () => {
  const backButtonContainer = document.createElement("div");
  const backButton = document.createElement("i");

  backButtonContainer.classList.add("back-button");
  backButton.classList.add("fa-arrow-left");
  backButton.classList.add("fa-solid");

  backButtonContainer.appendChild(backButton);

  return backButtonContainer;
};

const createSubmitButton = (buttonId, buttonClass) => {
  const submitButton = document.createElement("button");
  submitButton.type = "submit";

  submitButton.innerHTML = 'Continue <i class = "fa-solid fa-arrow-right"></i>';

  return submitButton;
};

export { genereateStepCounter, createBackButton, createSubmitButton };
