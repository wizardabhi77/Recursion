
function fibs (n) {

    let firstnum = 0;
    let secondnum = 1;
    let fibarr = [0,1];

    for (i=0; i < n-1; i++) {
        
        let sum = firstnum + secondnum;
        fibarr.push(sum);
        
        firstnum = secondnum;
        secondnum = sum;

    }

    return fibarr;
}


let fibsRecArr = [0,1];
let firstn = 0;
let secondn = 1;
function fibsRec (n) {

    if(n <= 1){
        
        console.log(fibsRecArr);
        return null;
    }

    

    let sum = firstn + secondn;
    
    fibsRecArr.push(sum);

    firstn = secondn;
    secondn = sum;
    
    fibsRec(n-1);

}


console.log(fibs(8));
fibsRec(8);