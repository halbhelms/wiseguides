{/* <section class="left contact">
<h5 class="left">Contact Us</h5>
<div>
  <label for="name">Name</label> <input type="text" id="name" />
</div>
<div>
  <label for="email">Email</label> <input type="text"  id="email" />
</div>
<div>
  <input type="checkbox" id="no-rat" /> <label for="no-rat">I am not a law enforcement agent.</label>
</div>
<button>Send</button>
</section> */}

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