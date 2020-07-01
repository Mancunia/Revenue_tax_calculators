var amnt;
var c_tax;
var tax;
var n_amnt;


//
function PAYE(amnt){
    amnt=parseFloat(amnt);
if(amnt>20000){
    n_amnt=amnt-20000;
    c_tax=n_amnt*.30;
    c_tax+=4657.25;
}
else if(amnt>3539 && amnt<=20000){
n_amnt=amnt-3539;
c_tax=n_amnt*.25;
c_tax+=542;
}

else if(amnt>539 && amnt<=3539){
n_amnt=amnt-539;
c_tax=n_amnt*.175;
c_tax+=17;
}

else if(amnt>419 && amnt<=539) {
n_amnt=amnt-419;
c_tax=n_amnt*.10;
c_tax+=5;
}

else if(amnt>319 && amnt<=419){
n_amnt=amnt-319;
c_tax=n_amnt*.05;
c_tax+=0;
}

else{
    c_tax=0
}




// alert(c_tax);
document.getElementById("paye_out").innerHTML=c_tax; 
}

 function VAT(amnt){
     var my_vat;
     amnt=parseFloat(amnt);
    //  var flat= document.getElementById("flat").value;
     var nhil = amnt * .025;
     nhil+=nhil;
     console.log(nhil);
     //no flat
          my_vat = (amnt+nhil);
          console.log(my_vat);
          my_vat *=0.125;
          console.log(my_vat);
     document.getElementById("vat_out").innerHTML=my_vat; 
     


 }







function calc_paye(){
    var in_amnt= document.getElementById("in_amnt").value;
    PAYE(in_amnt);
    }

    function calc_vat(){
        var in_amnt= document.getElementById("in_amnt").value;
        // console.log(in_amnt);
        VAT(in_amnt);
        }