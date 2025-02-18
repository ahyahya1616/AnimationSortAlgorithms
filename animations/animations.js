// Variables globales pour l'animation
let animationSpeed = 50;
let animationPaused = false;
let currentAnimation = null;
let explanation = document.createElement('div');

// Initialisation de la zone d'explication
function setupExplanationArea() {
    explanation.id = 'explanation-area';
    explanation.innerHTML = '<h3>Explication de l\'algorithme</h3><p>Sélectionnez un algorithme et cliquez sur "Lancer le tri" pour commencer.</p>';
    document.body.insertBefore(explanation, document.getElementById('bars-container').nextSibling);
}

// Création des barres en fonction de la taille
function createBars(size) {
    const container = document.getElementById('bars-container');
    container.innerHTML = '';
    
    const barValues = [];
    for (let i = 0; i < size; i++) {
        barValues.push(Math.floor(Math.random() * 100) + 1);
    }
    
    for (let i = 0; i < size; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${barValues[i] * 3}px`;
        bar.setAttribute('data-value', barValues[i]);
        container.appendChild(bar);
    }
    
    return barValues;
}

// Mise à jour de l'affichage des barres
async function updateBars(array, highlights = {}) {
    const bars = document.querySelectorAll('.bar');
    
    // Reset all bars to default state
    bars.forEach(bar => {
        bar.classList.remove('comparing', 'swapping', 'sorted', 'pivot');
    });
    
    // Apply current state
    for (let i = 0; i < array.length; i++) {
        bars[i].style.height = `${array[i] * 3}px`;
        bars[i].setAttribute('data-value', array[i]);
        
        if (highlights.comparing && highlights.comparing.includes(i)) {
            bars[i].classList.add('comparing');
        }
        if (highlights.swapping && highlights.swapping.includes(i)) {
            bars[i].classList.add('swapping');
        }
        if (highlights.sorted && highlights.sorted.includes(i)) {
            bars[i].classList.add('sorted');
        }
        if (highlights.pivot && highlights.pivot.includes(i)) {
            bars[i].classList.add('pivot');
        }
    }
    
    // Update explanation text if provided
    if (highlights.explanation) {
        explanation.querySelector('p').textContent = highlights.explanation;
    }
    
    // Check if animation is paused
    if (animationPaused) {
        return new Promise(resolve => {
            currentAnimation = { resolve };
        });
    } else {
        return new Promise(resolve => setTimeout(resolve, animationSpeed));
    }
}

// Fonction pour mettre à jour les valeurs finales après le tri
function finalizeAnimation(array) {
    const bars = document.querySelectorAll('.bar');
    const sortedIndices = Array.from({length: array.length}, (_, i) => i);
    
    // Mark all as sorted
    updateBars(array, { sorted: sortedIndices, explanation: "Tri terminé!" });
    
    // Enable controls
    document.getElementById('sortButton').disabled = false;
    document.getElementById('algoSelect').disabled = false;
    document.getElementById('sizeInput').disabled = false;
    document.getElementById('orderSelect').disabled = false;
}

// Fonction pour mettre en pause/reprendre l'animation
function togglePause() {
    animationPaused = !animationPaused;
    document.getElementById('pauseButton').textContent = animationPaused ? 'Reprendre' : 'Pause';
    
    if (!animationPaused && currentAnimation) {
        const { resolve } = currentAnimation;
        currentAnimation = null;
        resolve();
    }
}

// Fonction pour modifier la vitesse d'animation
function changeSpeed(value) {
    animationSpeed = 1000 - value;
    document.getElementById('speedValue').textContent = value;
}

// Initialiser l'animation
document.addEventListener('DOMContentLoaded', () => {
    setupExplanationArea();
    
    // Ajouter contrôles d'animation supplémentaires
    const controls = document.getElementById('controls');
    
    const pauseButton = document.createElement('button');
    pauseButton.id = 'pauseButton';
    pauseButton.textContent = 'Pause';
    pauseButton.addEventListener('click', togglePause);
    controls.appendChild(pauseButton);
    
    const speedControl = document.createElement('div');
    speedControl.innerHTML = `
        <label for="speedInput">Vitesse :</label>
        <input type="range" id="speedInput" min="1" max="99" value="50">
        <span id="speedValue">50</span>
    `;
    controls.appendChild(speedControl);
    
    document.getElementById('speedInput').addEventListener('input', (e) => {
        changeSpeed(parseInt(e.target.value));
    });
});