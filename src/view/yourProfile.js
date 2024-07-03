import profilePictureSrc from "../assets/images/profile-picture.png";

const generateYourProfilePage = () => {
  const mainSection = document.getElementById("main-section");

  const yourProfilePageContainer = document.createElement("div");

  const currentStepInfo = document.createElement("div");
  const yourProfileInfo = document.createElement("div");
  const profilePicture = document.createElement("div");
  const profileSignupFormContainer = document.createElement("div");
  const signupFormSubmitButton = document.createElement("div");

  currentStepInfo.classList.add("step-info");
  yourProfileInfo.classList.add("setup-page-info");
  profilePicture.classList.add("profile-picture");
  profileSignupFormContainer.classList.add("profile-signup-form");
  signupFormSubmitButton.classList.add("form-submission-button");
  signupFormSubmitButton.setAttribute("id", "your-profile-button");

  currentStepInfo.innerHTML = "<strong>Step 1 of</strong> 3";

  yourProfileInfo.innerHTML =
    "<h4>Your Profile</h4> \n <p>Update your profile to get better fitness result from trainer</p>";

  const picture = getImage(profilePictureSrc);
  profilePicture.appendChild(picture);

  profileSignupFormContainer.appendChild(createSignupForm());

  signupFormSubmitButton.appendChild(createSubmitButton());

  yourProfilePageContainer.appendChild(currentStepInfo);
  yourProfilePageContainer.appendChild(yourProfileInfo);
  yourProfilePageContainer.appendChild(profilePicture);
  yourProfilePageContainer.appendChild(profileSignupFormContainer);
  yourProfilePageContainer.appendChild(signupFormSubmitButton);

  mainSection.appendChild(yourProfilePageContainer);
};

const getImage = (pictureSrc) => {
  const picture = new Image();
  picture.src = pictureSrc;

  return picture;
};

const createSignupForm = () => {
  const profileSignupForm = document.createElement("form");

  const userNameLabel = document.createElement("label");
  userNameLabel.textContent = "Username: ";
  const userNameInput = document.createElement("input");
  userNameInput.placeholder = "username";
  userNameInput.type = "text";
  userNameInput.name = "username";
  userNameInput.required = true;

  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password: ";
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "password";
  passwordInput.name = "password";
  passwordInput.required = true;

  profileSignupForm.appendChild(userNameLabel);
  profileSignupForm.appendChild(userNameInput);
  profileSignupForm.appendChild(passwordLabel);
  profileSignupForm.appendChild(passwordInput);

  return profileSignupForm;
};

const createSubmitButton = () => {
  const submitButton = document.createElement("button");

  submitButton.innerText = "Continue";

  return submitButton;
};

export { generateYourProfilePage };
