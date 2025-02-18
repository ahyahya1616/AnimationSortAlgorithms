function quickSortASC(arr,left=0,right=arr.length-1){
    if (left >= right) 
        return arr;
    let pivotIndex = partitionASC(arr,left,right);
    quickSortASC(arr,left,pivotIndex-1);
    quickSortASC(arr,pivotIndex+1,right);
    return arr;
    
}

function partitionASC(arr,left,right){
    let i=left+1;
    let j=right;
    while(i <= j){
        if(arr[i] < arr[left])
            i++;
        else if(arr[j] > arr[left])
            j--;
        else{
            [arr[i],arr[j]]=[arr[j],arr[i]];
            i++;
            j--;
        }
        }
        [arr[left], arr[j]] = [arr[j], arr[left]];
        return j;
}

function quickSortDESC(arr,left=0,right=arr.length-1){
    if (left >= right) 
        return arr;
    let pivotIndex = partitionDESC(arr,left,right);
    quickSortDESC(arr,left,pivotIndex-1);
    quickSortDESC(arr,pivotIndex+1,right);
    return arr;
    
}

function partitionDESC(arr,left,right){
    let i=left+1;
    let j=right;
    while(i <= j){
        if(arr[i] > arr[left])
            i++;
        else if(arr[j] < arr[left])
            j--;
        else{
            [arr[i],arr[j]]=[arr[j],arr[i]];
            i++;
            j--;
        }
        }
        [arr[left], arr[j]] = [arr[j], arr[left]];
        return j;
}


async function animatedQuickSortASC(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return arr;
    }
    
    // Marquer la partie active du tableau
    const activeRange = Array.from({length: right - left + 1}, (_, i) => i + left);
    await updateBars(arr, {
        comparing: activeRange,
        explanation: `Tri rapide sur la partie [${left}..${right}]`
    });
    
    // Effectuer le partitionnement
    let pivotIndex = await animatedPartitionASC(arr, left, right);
    
    // Marquer le pivot comme placé
    const sortedSoFar = [];
    sortedSoFar.push(pivotIndex);
    await updateBars(arr, {
        pivot: [pivotIndex],
        sorted: sortedSoFar,
        explanation: `Pivot ${arr[pivotIndex]} placé à la position ${pivotIndex}`
    });
    
    // Trier récursivement les sous-tableaux
    await animatedQuickSortASC(arr, left, pivotIndex - 1);
    await animatedQuickSortASC(arr, pivotIndex + 1, right);
    
    return arr;
}

async function animatedPartitionASC(arr, left, right) {
    // Choisir le pivot (premier élément)
    const pivot = arr[left];
    await updateBars(arr, {
        pivot: [left],
        explanation: `Pivot sélectionné: ${pivot} à l'index ${left}`
    });
    
    let i = left + 1;
    let j = right;
    
    while (i <= j) {
        // Trouver un élément plus grand que le pivot depuis la gauche
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
        
        // Trouver un élément plus petit que le pivot depuis la droite
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
        
        // Échanger les éléments si nécessaire
        if (i < j) {
            await updateBars(arr, {
                swapping: [i, j],
                pivot: [left],
                explanation: `Échange des éléments ${arr[i]} et ${arr[j]}`
            });
            
            // Effectuer l'échange
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
    
    // Placer le pivot à sa position finale
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
    
    // Marquer la partie active du tableau
    const activeRange = Array.from({length: right - left + 1}, (_, i) => i + left);
    await updateBars(arr, {
        comparing: activeRange,
        explanation: `Tri rapide sur la partie [${left}..${right}]`
    });
    
    // Effectuer le partitionnement
    let pivotIndex = await animatedPartitionDESC(arr, left, right);
    
    // Marquer le pivot comme placé
    const sortedSoFar = [];
    sortedSoFar.push(pivotIndex);
    await updateBars(arr, {
        pivot: [pivotIndex],
        sorted: sortedSoFar,
        explanation: `Pivot ${arr[pivotIndex]} placé à la position ${pivotIndex}`
    });
    
    // Trier récursivement les sous-tableaux
    await animatedQuickSortDESC(arr, left, pivotIndex - 1);
    await animatedQuickSortDESC(arr, pivotIndex + 1, right);
    
    return arr;
}

async function animatedPartitionDESC(arr, left, right) {
    // Choisir le pivot (premier élément)
    const pivot = arr[left];
    await updateBars(arr, {
        pivot: [left],
        explanation: `Pivot sélectionné: ${pivot} à l'index ${left}`
    });
    
    let i = left + 1;
    let j = right;
    
    while (i <= j) {
        // Trouver un élément plus petit que le pivot depuis la gauche
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
        
        // Trouver un élément plus grand que le pivot depuis la droite
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
        
        // Échanger les éléments si nécessaire
        if (i < j) {
            await updateBars(arr, {
                swapping: [i, j],
                pivot: [left],
                explanation: `Échange des éléments ${arr[i]} et ${arr[j]}`
            });
            
            // Effectuer l'échange
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
    
    // Placer le pivot à sa position finale
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