function bubbleSortASC(arr){
    let i = arr.length;
    while(i>0){
        let echange=false;
        for(let k = 0 ; k < i-1 ; k++){
            if(arr[k]>arr[k+1]){
                let tmp=arr[k];
                arr[k]=arr[k+1];
                arr[k+1]=tmp;
                echange=true;
            }
        }
         if(!echange){
            break;
        }
        i--;
    }
}

function bubbleSortASC(arr){
    let i = arr.length;
    while(i>0){
        let echange=false;
        for(let k = 0 ; k < i-1 ; k++){
            if(arr[k]<arr[k+1]){
                let tmp=arr[k];
                arr[k]=arr[k+1];
                arr[k+1]=tmp;
                echange=true;
            }
        }
         if(!echange){
            break;
        }
        i--;
    }
}


async function animatedBubbleSortASC(arr) {
    let i = arr.length;
    let sorted = [];
    
    while (i > 0) {
        let echange = false;
        
        for (let k = 0; k < i - 1; k++) {
            // Mettre à jour l'explication
            await updateBars(arr, {
                comparing: [k, k+1],
                sorted: sorted,
                explanation: `Comparaison des éléments ${arr[k]} et ${arr[k+1]}`
            });
            
            if (arr[k] > arr[k+1]) {
                // Mettre en évidence les éléments à échanger
                await updateBars(arr, {
                    swapping: [k, k+1],
                    sorted: sorted,
                    explanation: `Échange des éléments ${arr[k]} et ${arr[k+1]} car ${arr[k]} > ${arr[k+1]}`
                });
                
                // Effectuer l'échange
                let tmp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = tmp;
                echange = true;
                
                // Afficher après l'échange
                await updateBars(arr, {
                    comparing: [k, k+1],
                    sorted: sorted,
                    explanation: `Échange effectué: ${arr[k]} et ${arr[k+1]}`
                });
            }
        }
        
        // Ajouter l'élément trié
        sorted.push(i-1);
        
        if (!echange) {
            // Si aucun échange, tous les éléments restants sont triés
            for (let j = 0; j < i-1; j++) {
                if (!sorted.includes(j)) {
                    sorted.push(j);
                }
            }
            break;
        }
        
        i--;
    }
    
    // Marquer tous les éléments comme triés
    await updateBars(arr, {
        sorted: Array.from({length: arr.length}, (_, i) => i),
        explanation: "Tri terminé!"
    });
    
    return arr;
}

async function animatedBubbleSortDESC(arr) {
    let i = arr.length;
    let sorted = [];
    
    while (i > 0) {
        let echange = false;
        
        for (let k = 0; k < i - 1; k++) {
            // Mettre à jour l'explication
            await updateBars(arr, {
                comparing: [k, k+1],
                sorted: sorted,
                explanation: `Comparaison des éléments ${arr[k]} et ${arr[k+1]}`
            });
            
            if (arr[k] < arr[k+1]) {
                // Mettre en évidence les éléments à échanger
                await updateBars(arr, {
                    swapping: [k, k+1],
                    sorted: sorted,
                    explanation: `Échange des éléments ${arr[k]} et ${arr[k+1]} car ${arr[k]} < ${arr[k+1]}`
                });
                
                // Effectuer l'échange
                let tmp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = tmp;
                echange = true;
                
                // Afficher après l'échange
                await updateBars(arr, {
                    comparing: [k, k+1],
                    sorted: sorted,
                    explanation: `Échange effectué: ${arr[k]} et ${arr[k+1]}`
                });
            }
        }
        
        // Ajouter l'élément trié
        sorted.push(i-1);
        
        if (!echange) {
            // Si aucun échange, tous les éléments restants sont triés
            for (let j = 0; j < i-1; j++) {
                if (!sorted.includes(j)) {
                    sorted.push(j);
                }
            }
            break;
        }
        
        i--;
    }
    
    // Marquer tous les éléments comme triés
    await updateBars(arr, {
        sorted: Array.from({length: arr.length}, (_, i) => i),
        explanation: "Tri terminé!"
    });
    
    return arr;
}