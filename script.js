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
