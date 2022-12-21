var n=10;
function fib(n){
    var a=[];
    a[0]=0;
    a[1]=1;
    for(i=2;i<n;i++){
        a[i]=a[i-1]+a[i-2];
    }
    return a;
}
console.log(fib(n));