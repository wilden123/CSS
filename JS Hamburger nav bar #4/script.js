const hamburgerBTN = document.getElementsByClassName("spans")[0];
const navBarlinks = document.getElementsByClassName("navbar-list")[0];

hamburgerBTN.addEventListener("click", () => {
  navBarlinks.classList.toggle("active");
});
