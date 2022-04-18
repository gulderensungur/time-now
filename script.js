const firstPackage = document.getElementById("first-package");
const secondPackage = document.getElementById("second-package");
const toggle = document.getElementById("price-toggle");

toggle.addEventListener("click", onToggleCheck);

function onToggleCheck() {
  if (toggle.checked) {
    firstPackage.innerText = "First package: 8$";
    secondPackage.innerText = "Second package: 12$";
  } else {
    firstPackage.innerText = "First package: 4$";
    secondPackage.innerText = "Second package: 6$";
  }
}
