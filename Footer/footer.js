
document.addEventListener("DOMContentLoaded", function() {
    fetch("Footer/footer.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar el footer");
        }
        return response.text();
      })
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      })
      .catch(err => console.error(err));
  });
  
  

