document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".error-content").style.animation =
        "fadeUp 1s ease forwards";
});

const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`;
document.head.appendChild(style);
