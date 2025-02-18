async function animatedQuickSortASC(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return arr;
    }
    
    const activeRange = Array.from({length: right - left + 1}, (_, i) => i + left);
    await updateBars(arr, {
        comparing: activeRange,
        explanation: `Tri rapide sur la partie [${left}..${right}]`
    });
    
    let pivotIndex = await animatedPartitionASC(arr, left, right);
    
    const sortedSoFar = [];
    sortedSoFar.push(pivotIndex);
    await updateBars(arr, {
        pivot: [pivotIndex],
        sorted: sortedSoFar,
        explanation: `Pivot ${arr[pivotIndex]} placé à la position ${pivotIndex}`
    });
    
    
    await animatedQuickSortASC(arr, left, pivotIndex - 1);
    await animatedQuickSortASC(arr, pivotIndex + 1, right);
    
    return arr;
}

async function animatedPartitionASC(arr, left, right) {
    const pivot = arr[left];
    await updateBars(arr, {
        pivot: [left],
        explanation: `Pivot sélectionné: ${pivot} à l'index ${left}`
    });
    
    let i = left + 1;
    let j = right;
    
    while (i <= j) {
        while (i <= j && arr[i] <= pivot) {
            await updateBars(arr, {
                comparing: [i, left],
                pivot: [left],
                explanation: `Comparaison: ${arr[i]} <= ${pivot}, on continue à droite`
            });
            i++;
        }
        
        if (i <= j) {
            await updateBars(arr, {
                comparing: [i, left],
                pivot: [left],
                explanation: `Trouvé ${arr[i]} > ${pivot} à l'index ${i}`
            });
        }
        
        while (i <= j && arr[j] > pivot) {
            await updateBars(arr, {
                comparing: [j, left],
                pivot: [left],
                explanation: `Comparaison: ${arr[j]} > ${pivot}, on continue à gauche`
            });
            j--;
        }
        
        if (i <= j && arr[j] <= pivot) {
            await updateBars(arr, {
                comparing: [j, left],
                pivot: [left],
                explanation: `Trouvé ${arr[j]} <= ${pivot} à l'index ${j}`
            });
        }

        if (i < j) {
            await updateBars(arr, {
                swapping: [i, j],
                pivot: [left],
                explanation: `Échange des éléments ${arr[i]} et ${arr[j]}`
            });
            
            [arr[i], arr[j]] = [arr[j], arr[i]];
            
            await updateBars(arr, {
                comparing: [i, j],
                pivot: [left],
                explanation: `Échange effectué: ${arr[i]} et ${arr[j]}`
            });
            
            i++;
            j--;
        }
    }
    
    await updateBars(arr, {
        swapping: [left, j],
        pivot: [left],
        explanation: `Placement du pivot: échange ${arr[left]} avec ${arr[j]}`
    });
    
    [arr[left], arr[j]] = [arr[j], arr[left]];
    
    await updateBars(arr, {
        pivot: [j],
        explanation: `Pivot ${arr[j]} placé à sa position finale ${j}`
    });
    
    return j;
}

async function animatedQuickSortDESC(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return arr;
    }
    
    const activeRange = Array.from({length: right - left + 1}, (_, i) => i + left);
    await updateBars(arr, {
        comparing: activeRange,
        explanation: `Tri rapide sur la partie [${left}..${right}]`
    });
    
    let pivotIndex = await animatedPartitionDESC(arr, left, right);
    
    const sortedSoFar = [];
    sortedSoFar.push(pivotIndex);
    await updateBars(arr, {
        pivot: [pivotIndex],
        sorted: sortedSoFar,
        explanation: `Pivot ${arr[pivotIndex]} placé à la position ${pivotIndex}`
    });
    
    await animatedQuickSortDESC(arr, left, pivotIndex - 1);
    await animatedQuickSortDESC(arr, pivotIndex + 1, right);
    
    return arr;
}

async function animatedPartitionDESC(arr, left, right) {

    const pivot = arr[left];
    await updateBars(arr, {
        pivot: [left],
        explanation: `Pivot sélectionné: ${pivot} à l'index ${left}`
    });
    
    let i = left + 1;
    let j = right;
    
    while (i <= j) {
        while (i <= j && arr[i] >= pivot) {
            await updateBars(arr, {
                comparing: [i, left],
                pivot: [left],
                explanation: `Comparaison: ${arr[i]} >= ${pivot}, on continue à droite`
            });
            i++;
        }
        
        if (i <= j) {
            await updateBars(arr, {
                comparing: [i, left],
                pivot: [left],
                explanation: `Trouvé ${arr[i]} < ${pivot} à l'index ${i}`
            });
        }
        
        while (i <= j && arr[j] < pivot) {
            await updateBars(arr, {
                comparing: [j, left],
                pivot: [left],
                explanation: `Comparaison: ${arr[j]} < ${pivot}, on continue à gauche`
            });
            j--;
        }
        
        if (i <= j && arr[j] >= pivot) {
            await updateBars(arr, {
                comparing: [j, left],
                pivot: [left],
                explanation: `Trouvé ${arr[j]} >= ${pivot} à l'index ${j}`
            });
        }
        
        if (i < j) {
            await updateBars(arr, {
                swapping: [i, j],
                pivot: [left],
                explanation: `Échange des éléments ${arr[i]} et ${arr[j]}`
            });
            
            [arr[i], arr[j]] = [arr[j], arr[i]];
            
            await updateBars(arr, {
                comparing: [i, j],
                pivot: [left],
                explanation: `Échange effectué: ${arr[i]} et ${arr[j]}`
            });
            
            i++;
            j--;
        }
    }
    
    await updateBars(arr, {
        swapping: [left, j],
        pivot: [left],
        explanation: `Placement du pivot: échange ${arr[left]} avec ${arr[j]}`
    });
    
    [arr[left], arr[j]] = [arr[j], arr[left]];
    
    await updateBars(arr, {
        pivot: [j],
        explanation: `Pivot ${arr[j]} placé à sa position finale ${j}`
    });
    
    return j;
}