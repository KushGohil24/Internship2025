function onYes() {
  alert("✅ You will now receive push notifications!");
  document.getElementById("notificationModal").style.display = "none";
}

function onNo() {
  alert("❌ You opted out of push notifications.");
  document.getElementById("notificationModal").style.display = "none";
}
