document.getElementById('tablaTallesBtn').onclick = function() {
    var modal = document.getElementById('tablaTallesModal');
    var img = document.getElementById('tablaTallesImg');
    modal.style.display = "block";
    img.src = "https://somosmhum.github.io/catalogo/RECURSOS/talles.jpg";
}

document.getElementsByClassName('close')[0].onclick = function() {
    var modal = document.getElementById('tablaTallesModal');
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById('tablaTallesModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*--------------------------------------- seccion ropa interior ---------------------------- */
const products = {
    1: {
      name: "Producto 1",
      colors: ["Rojo", "Azul", "Verde"],
      sizes: ["S", "M", "L"],
      fabrics: ["Algodón", "Poliéster"],
    },
    2: {
      name: "Producto 2",
      colors: ["Negro", "Blanco"],
      sizes: ["M", "L", "XL"],
      fabrics: ["Lana", "Seda"],
    },
    3: {
      name: "Producto 3",
      colors: ["Amarillo", "Naranja"],
      sizes: ["XS", "S", "M"],
      fabrics: ["Denim", "Lino"],
    },
  };
  
  document.querySelectorAll(".product").forEach((product) => {
    product.addEventListener("click", () => {
      const productId = product.getAttribute("data-id");
      const details = products[productId];
  
      document.getElementById("product-name").textContent = details.name;
  
      const colorsContainer = document.getElementById("colors");
      colorsContainer.innerHTML = "";
      details.colors.forEach(color => {
        const colorDiv = document.createElement("div");
        colorDiv.textContent = color;
        colorsContainer.appendChild(colorDiv);
      });
  
      const sizesContainer = document.getElementById("sizes");
      sizesContainer.innerHTML = "";
      details.sizes.forEach(size => {
        const sizeDiv = document.createElement("div");
        sizeDiv.textContent = size;
        sizesContainer.appendChild(sizeDiv);
      });
  
      const fabricsContainer = document.getElementById("fabrics");
      fabricsContainer.innerHTML = "";
      details.fabrics.forEach(fabric => {
        const fabricDiv = document.createElement("div");
        fabricDiv.textContent = fabric;
        fabricsContainer.appendChild(fabricDiv);
      });
  
      document.getElementById("product-details").style.display = "block";
      document.getElementById("product-details").scrollIntoView({ behavior: "smooth" });
    });
  });
/*--------------------------------------- seccion contacto ---------------------------- */

