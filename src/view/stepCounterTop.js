const genereateStepCounter = (currentStep) => {
  const currentStepInfo = document.createElement("div");

  currentStepInfo.classList.add("step-info");

  currentStepInfo.innerHTML = `<strong>Step ${currentStep} of</strong> 3`;

  return currentStepInfo;
};

export default genereateStepCounter;
