// Module to generate personal details page
import {
  createBackButton,
  genereateStepCounter,
  createSubmitButton,
} from "./components";

const generatePersonalDetailPage = () => {
  const mainSection = document.getElementById("main-section");

  const personalDetailsPageContainer = document.createElement("div");
  personalDetailsPageContainer.classList.add("personal-details-page-container");

  const personalDetailsHeading = document.createElement("div");
  personalDetailsHeading.classList.add("setup-page-info");

  personalDetailsHeading.innerHTML =
    "<h4>Personal Details</h4> \n <p>Update your profile to get better fitness result from <br> trainer</p>";

  const personalDetailsForm = document.createElement("form");
  personalDetailsForm.classList.add("personal-details-form");

  //gender selection radio
  const genderSelectionContainer = document.createElement("div");
  genderSelectionContainer.classList.add("gender-selection-container");

  const genderSelectionContainerHeader = document.createElement("h4");
  genderSelectionContainerHeader.textContent = "Gender";
  genderSelectionContainer.appendChild(genderSelectionContainerHeader);

  genderSelectionContainer.appendChild(createRadio("male", "male", "Male"));
  genderSelectionContainer.appendChild(
    createRadio("female", "female", "Female"),
  );
  genderSelectionContainer.appendChild(createRadio("other", "other", "Other"));

  const genderSelectionHeading = document.createElement("h4");
  genderSelectionHeading.textContent = "Gender";

  //date of birth
  const dateOfBirthContainer = document.createElement("div");
  dateOfBirthContainer.classList.add("date-of-birth-container");

  const dateOfBirthContainerHeader = document.createElement("h4");
  dateOfBirthContainerHeader.textContent = "Date of Birth";

  const dateOfBirthInputField = document.createElement("input");
  dateOfBirthInputField.setAttribute("type", "date");
  dateOfBirthInputField.setAttribute("id", "dateOfBirth");
  dateOfBirthInputField.setAttribute("name", "Date of Birth");
  dateOfBirthInputField.setAttribute("value", "1997-12-22");
  dateOfBirthInputField.setAttribute("min", "1900-01-01");
  dateOfBirthInputField.setAttribute("max", "3000-12-31");
  dateOfBirthInputField.required = true;

  dateOfBirthContainer.appendChild(dateOfBirthContainerHeader);
  dateOfBirthContainer.appendChild(dateOfBirthInputField);

  //address
  const addressContainer = document.createElement("div");
  addressContainer.classList.add("address-container");

  const addressHeader = document.createElement("h4");
  addressHeader.textContent = "Address";

  const addressInputField = document.createElement("input");
  addressInputField.setAttribute("type", "text");
  addressInputField.setAttribute("name", "address");
  addressInputField.placeholder = "Address";
  addressInputField.required = true;

  addressContainer.appendChild(addressHeader);
  addressContainer.appendChild(addressInputField);

  //heaight and weight
  const heightWeightContainer = document.createElement("div");
  heightWeightContainer.classList.add("height-weight-container");

  const heightContainer = document.createElement("div");
  heightContainer.classList.add("height-container");

  const heightLabel = document.createElement("label");
  heightLabel.setAttribute("for", "height");
  heightLabel.innerHTML = "Height <span>:</span>";

  const inputGroup = document.createElement("div");
  inputGroup.classList.add("input-group");

  const heightInputField = document.createElement("input");
  heightInputField.setAttribute("type", "number");
  heightInputField.id = "height";
  heightInputField.name = "height";
  heightInputField.setAttribute("min", "50");
  heightInputField.setAttribute("max", "220");
  heightInputField.setAttribute("value", "50");
  heightInputField.setAttribute("step", "1");
  heightInputField.required = true;

  const heightInputUnit = document.createElement("span");
  heightInputUnit.textContent = "cm";

  inputGroup.appendChild(heightInputField);
  inputGroup.appendChild(heightInputUnit);

  heightContainer.appendChild(heightLabel);
  heightContainer.appendChild(inputGroup);

  heightWeightContainer.appendChild(heightContainer);

  const weightContainer = document.createElement("div");
  weightContainer.classList.add("weight-container");

  const weightLabel = document.createElement("label");
  weightLabel.setAttribute("for", "weight");
  weightLabel.innerHTML = "Weight <span>:</span>";

  const weightInputGroup = document.createElement("div");
  weightInputGroup.classList.add("input-group");

  const weightInputField = document.createElement("input");
  weightInputField.setAttribute("type", "number");
  weightInputField.id = "weight";
  weightInputField.name = "weight";
  weightInputField.setAttribute("min", "20");
  weightInputField.setAttribute("max", "220");
  weightInputField.setAttribute("value", "50");
  weightInputField.setAttribute("step", "1");
  weightInputField.required = true;

  const weightInputUnit = document.createElement("span");
  weightInputUnit.textContent = "kg";

  weightInputGroup.appendChild(weightInputField);
  weightInputGroup.appendChild(weightInputUnit);

  weightContainer.appendChild(weightLabel);
  weightContainer.appendChild(weightInputGroup);

  heightWeightContainer.appendChild(weightContainer);

  //your health updates
  const healthUpdatesContainer = document.createElement("div");
  healthUpdatesContainer.classList.add("health-updates-container");

  const healthUpdatesLabel = document.createElement("h4");
  healthUpdatesLabel.setAttribute("for", "healthUpdates");
  healthUpdatesLabel.textContent = "Your Health Updates: ";

  healthUpdatesContainer.appendChild(healthUpdatesLabel);

  const healthUpdatesInputField = document.createElement("input");
  healthUpdatesInputField.type = "text";
  healthUpdatesInputField.placeholder = "Any allergies, medication, or others";
  healthUpdatesInputField.name = "healthUpdates";

  healthUpdatesContainer.appendChild(healthUpdatesInputField);

  //add elements to form
  personalDetailsForm.appendChild(genderSelectionContainer);
  personalDetailsForm.appendChild(dateOfBirthContainer);
  personalDetailsForm.appendChild(addressContainer);
  personalDetailsForm.appendChild(heightWeightContainer);
  personalDetailsForm.appendChild(healthUpdatesContainer);

  const signupFormSubmitButton = document.createElement("div");
  signupFormSubmitButton.classList.add("form-submission-button");

  signupFormSubmitButton.appendChild(
    createSubmitButton("personal-details-submit-button"),
  );

  //adding elements to page container
  personalDetailsPageContainer.appendChild(createBackButton());
  personalDetailsPageContainer.appendChild(genereateStepCounter(2));
  personalDetailsPageContainer.appendChild(personalDetailsHeading);
  personalDetailsPageContainer.appendChild(personalDetailsForm);
  personalDetailsPageContainer.appendChild(signupFormSubmitButton);

  mainSection.appendChild(personalDetailsPageContainer);
};

function createRadio(name, value, labelText) {
  const label = document.createElement("label");

  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = name;
  radio.value = value;

  label.appendChild(radio);
  label.appendChild(document.createTextNode(labelText));

  return label;
}

export default generatePersonalDetailPage;
