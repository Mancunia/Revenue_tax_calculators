var amnt;
var c_tax;
var tax;
var n_amnt;

//..............................
var nhil;
var vat;
var result;
var sale_v;
var flat_p;
var cst;
var payable

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

//calculate CST
function CST(amnt){

    if(amnt!=""){
        amnt=parseFloat(amnt);
    result=amnt*.09;
    // result=result.toFixed(2)

    }
    else{
        result=0;
    }
    
    document.getElementById("cst_out").value=result.toFixed(2);

return result;

}

//calculate Flat
function flat(amnt){

    if(amnt!=""){
    // result=result.toFixed(2)
 amnt=parseFloat(amnt);
     console.log("flat after:"+amnt);

    result=amnt*.03;
console.log("flat:"+result);

    }
    else{
        result=0;
    }

console.log("flat b4:"+amnt);
       
    document.getElementById("vat_p_flat").value=result.toFixed(2);
    
return result;

}

function nhil_getfund(amnt){
console.log("amnt b4"+amnt);
    amnt=parseFloat(amnt);
console.log("amnt after"+amnt);
    nhil= amnt*.025;

    nhil+=nhil;


  return nhil;
}



//calculate vat on sales
function v_sales(amnt){
if(amnt!=""){

    amnt=parseFloat(amnt);

 
//  console.log("the one:"+amnt);

 //calc CST
  cst=document.getElementById("cst_in").value;
//  
// console.log("that cst:"+cst);
if(cst==""){
    cst=0;
}
else{
    cst=parseFloat(cst);
}
amnt+=cst;

// console.log("after:"+amnt);
//get NHIL and getFund 
nhil=nhil_getfund(amnt);
 amnt+=nhil;
 
 amnt+=CST(cst);


 
     
    //  console.log("that one:"+amnt);
if(nhil==0){
    nhil=0;
}
else{
    nhil=nhil/2;
}
 
 

 document.getElementById("vat_s_nhil").value=nhil.toFixed(2);
 document.getElementById("vat_s_getfunds").value=nhil.toFixed(2);
 
 result=amnt*.125;
//  console.log("this one:"+result); 
}
else{
   result=0; 
}
   
document.getElementById("vat_s_vat").value=result.toFixed(2);
 return result;
}


//calculate vat on purchases
function v_purchases(amnt){
    if(amnt!=""){

        amnt=parseFloat(amnt);

 nhil=nhil_getfund(amnt)

 amnt+=nhil;

 nhil=nhil/2;
 
 document.getElementById("vat_p_nhil").value=nhil.toFixed(2);
 document.getElementById("vat_p_getfunds").value=nhil.toFixed(2);


 result=amnt*.125;
 console.log("result b4 flat:"+result);

 
 if(document.getElementById("flat_in").value==""){
     flat_p=0;
 }
 else{
 flat_p=document.getElementById("flat_in").value;
 console.log("flat b4 parse:"+flat_p);
     flat_p=parseFloat(flat_p);
console.log("flat aft parse:"+flat_p);
     flat_p=flat(flat_p);
}

 result+=flat_p;
 console.log("vat_P:"+result);
 
 

 result=result.toFixed(2);

    }
    else{

        result=0;
    }
    
document.getElementById("vat_p_vat").value=result;
return result;
}



//withholding VAT
function wht_VAT(amnt){
    amnt=parseFloat(amnt);

    nhil_fund= amnt*.05;
    amnt+=nhil_fund;
    console.log(amnt);

    vat=amnt*.125;
    var w_vat=amnt*.07;
     console.log(w_vat);

    tax=amnt+vat;
    tax-=w_vat;

    console.log(tax);

    return tax;

}

// reverse withholding VAT
function rvs_wVAT(amnt){

    amnt=parseFloat(amnt);

    //calc VAT
    vat=amnt/112.5;
     console.log(vat);
    vat*=12.5;
   console.log(vat);

    amnt-=vat;
    w_vat=amnt*.07;
    console.log(w_vat);
    
    nhil_fund=amnt/105;
    nhil_fund*=5;

    nhil_fund= nhil_fund/2;
    console.log(nhil_getfund);

}












function calc_paye(){
    var in_amnt= document.getElementById("paye_in").value;
    PAYE(in_amnt);
    }







    function calc_vat(){

        if(document.getElementById("sales_in").value!=""){
        var sales_v= document.getElementById("sales_in").value;
            // sales_v=parseFloat(sales_v);
                sales_v=v_sales(sales_v);
                sales_v=parseFloat(sales_v);

        }
        else{
            sales_v=v_sales(0);
        }
       
        if(document.getElementById("purchase_in").value!=""){

        var purchase_v= document.getElementById("purchase_in").value;
        // purchase_v=parseFloat(purchase_v);
        console.log("standard"+purchase_v);
        purchase_v=v_purchases(purchase_v);
        purchase_v=parseFloat(purchase_v);
        }
        else{
            purchase_v=v_purchases(0);
        }

        if (sales_v==0){
           payable =purchase_v;
        }
        else if (purchase_v==0){
             payable =sales_v;
        }
        else{
            payable = sales_v - purchase_v;
        }







document.getElementById("vat_payable").innerHTML=payable.toFixed(2);

if(sales_v>0){
    document.getElementById("vat_s_out").style.borderColor ="lightgreen";
document.getElementById("vat_s_out").style.borderWidth ="thick";
}else{
    document.getElementById("vat_s_out").style.borderColor ="";
document.getElementById("vat_s_out").style.borderWidth ="";
}
if(purchase_v>0){
    document.getElementById("vat_p_out").style.borderColor ="lightgreen";
document.getElementById("vat_p_out").style.borderWidth ="thick";
}

document.getElementById("vat_s_out").value=sales_v.toFixed(2);
document.getElementById("vat_p_out").value=purchase_v.toFixed(2);

       console.log("payable:" +payable.toFixed(2));
       console.log("sales:"+sales_v);
       console.log("purchase:"+purchase_v);



        }