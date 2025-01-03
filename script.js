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