document.getElementById('contact').addEventListener('click', (event) => {
  processContactRequest();
})

let processContactRequest = (event) => {
  if (!document.getElementById('no-rat').checked) {
    alert('Sorry, we cannot process your request.');
    return;
  } else {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    alert(`Thank you, ${name}. Someone will contact you at ${email} within 24 hourse`);
  }
}