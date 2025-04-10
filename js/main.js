const offLampEl = document.getElementById("off-lamp");
const onLampEl = document.getElementById("on-lamp");
const lightSwitcherButton = document.getElementById("Light-switcher");

lightSwitcherButton.addEventListener("click", function () {
  if (onLampEl.classList.contains("d-none")) {
    onLampEl.classList.remove("d-none");
    offLampEl.classList.add("d-none");
  } else {
    offLampEl.classList.remove("d-none");
    onLampEl.classList.add("d-none");
  }
});
