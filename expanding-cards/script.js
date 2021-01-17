// querySelectorAll puts all of the panels into a nodelist array
const panels = document.querySelectorAll(".panel");
// console.log(panels) will show you the array
// Since it's an array we can iterate through it
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // 1. Remove current active class first
    removeActiveClasses();
    // 2. Set the clicked panel as the active panel
    // How to add a class in JS
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    // How to remove a class in JS
    panel.classList.remove("active");
  });
}
