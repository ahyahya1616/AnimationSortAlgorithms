async function animatedBubbleSortASC(arr) {
    let i = arr.length;
    let sorted = [];
    
    while (i > 0) {
        let echange = false;
        
        for (let k = 0; k < i - 1; k++) {
            await updateBars(arr, {
                comparing: [k, k+1],
                sorted: sorted,
                explanation: `Comparaison des éléments ${arr[k]} et ${arr[k+1]}`
            });
            
            if (arr[k] > arr[k+1]) {
                await updateBars(arr, {
                    swapping: [k, k+1],
                    sorted: sorted,
                    explanation: `Échange des éléments ${arr[k]} et ${arr[k+1]} car ${arr[k]} > ${arr[k+1]}`
                });
                
                let tmp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = tmp;
                echange = true;
                
                await updateBars(arr, {
                    comparing: [k, k+1],
                    sorted: sorted,
                    explanation: `Échange effectué: ${arr[k]} et ${arr[k+1]}`
                });
            }
        }
        
        sorted.push(i-1);
        
        if (!echange) {
            for (let j = 0; j < i-1; j++) {
                if (!sorted.includes(j)) {
                    sorted.push(j);
                }
            }
            break;
        }
        
        i--;
    }
    
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
            await updateBars(arr, {
                comparing: [k, k+1],
                sorted: sorted,
                explanation: `Comparaison des éléments ${arr[k]} et ${arr[k+1]}`
            });
            
            if (arr[k] < arr[k+1]) {
                await updateBars(arr, {
                    swapping: [k, k+1],
                    sorted: sorted,
                    explanation: `Échange des éléments ${arr[k]} et ${arr[k+1]} car ${arr[k]} < ${arr[k+1]}`
                });
                
                let tmp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = tmp;
                echange = true;
                
                await updateBars(arr, {
                    comparing: [k, k+1],
                    sorted: sorted,
                    explanation: `Échange effectué: ${arr[k]} et ${arr[k+1]}`
                });
            }
        }
        
        sorted.push(i-1);
        
        if (!echange) {
            for (let j = 0; j < i-1; j++) {
                if (!sorted.includes(j)) {
                    sorted.push(j);
                }
            }
            break;
        }
        
        i--;
    }
    
    await updateBars(arr, {
        sorted: Array.from({length: arr.length}, (_, i) => i),
        explanation: "Tri terminé!"
    });
    
    return arr;
}