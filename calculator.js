var amnt;
var c_tax;
var tax;
var n_amnt;



function PAYE(amnt){
if (amnt<=319){
    // this is for umtaxable payments
    c_tax=0;
}
else{
//next 100

n_amnt=amnt-319;
if (n_amnt<=100){
c_tax+=n_amnt*5/100;
}
else{
    //next 120
    c_tax+=5;
    n_amnt-=100;
    if(n_amnt<=120){
        c_tax+=n_amnt*10/100;
    }
    else{
        //next 3000
        c_tax+=12;
        n_amnt-=120;
        if(n_amnt<=3000){
            c_tax+=n_amnt*17.5/100;
        }
        else{
            //next 16,461
            c_tax+=525;
        n_amnt-=3000;
        c_tax+=n_amnt*25/100;
        }

    }
}
}
console.log(c_tax);
}