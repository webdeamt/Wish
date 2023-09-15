const animationContainer = document.getElementById("animation-container");
const popButton = document.getElementById("popButton");

popButton.addEventListener("click", () => {
    animationContainer.innerHTML = "";

    const colors = ["red", "blue", "green", "purple", "orange", "pink"];
    const flowers = ["🌼", "🌸", "🌺", "💐", "🌻"];
    const numBalloons = 15;

    for (let i = 0; i < numBalloons; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDuration = `${Math.random() * 5 + 5}s`;

        const flower = flowers[Math.floor(Math.random() * flowers.length)];

        balloon.innerHTML = flower;
        animationContainer.appendChild(balloon);
    }
});
