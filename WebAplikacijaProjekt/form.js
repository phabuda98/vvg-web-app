const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const entries = Object.fromEntries(data.entries());
  console.table(entries);
});
