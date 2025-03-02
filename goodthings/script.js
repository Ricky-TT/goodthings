const searchButton = document.querySelector(".search-bar button");
const searchInput = document.querySelector(".search-bar input");

searchButton.addEventListener("click", () => {
  const query = searchInput.value;
  if (query) {
    alert(`You searched for: ${query}`);
  } else {
    alert("Please enter a search term.");
  }
});
