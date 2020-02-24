const nav = document.createElement('div');
nav.innerHTML = `
<h1 id="logo" class="nav__logo">HBT</h1>
<ul class="nav__links">
  <li><a class="nav__links__link" href="index.html">Home</a></li>
  <li><a class="nav__links__link" href="about.html">About</a></li>
  <li><a class="nav__links__link" href="contact.html">Contact</a></li>
</ul>
`;

const navParent = document.querySelector('.nav__parent');
navParent.appendChild(nav);

const footer = document.createElement('div');
footer.innerHTML = `
<footer class="footer">
<p>Hotel BT &copy; 2020, All Rights Reserved</p>
</footer>
`;

const footerParent = document.querySelector('.footer__parent');
footerParent.appendChild(footer);
