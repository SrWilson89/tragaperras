let balance = 100; // Saldo inicial del jugador
const spinCost = 10; // Costo por cada tirada

document.getElementById('spin').addEventListener('click', spin);

function spin() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const message = document.getElementById('message');
    const balanceElement = document.getElementById('balance');

    if (balance >= spinCost) {
        // Descontar el costo de la tirada
        balance -= spinCost;
        balanceElement.textContent = `Saldo: $${balance}`;

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
            const prize = calculatePrize(result1);
            balance += prize;
            message.textContent = `¡Ganaste $${prize}!`;
            message.style.color = "green";
        } else {
            message.textContent = "Sigue intentando...";
            message.style.color = "red";
        }

        // Actualizar el saldo
        balanceElement.textContent = `Saldo: $${balance}`;
    } else {
        message.textContent = "No tienes suficiente saldo para seguir jugando.";
        message.style.color = "red";
    }
}

function calculatePrize(symbol) {
    // Definir premios según el símbolo
    switch (symbol) {
        case "🍒":
            return 50;
        case "🍋":
            return 20;
        case "🍊":
            return 10;
        case "🍇":
            return 100;
        case "🍉":
            return 200;
        default:
            return 0;
    }
}

