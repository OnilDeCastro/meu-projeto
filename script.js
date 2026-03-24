const botao = document.getElementById("toggleDark");

botao.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});