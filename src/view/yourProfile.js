import profilePictureSrc from "../assets/images/profile-picture.png";
import cameraIconSrc from "../assets/icons/camera-icon.png";
import genereateStepCounter from "./stepCounterTop";

const generateYourProfilePage = () => {
  const mainSection = document.getElementById("main-section");

  const yourProfilePageContainer = document.createElement("div");
  yourProfilePageContainer.classList.add("your-profile-page-container");

  const yourProfileInfo = document.createElement("div");
  const profilePicture = document.createElement("div");
  const signupFormSubmitButton = document.createElement("div");

  yourProfileInfo.classList.add("setup-page-info");
  profilePicture.classList.add("profile-picture");
  signupFormSubmitButton.classList.add("form-submission-button");
  signupFormSubmitButton.setAttribute("id", "your-profile-button");

  yourProfileInfo.innerHTML =
    "<h4>Your Profile</h4> \n <p>Update your profile to get better fitness result from trainer</p>";

  const picture = getImage(profilePictureSrc);
  profilePicture.appendChild(picture);
  profilePicture.appendChild(getIcon());

  signupFormSubmitButton.appendChild(createSubmitButton());

  yourProfilePageContainer.appendChild(createBackButton());
  yourProfilePageContainer.appendChild(genereateStepCounter(1));
  yourProfilePageContainer.appendChild(yourProfileInfo);
  yourProfilePageContainer.appendChild(profilePicture);
  yourProfilePageContainer.appendChild(createSignupForm());
  yourProfilePageContainer.appendChild(signupFormSubmitButton);

  mainSection.appendChild(yourProfilePageContainer);
};

const getImage = (pictureSrc) => {
  const picture = new Image();
  picture.src = pictureSrc;

  return picture;
};

const getIcon = () => {
  const icon = new Image(40, 40);
  icon.src = cameraIconSrc;

  icon.classList.add("camera-icon");
  return icon;
};

const createSignupForm = () => {
  const profileSignupFormContainer = document.createElement("div");
  profileSignupFormContainer.classList.add("profile-signup-form");
  const profileSignupForm = document.createElement("form");

  const userNameLabel = document.createElement("label");
  userNameLabel.textContent = "Username:";
  const userNameInput = document.createElement("input");
  userNameInput.placeholder = "username";
  userNameInput.type = "text";
  userNameInput.name = "username";
  userNameInput.required = true;

  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password:";
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "password";
  passwordInput.name = "password";
  passwordInput.required = true;

  profileSignupForm.appendChild(userNameLabel);
  profileSignupForm.appendChild(userNameInput);
  profileSignupForm.appendChild(passwordLabel);
  profileSignupForm.appendChild(passwordInput);

  profileSignupFormContainer.appendChild(profileSignupForm);

  return profileSignupFormContainer;
};

const createSubmitButton = () => {
  const submitButton = document.createElement("button");

  submitButton.innerHTML = 'Continue <i class = "fa-solid fa-arrow-right"></i>';

  return submitButton;
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

export { generateYourProfilePage };
