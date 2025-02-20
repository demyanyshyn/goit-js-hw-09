let formData = { email: '', message: '' };
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
const setFormData = data => {
  console.log(userForm.email.textContent);
};

const checkUSerData = () => {
  let localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localData.email || localData.message) {
    setFormData(localData);
  }
};
checkUSerData(userForm);

userForm.addEventListener(`input`, event => {
  formData = grabtUserDataInput(event);
  saveUserDataInput(formData);
});
