async function selectionSortASC(arr){
    for(let i=0 ; i< arr.length ;i++){
        let M=i;
       
        for(let j=i+1; j< arr.length ; j++){
            
            if(arr[M]>arr[j]){
                M=j;
            }
           
        }
        if(M!=i){
        
        tmp=arr[M];
        arr[M]=arr[i];
        arr[i]=tmp;
        
        }
    }
     
}

function selectionSortDES(arr){
    for(let i=0 ; i< arr.length ;i++){
        let M=i;
        for(let j=i+1; j< arr.length ; j++){
            if(arr[M]<arr[j]){
                M=j;
            }
        }
        if(M!=i){
        tmp=arr[M];
        arr[M]=arr[i];
        arr[i]=tmp;
        }
   }
   return arr;
}


async function animatedSelectionSortASC(arr) {
    const sortedIndices = [];
    
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        
        // Afficher l'élément actuel
        await updateBars(arr, {
            comparing: [i],
            sorted: sortedIndices,
            explanation: `Recherche du minimum à partir de l'index ${i}`
        });
        
        for (let j = i + 1; j < arr.length; j++) {
            // Comparer avec chaque élément suivant
            await updateBars(arr, {
                comparing: [minIndex, j],
                sorted: sortedIndices,
                explanation: `Comparaison: ${arr[minIndex]} (min actuel) et ${arr[j]}`
            });
            
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                // Afficher le nouveau minimum
                await updateBars(arr, {
                    comparing: [minIndex],
                    sorted: sortedIndices,
                    explanation: `Nouveau minimum trouvé: ${arr[minIndex]} à l'index ${minIndex}`
                });
            }
        }
        
        if (minIndex !== i) {
            // Afficher l'échange à effectuer
            await updateBars(arr, {
                swapping: [i, minIndex],
                sorted: sortedIndices,
                explanation: `Échange des éléments ${arr[i]} et ${arr[minIndex]}`
            });
            
            // Effectuer l'échange
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
            
            // Afficher après l'échange
            await updateBars(arr, {
                comparing: [i],
                sorted: sortedIndices,
                explanation: `Échange effectué: ${arr[i]} placé à la position ${i}`
            });
        }
        
        // Marquer l'élément comme trié
        sortedIndices.push(i);
        await updateBars(arr, {
            sorted: sortedIndices,
            explanation: `Élément ${arr[i]} trié à la position ${i}`
        });
    }
    
    return arr;
}

async function animatedSelectionSortDESC(arr) {
    const sortedIndices = [];
    
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = i;
        
        // Afficher l'élément actuel
        await updateBars(arr, {
            comparing: [i],
            sorted: sortedIndices,
            explanation: `Recherche du maximum à partir de l'index ${i}`
        });
        
        for (let j = i + 1; j < arr.length; j++) {
            // Comparer avec chaque élément suivant
            await updateBars(arr, {
                comparing: [maxIndex, j],
                sorted: sortedIndices,
                explanation: `Comparaison: ${arr[maxIndex]} (max actuel) et ${arr[j]}`
            });
            
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
                // Afficher le nouveau maximum
                await updateBars(arr, {
                    comparing: [maxIndex],
                    sorted: sortedIndices,
                    explanation: `Nouveau maximum trouvé: ${arr[maxIndex]} à l'index ${maxIndex}`
                });
            }
        }
        
        if (maxIndex !== i) {
            // Afficher l'échange à effectuer
            await updateBars(arr, {
                swapping: [i, maxIndex],
                sorted: sortedIndices,
                explanation: `Échange des éléments ${arr[i]} et ${arr[maxIndex]}`
            });
            
            // Effectuer l'échange
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
            
            // Afficher après l'échange
            await updateBars(arr, {
                comparing: [i],
                sorted: sortedIndices,
                explanation: `Échange effectué: ${arr[i]} placé à la position ${i}`
            });
        }
        
        // Marquer l'élément comme trié
        sortedIndices.push(i);
        await updateBars(arr, {
            sorted: sortedIndices,
            explanation: `Élément ${arr[i]} trié à la position ${i}`
        });
    }
    
    return arr;
}