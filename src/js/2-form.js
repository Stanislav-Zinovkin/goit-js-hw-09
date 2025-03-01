const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedData) {
  formData.email = savedData.email;
  formData.message = savedData.message;

  form.email.value = formData.email || '';
  form.message.value = formData.message || '';
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name === 'email') {
    formData.email = value;
  } else if (name === 'message') {
    formData.message = value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fields cannot be empty');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.email.value = '';
    form.message.value = '';
  }
});
