var amnt;
var c_tax;
var tax;
var n_amnt;

//..............................
var nhil_getfund;
var vat;
var result;


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
document.getElementById("paye_out").value=c_tax.toFixed(2); 
}

//  function VAT(amnt){
//      var my_vat;
//      amnt=parseFloat(amnt);
//     //  var flat= document.getElementById("flat").value;
//      var nhil = amnt * .025;
//      nhil+=nhil;
//      console.log(nhil);
//      //no flat
//           my_vat = (amnt+nhil);
//           console.log(my_vat);
//           if (document.getElementById('cst').checked) {
//             var cst= amnt*.09;
//             my_vat+=cst;
//         }
//           my_vat *=0.125;
//           console.log(my_vat);
//      document.getElementById("vat_out").innerHTML=my_vat.toFixed(2); 
     
//  }

//calculate CST
function CST(amnt){

    amnt=parseFloat(amnt);
    result=amnt*.09;
    result=result.toFixed(2)

    document.getElementById("cst_out").value=result;

return result;

}

//calculate Flat
function flat(amnt){

    amnt=parseFloat(amnt);
    result=amnt*.03;
    result=result.toFixed(2)
console.log(result);
    document.getElementById("vat_p_flat").value=result;
return result;

}

//calculate vat on sales
function v_sales(amnt){

    amnt=parseFloat(amnt);

 nhil= amnt*.025;
 document.getElementById("vat_s_nhil").value=nhil.toFixed(2);
  document.getElementById("vat_s_getfunds").value=nhil.toFixed(2);

 nhil+=nhil;
 amnt+=nhil;
 console.log("the one:"+amnt);
 if(document.getElementById("cst_in").value!=""){
     var cst=document.getElementById("cst_in").value;
     cst= CST(cst);
     cst=parseFloat(cst);
     amnt+=cst;
     console.log("that one:"+amnt);
 }

 result=amnt*.125;
 console.log("this one:"+result);
result=result.toFixed(2);
document.getElementById("vat_s_vat").value=result;
 return result;
}


//calculate vat on purchases
function v_purchases(amnt){
    amnt=parseFloat(amnt);

 nhil= amnt*.025;
 document.getElementById("vat_p_nhil").value=nhil.toFixed(2);
  document.getElementById("vat_p_getfunds").value=nhil.toFixed(2);
 nhil*=2;
 amnt+=nhil;

 result=amnt*.125;
 result=result.toFixed(2);
document.getElementById("vat_p_vat").value=result;
return result;
}






function calc_paye(){
    var in_amnt= document.getElementById("paye_in").value;
    PAYE(in_amnt);
    }


    function calc_vat(){

        var sales_v= document.getElementById("sales_in").value;
        sales_v=v_sales(sales_v);
        sales_v=parseFloat(sales_v);

        var purchase_v= document.getElementById("purchase_in").value;
        purchase_v=v_purchases(purchase_v);
        purchase_v=parseFloat(purchase_v);

        if(document.getElementById("flat_in").value!=""){
           var flat_p= document.getElementById("flat_in").value;
        flat_p=flat(flat_p);
        flat_p=parseFloat(flat_p);

        purchase_v+=flat_p;  
        console.log(purchase_v);
        }

var payable = sales_v - purchase_v;

document.getElementById("vat_payable").innerHTML=payable.toFixed(2);
document.getElementById("vat_s_out").value=sales_v;
document.getElementById("vat_p_out").value=purchase_v.toFixed(2);

       console.log("payable:" +payable.toFixed(2));
       console.log("sales:"+sale_v.toFixed(2));
       console.log("purchase:"+purchase_v);



        }