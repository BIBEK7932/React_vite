function getTicket(n){
    let arr = new Array(n);
    for(let i = 0;i<n;i++){
        arr[i] = Math.floor(Math.random()*10)
    }
    return arr;
}

function sum(a) {
    let s = 0;
    a.forEach((d) => s += d);
    return s;
}

export {getTicket,sum};