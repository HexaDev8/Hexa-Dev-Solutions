const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const closeBtn = document.getElementById('closeBtn');
hamburger.addEventListener('click', () => {mobileNav.classList.toggle('show');});
closeBtn.addEventListener('click', () => {mobileNav.classList.remove('show');});

document.getElementById("submitLink").addEventListener("click", function (event)
{
    event.preventDefault(); // stop empty mailto from triggering

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // simple email regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validations
    if (name === "")
    {
      alert("Please enter your name.");
      return;
    }
    if (email === "" || !emailPattern.test(email))
    {
      alert("Please enter a valid email address.");
      return;
    }
    if (message === "")
    {
      alert("Please enter your message.");
      return;
    }

    // build mailto link
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    const mailtoLink = `mailto:hexadevsolutions@gmail.com?subject=${subject}&body=${body}`;

    // open in new tab/window
    window.open(mailtoLink, '_blank');
});