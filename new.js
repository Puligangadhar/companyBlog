const seatReservationButton = document.getElementById("seatReservationButton");
const reservationPopup = document.getElementById("reservationPopup");
const closePopup = document.getElementById("closePopup");
const firstNameErrMsgEl = document.getElementById("firstNameErrorMsg");
const lastNameErrMsgEl = document.getElementById("lastNameErrorMsg");
const emailErrMsgEl = document.getElementById("emailErrorMsg");
seatReservationButton.addEventListener("click", () => {
  reservationPopup.style.display = "block";
});

closePopup.addEventListener("click", () => {
  reservationPopup.style.display = "none";
});

function validateForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  let reservationFormEl = document.getElementById("reservationForm");
  let formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  firstName.addEventListener("change", function (event) {
    if (event.target.value === "") {
      firstNnameErrMsgEl.textContent = "Required*";
    } else {
      firstNnameErrMsgEl.textContent = "";
    }

    formData.firstName = event.target.value;
  });
  lastName.addEventListener("change", function (event) {
    if (event.target.value === "") {
      lastNameErrMsgEl.textContent = "Required*";
    } else {
      lastNameErrMsgEl.textContent = "";
    }

    formData.lastName = event.target.value;
  });

  email.addEventListener("change", function (event) {
    if (event.target.value === "") {
      emailErrMsgEl.textContent = "Required*";
    } else {
      emailErrMsgEl.textContent = "";
    }

    formData.email = event.target.value;
  });
  function validateForm(formData) {
    let { firstName, lastName, email } = formData;
    if (firstName === "") {
      firstNameErrMsgEl.textContent = "Required*";
    }
    if (lastName === "") {
      lastNameErrMsgEl.textContent = "Required*";
    }
    if (email === "") {
      emailErrMsgEl.textContent = "Required*";
    }
  }
  function submitFormData(formData) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
      },
      body: JSON.stringify(formData),
    };

    let url = "https://gorest.co.in/public-api/users";

    fetch(url, options).then(function (response) {
      return response.json();
    });
  }

  myFormEl.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm(formData);
    submitFormData(formData);
  });
}
