const formData = { email: '', message: '' };
const userForm = document.querySelector(`.feedback-form`);

const grabtUserDataInput = event => {
  return {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  };
};

const saveUserDataInput = data => {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};
const setFormData = () => {
  userForm.email.value = formData.email;
  userForm.message.value = formData.message;
};

const checkUSerData = () => {
  let localData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? ``;
  if (localData.email || localData.message) {
    formData = {
      email: localData.email,
      message: localData.message,
    };
    return true;
  } else return false;
};
const checkUserInput = event =>
  event.currentTarget.elements.email.value &&
  event.currentTarget.elements.message.value;

// BOdy

checkUSerData() ? setFormData() : console.log(`storage empty`);

userForm.addEventListener(`input`, event => {
  formData = grabtUserDataInput(event);
  saveUserDataInput(formData);
});

userForm.addEventListener(`submit`, event => {
  event.preventDefault();
  if (!checkUserInput(event)) {
    alert(`Fill please all fields`);
  } else {
    formData = {
      email: event.currentTarget.elements.email.value,
      message: event.currentTarget.elements.message.value,
    };
    console.log(formData);
    event.currentTarget.reset();
    localStorage.clear();
  }
});
