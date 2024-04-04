const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission
  
      // Fetch data based on user input
      const input = document.querySelector("input#searchByID");
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
          // Display fetched data on the page
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
          title.innerText = data.title;
          summary.innerText = data.summary;
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  