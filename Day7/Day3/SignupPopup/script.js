function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";

  document.getElementById("errorMsg").style.display = "none";
  document.getElementById("successMsg").style.display = "none";
  document.getElementById("emailInput").value = "";
}

function validateEmail() {
  const emailInput = document.getElementById("emailInput");
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");
  const email = emailInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    errorMsg.style.display = "block";
    successMsg.style.display = "none";
  } else {
    errorMsg.style.display = "none";
    successMsg.style.display = "block";
  }
}

document.querySelector(".open-confirm").onclick = () =>
  openModal("confirmModal");
document.querySelector(".open-signup").onclick = () => openModal("signupModal");
