const form = document.getElementById('sweet-form');
const div = document.querySelector('div');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Create a FormData object, passing it the form element
  const formData = new FormData(e.target);

  console.log(formData);

  // Convert the FormData object to JSON
  const formDataJson = Object.fromEntries(formData.entries());

  console.log(formDataJson);

  // Send the data using fetch
  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formDataJson),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      div.append(data.pluralWord);
    })
    .catch((error) => console.error('Error:', error));

  form.reset();
});
