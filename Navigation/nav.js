

document.addEventListener("DOMContentLoaded", function() {
    fetch("Navigation/nav.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar el footer");
        }
        return response.text();
      })
      .then(data => {
        document.getElementById("nav").innerHTML = data;
      })
      .catch(err => console.error(err));
  });