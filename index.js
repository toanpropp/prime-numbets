
function ip1(){
    var num = document.getElementById("number").value;
    var isprime;
    for (let i = 2 ; i <= num ; i++) {
        isprime =1;
        for (let j =2 ; j < i ; j++) {
            if (i% j === 0 ){
                isprime = 0;
                break;
            } 
        }
        if(isprime === 1){
            document.getElementById("Pri").value = (i);
        }
    }
}


