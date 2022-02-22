// level 2
function fibonacci(n) {
    var a = 1;
    var b = 1;
    var s = 0;
    var i;
    for (i = 0; i < n; i++) {
        if (n <= 1) {
             s = 1;
        }

        else  {

            s = a + b;
            a = b;
            b = s;

        }
     
    }
    return s
}