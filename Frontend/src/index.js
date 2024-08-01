document.addEventListener("DOMContentLoaded", function () {
  const professionalButton = document.getElementById("professionalButton");
  const personalButton = document.getElementById("personalButton");
  const professionalSection = document.getElementById("professionalSection");
  const personalSection = document.getElementById("personalSection");
  const aboutButton = document.getElementById("aboutButton");
  const expButton = document.getElementById("expButton");
  const projectsButton = document.getElementById("projectsButton");
  const contactButton = document.getElementById("contactButton");
  const about2Button = document.getElementById("about2Button");
  const photosButton = document.getElementById("photosButton");
  const coolButton = document.getElementById("coolButton");

  const about = document.getElementById("about");
  const exp = document.getElementById("exp");
  const projects = document.getElementById("projects");
  const contact = document.getElementById("contact");
  const about2 = document.getElementById("about2");
  const photos = document.getElementById("photos");
  const cool = document.getElementById("cool");

  professionalButton.addEventListener("click", function () {
    professionalSection.style.display = "block";
    exp.style.display = "block";
    projects.style.display = "block";
    about.style.display = "block";
    contact.style.display = "block";
    personalSection.style.display = "none";
    about2.style.display = "none";
    cool.style.display = "none";
  });

  personalButton.addEventListener("click", function () {
    professionalSection.style.display = "none";
    personalSection.style.display = "block";
    about2.style.display = "block";
    cool.style.display = "block";
    exp.style.display = "none";
    projects.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
  });

  aboutButton.addEventListener("click", function () {
    about.scrollIntoView({ behavior: "smooth" });
  });

  expButton.addEventListener("click", function () {
    exp.scrollIntoView({ behavior: "smooth" });
  });

  projectsButton.addEventListener("click", function () {
    projects.scrollIntoView({ behavior: "smooth" });
  });

  contactButton.addEventListener("click", function () {
    contact.scrollIntoView({ behavior: "smooth" });
  });

  about2Button.addEventListener("click", function () {
    about2.scrollIntoView({ behavior: "smooth" });
  });

  coolButton.addEventListener("click", function () {
    cool.scrollIntoView({ behavior: "smooth" });
  });

  photosButton.addEventListener("click", function () {
    photos.scrollIntoView({ behavior: "smooth" });
  });
});

function Heading() {
  let title = "this is some text";

  return;
  <h1>{title}</h1>;
}
