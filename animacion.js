// Cambiar el color del corazón cada 2 segundos
const corazon = document.getElementById("corazon");
const colores = ["#4e51e2a9", "#699eff", "#fc0000", "#b81eb8", "#1100ff"];
let indice = 0;

setInterval(() => {
    corazon.style.backgroundColor = colores[indice];
    corazon.style.setProperty("--before-bg", colores[indice]);
    corazon.style.setProperty("--after-bg", colores[indice]);
    indice = (indice + 1) % colores.length;
}, 2000);

// Cambiar el mensaje después de 3 segundos
setTimeout(() => {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡you are the best, and i love you and will always love you, my beautiful jennifer.! 💻💖";
}, 3000);
