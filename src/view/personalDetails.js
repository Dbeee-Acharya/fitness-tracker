// Module to generate personal details page
import { createBackButton, genereateStepCounter } from "./headingInfo";

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

  //add elements to form
  personalDetailsForm.appendChild(genderSelectionContainer);
  personalDetailsForm.appendChild(dateOfBirthContainer);
  personalDetailsForm.appendChild(addressContainer);

  //adding elements to page container
  personalDetailsPageContainer.appendChild(createBackButton());
  personalDetailsPageContainer.appendChild(genereateStepCounter(2));
  personalDetailsPageContainer.appendChild(personalDetailsHeading);
  personalDetailsPageContainer.appendChild(personalDetailsForm);

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
