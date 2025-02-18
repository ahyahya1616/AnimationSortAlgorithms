async function animatedMergeSortASC(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return arr;
    }
    
    const mid = Math.floor((left + right) / 2);
    
    const currentRange = Array.from({length: right - left + 1}, (_, i) => i + left);
    await updateBars(arr, {
        comparing: currentRange,
        explanation: `Division du tableau [${left}..${right}] en deux parties: [${left}..${mid}] et [${mid+1}..${right}]`
    });
    
    await animatedMergeSortASC(arr, left, mid);
    await animatedMergeSortASC(arr, mid + 1, right);
    
    await animatedMergeASC(arr, left, mid, right);
    
    return arr;
}

async function animatedMergeASC(arr, left, mid, right) {
    const leftArray = arr.slice(left, mid + 1);
    const rightArray = arr.slice(mid + 1, right + 1);
    
    await updateBars(arr, {
        comparing: Array.from({length: right - left + 1}, (_, i) => i + left),
        explanation: `Fusion des sous-tableaux: [${left}..${mid}] et [${mid+1}..${right}]`
    });
    
    let i = 0, j = 0, k = left;
    
    const originalArr = [...arr];
    
    while (i < leftArray.length && j < rightArray.length) {
        await updateBars(arr, {
            comparing: [left + i, mid + 1 + j],
            explanation: `Comparaison de ${leftArray[i]} et ${rightArray[j]}`
        });
        
        if (leftArray[i] <= rightArray[j]) {
            arr[k] = leftArray[i];
            
            await updateBars(arr, {
                swapping: [k],
                explanation: `Placement de ${leftArray[i]} à la position ${k}`
            });
            
            i++;
        } else {
            arr[k] = rightArray[j];
            
            await updateBars(arr, {
                swapping: [k],
                explanation: `Placement de ${rightArray[j]} à la position ${k}`
            });
            
            j++;
        }
        k++;
    }
    
    while (i < leftArray.length) {
        arr[k] = leftArray[i];
        
        await updateBars(arr, {
            swapping: [k],
            explanation: `Placement de l'élément restant ${leftArray[i]} du sous-tableau gauche à la position ${k}`
        });
        
        i++;
        k++;
    }
    
    while (j < rightArray.length) {
        arr[k] = rightArray[j];
        
        await updateBars(arr, {
            swapping: [k],
            explanation: `Placement de l'élément restant ${rightArray[j]} du sous-tableau droit à la position ${k}`
        });
        
        j++;
        k++;
    }
    await updateBars(arr, {
        comparing: Array.from({length: right - left + 1}, (_, i) => i + left),
        explanation: `Fusion terminée pour l'intervalle [${left}..${right}]`
    });
}

async function animatedMergeSortDESC(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return arr;
    }
    
    const mid = Math.floor((left + right) / 2);
    
    const currentRange = Array.from({length: right - left + 1}, (_, i) => i + left);
    await updateBars(arr, {
        comparing: currentRange,
        explanation: `Division du tableau [${left}..${right}] en deux parties: [${left}..${mid}] et [${mid+1}..${right}]`
    });
    
    await animatedMergeSortDESC(arr, left, mid);
    await animatedMergeSortDESC(arr, mid + 1, right);
    
    await animatedMergeDESC(arr, left, mid, right);
    
    return arr;
}

async function animatedMergeDESC(arr, left, mid, right) {
    const leftArray = arr.slice(left, mid + 1);
    const rightArray = arr.slice(mid + 1, right + 1);
    
    await updateBars(arr, {
        comparing: Array.from({length: right - left + 1}, (_, i) => i + left),
        explanation: `Fusion des sous-tableaux: [${left}..${mid}] et [${mid+1}..${right}]`
    });
    
    let i = 0, j = 0, k = left;
    
    const originalArr = [...arr];
    
    while (i < leftArray.length && j < rightArray.length) {
       
        await updateBars(arr, {
            comparing: [left + i, mid + 1 + j],
            explanation: `Comparaison de ${leftArray[i]} et ${rightArray[j]}`
        });
        
        if (leftArray[i] >= rightArray[j]) {
            arr[k] = leftArray[i];
            
            await updateBars(arr, {
                swapping: [k],
                explanation: `Placement de ${leftArray[i]} à la position ${k}`
            });
            
            i++;
        } else {
            arr[k] = rightArray[j];
            
            await updateBars(arr, {
                swapping: [k],
                explanation: `Placement de ${rightArray[j]} à la position ${k}`
            });
            
            j++;
        }
        k++;
    }
    
    while (i < leftArray.length) {
        arr[k] = leftArray[i];
        
        await updateBars(arr, {
            swapping: [k],
            explanation: `Placement de l'élément restant ${leftArray[i]} du sous-tableau gauche à la position ${k}`
        });
        
        i++;
        k++;
    }
    
    while (j < rightArray.length) {
        arr[k] = rightArray[j];
        
        await updateBars(arr, {
            swapping: [k],
            explanation: `Placement de l'élément restant ${rightArray[j]} du sous-tableau droit à la position ${k}`
        });
        
        j++;
        k++;
    }
    
    await updateBars(arr, {
        comparing: Array.from({length: right - left + 1}, (_, i) => i + left),
        explanation: `Fusion terminée pour l'intervalle [${left}..${right}]`
    });
}