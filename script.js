document.getElementById('spin').addEventListener('click', spin);

function spin() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const message = document.getElementById('message');

    const symbols = ["🍒", "🍋", "🍊", "🍇", "🍉"];
    
    // Generar un símbolo aleatorio para cada carrete
    const result1 = symbols[Math.floor(Math.random() * symbols.length)];
    const result2 = symbols[Math.floor(Math.random() * symbols.length)];
    const result3 = symbols[Math.floor(Math.random() * symbols.length)];

    // Mostrar los símbolos en la tragamonedas
    reel1.textContent = result1;
    reel2.textContent = result2;
    reel3.textContent = result3;

    // Verificar si los tres símbolos coinciden
    if (result1 === result2 && result2 === result3) {
        message.textContent = "¡Ganaste!";
        message.style.color = "green";
    } else {
        message.textContent = "Sigue intentando...";
        message.style.color = "red";
    }
}
