document.addEventListener('DOMContentLoaded', () => {
    const sizeInput = document.getElementById('sizeInput');
    const sizeValue = document.getElementById('sizeValue');
    const algoSelect = document.getElementById('algoSelect');
    const orderSelect = document.getElementById('orderSelect');
    const sortButton = document.getElementById('sortButton');
    let array = [];
    
    // Mise à jour de la taille
    sizeInput.addEventListener('input', () => {
        sizeValue.textContent = sizeInput.value;
        array = createBars(parseInt(sizeInput.value));
    });
    
    // Initialisation des barres au chargement
    array = createBars(parseInt(sizeInput.value));
    
    // Lancement du tri
    sortButton.addEventListener('click', async () => {
        // Désactiver les contrôles pendant l'animation
        sortButton.disabled = true;
        algoSelect.disabled = true;
        sizeInput.disabled = true;
        orderSelect.disabled = true;
        
        // Récupérer les valeurs actuelles des barres
        array = Array.from(document.querySelectorAll('.bar')).map(bar => 
            parseInt(bar.getAttribute('data-value'))
        );
        
        const algo = algoSelect.value;
        const order = orderSelect.value;
        
        // Lancer l'algorithme approprié
        try {
            switch (algo) {
                case 'bubble':
                    if (order === 'asc') {
                        await animatedBubbleSortASC(array);
                    } else {
                        await animatedBubbleSortDESC(array);
                    }
                    break;
                case 'selection':
                    if (order === 'asc') {
                        await animatedSelectionSortASC(array);
                    } else {
                        await animatedSelectionSortDESC(array);
                    }
                    break;
                case 'quick':
                    if (order === 'asc') {
                        await animatedQuickSortASC(array, 0, array.length - 1);
                    } else {
                        await animatedQuickSortDESC(array, 0, array.length - 1);
                    }
                    break;
                case 'merge':
                    if (order === 'asc') {
                        await animatedMergeSortASC(array, 0, array.length - 1);
                    } else {
                        await animatedMergeSortDESC(array, 0, array.length - 1);
                    }
                    break;
                case 'topological':
                    // À implémenter si besoin
                    break;
            }
            
            // Finaliser l'animation
            finalizeAnimation(array);
            
        } catch (error) {
            console.error('Erreur pendant l\'animation:', error);
            // Réactiver les contrôles en cas d'erreur
            sortButton.disabled = false;
            algoSelect.disabled = false;
            sizeInput.disabled = false;
            orderSelect.disabled = false;
        }
    });
});