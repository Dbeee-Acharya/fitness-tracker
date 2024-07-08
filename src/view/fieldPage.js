//code to generate chose your filed page

import {
  createBackButton,
  genereateStepCounter,
  createSubmitButton,
} from "./components";

const generateFieldPage = () => {
  const mainSection = document.getElementById("main-section");

  const fieldPageContainer = document.createElement("div");
  fieldPageContainer.classList.add("field-page-container");

  const fieldPageHeading = document.createElement("div");
  fieldPageHeading.classList.add("setup-page-info");

  fieldPageHeading.innerHTML =
    "<h4>Personal Details</h4> \n <p>Choosing a Field allows us to progide you with a<br>relevant mentor</p>";

  const searchBarContainer = document.createElement("div");
  searchBarContainer.classList.add("search-bar-container");

  const searchBarInput = document.createElement("input");
  searchBarInput.classList.add("search-bar-input");
  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fa-solid");
  searchIcon.classList.add("fa-magnifying-glass");

  searchBarInput.type = "text";
  searchBarInput.placeholder = "Enter your field keyword...";
  searchBarInput.name = "searchBarInput";

  searchBarContainer.appendChild(searchIcon);
  searchBarContainer.appendChild(searchBarInput);

  fieldPageContainer.appendChild(createBackButton());
  fieldPageContainer.appendChild(genereateStepCounter(3));
  fieldPageContainer.appendChild(fieldPageHeading);
  fieldPageContainer.appendChild(searchBarContainer);

  mainSection.appendChild(fieldPageContainer);
};

export default generateFieldPage;
