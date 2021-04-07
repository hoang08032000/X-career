function validateTime(time){
    a = time.split(":");
    if(parseInt(a[0]) >= 0 && parseInt(a[0]) <= 23 && parseInt(a[1]) >=0 && parseInt(a[1]) <= 59){
        return true;
    }
    else{
        return false
    }
    
}


function missingNumber(arr){
    let a = (i) => {return i <=arr.length}
    let b = (i) => {return i >= 0}
    if(arr.every(a) && arr.every(b) && arr.length>0 && arr.length<1000){
        for(let i =0; i<=arr.length; i++){
            if(!arr.includes(i)){
                return i;
            }

        }
    }
}

