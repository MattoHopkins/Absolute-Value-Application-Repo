//Fibonacci function
function fibonacci(x){
    let index = 0;
    let seq=[1];

    //Computes in N time
    while(x>seq[seq.length-1]){

        if(seq.length <=1)
            seq.push(1);
        else{
            seq.push(seq[index] + seq[index+1]);
            index++;
        }
        if(x<seq[index] + seq[index+1])
            return seq.toString();
    }

}


//Change the variable found in the function call to specify "x"
//Default console.log for the output
console.log(fibonacci(6));