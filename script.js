const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");
const studentForm = document.getElementById("studentForm");
const alumniForm = document.getElementById("alumniForm");

loginBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
  studentForm.style.display = "none";
  alumniForm.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    studentForm.style.display = "none";
    alumniForm.style.display = "none";
  }
};

function showLogin(type) {
  studentForm.style.display = "none";
  alumniForm.style.display = "none";

  if (type === "student") {
    studentForm.style.display = "block";
  } else if (type === "alumni") {
    alumniForm.style.display = "block";
  }
}

studentForm.onsubmit = (e) => {
  e.preventDefault();
  modal.style.display = "none";
  loginBtn.textContent = "Profile";
};

alumniForm.onsubmit = (e) => {
  e.preventDefault();
  modal.style.display = "none";
  loginBtn.textContent = "Profile";
};
// Modal Elements
const loginBtn = document.getElementById("loginBtn");
const model = document.getElementById("loginModel");
const closeBtn = document.querySelector(".close");
const nextBtn = document.getElementById("nextBtn");
const roleSelect = document.getElementById("role");
const studentForm = document.getElementById("studentForm");
const alumniForm = document.getElementById("alumniForm");

// Open Modal
loginBtn.onclick = () => {
  modal.style.display = "flex";
};

// Close Modal
closeBtn.onclick = () => {
  modal.style.display = "none";
  resetForms();
};

// Close on outside click
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    resetForms();
  }
};

// Next Button
nextBtn.onclick = () => {
  const role = roleSelect.value;
  if (role === "student") {
    document.getElementById("step1").classList.add("hidden");
    studentForm.classList.remove("hidden");
  } else if (role === "alumni") {
    document.getElementById("step1").classList.add("hidden");
    alumniForm.classList.remove("hidden");
  }
};

// Reset forms
function resetForms() {
  document.getElementById("step1").classList.remove("hidden");
  studentForm.classList.add("hidden");
  alumniForm.classList.add("hidden");
  roleSelect.value = "";
}
