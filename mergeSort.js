function mergeSort (arr) {
    
    let l = 1;
    let h = arr.length;
    if(l<h){
        let mid = Math.floor((l+h)/2);
        let left = mergeSort(arr.slice(0,mid));
        let right = mergeSort(arr.slice(mid,arr.length));
        
        
        
       return merge(left,right);
        
    }
    else {
        return [arr[0]];
    }
    
    

}

function merge (left,right) {
    
    let leftArray = left;
    let rightArray = right;
    let currlength = left.length + right.length;
    let sortedArr = [];
    for(i=0; i < currlength; i++){
        
        if(leftArray.length<=0){
            sortedArr = [...sortedArr,...rightArray];
            break;
        }
        else if(rightArray.length<=0){
            sortedArr = [...sortedArr,...leftArray];
            break;
        }
        else {
            if(leftArray[0]<=rightArray[0]){
                sortedArr.push(leftArray[0]);
                leftArray.shift();
            }
            else{
                sortedArr.push(rightArray[0]);
                rightArray.shift();
            }
        }
    }
    
    return sortedArr;

}

console.log(mergeSort([105, 79, 100, 110]));

