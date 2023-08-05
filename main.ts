let x=1;
while (true){
    x=x+1;
    if(x>20){
        break
    } 
    if (x%3==0){
        continue;
    }
    console.log("\t"+x+"^2 = "+(x * x));
}