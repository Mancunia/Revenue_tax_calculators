var amnt;
var c_tax;
var tax;
var n_amnt;
var arg;

//..............................
var nhil;
var vat;
// var result;
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
function CST(amnt,arg){
    let result;
     amnt=parseFloat(amnt);
    if(amnt!=""){
       if(arg==1){
            result=amnt*.09;
       }
       else{
           result=(amnt/109)*.09;
       }
   
    // result=result.toFixed(2)

    }
    else{
        result=0;
    }
    
    document.getElementById("cst_out").value=result.toFixed(2);
 document.getElementById("cst_payable").innerHTML="&#8373;"+result.toFixed(2);
return result;

}

//calculate Flat
function flat(amnt){
let result
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

function nhil_getfund(amnt,arg){
    
    amnt=parseFloat(amnt);
    if(arg==1){
nhil= amnt*.025; 
nhil+=nhil;

    }
    else{
    nhil=(amnt/105)*5;
    nhil/=2;

    }


   


  return nhil;
}

//Value Added Tax
function VAT(amnt,arg){
     amnt=parseFloat(amnt);
     if(arg==1){
         vat=amnt*.125;
     }
     else{
         vat=(amnt/112.5)*12.5;
     }

     return vat;
}


//calculate vat on sales
function v_sales(amnt,arg){
let result

    
if(arg==1){
    if(amnt==""){
        amnt=0;
         
    }
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
nhil=nhil_getfund(amnt,1);
 amnt+=nhil;
 
 amnt+=CST(cst,1);


 
     
    //  console.log("that one:"+amnt);
if(nhil==0){
    nhil=0;
}
else{
    nhil=nhil/2;
}
 
 

 document.getElementById("vat_s_nhil").value=nhil.toFixed(2);
 document.getElementById("vat_s_getfunds").value=nhil.toFixed(2);
 
 result=VAT(amnt,1);
 console.log("standard:"+result);
//  alert("whats up standard");
}

else{
    

//    alert("whats up reverse");
    if(amnt==""){
        amnt=0;
         
    }
    
    amnt=parseFloat(amnt);
    console.log("amnt:"+amnt);
  //reverse
  vat=VAT(amnt,2);
  vat=parseFloat(vat);

  console.log("vat:"+vat);
 
 result=vat;
  console.log("result b4 cst:"+result);

  amnt-=vat;
   nhil=nhil_getfund(amnt,2);
   nhil=parseFloat(nhil);

   cst=document.getElementById("cst_in").value;
   cst=parseFloat(cst);
   console.log("CST"+cst);

   if(cst>0){
        console.log("result b4"+result);

       var c_vat = VAT(cst,0);
       console.log("vat b4"+c_vat);

       console.log("result after"+result);

      
       cst-=c_vat;
       n_amnt= (cst/114)*100;

       cst-=n_amnt;

       var n_cst= (cst/14)*9;
    var n_nhil=cst-n_cst;
       n_nhil/=2;

       console.log("nhil and GETfund:"+n_nhil);
        console.log("cst:"+n_cst);
   
  nhil+=n_nhil;

        document.getElementById("cst_out").value=n_cst.toFixed(2);
   
   document.getElementById("cst_payable").innerHTML="&#8373;"+n_cst.toFixed(2);

//  
   }
   else{
       cst=0;
   }
   result+=c_vat;

   document.getElementById("vat_s_nhil").value=nhil.toFixed(2);
   document.getElementById("vat_s_getfunds").value=nhil.toFixed(2);


  
  console.log(result);
 
  
}
result=parseFloat(result);
 console.log(result);
 
document.getElementById("vat_s_vat").value=result.toFixed(2);
 return result;
//  console.log("this one:"+result); 
}
    



//calculate vat on purchases
function v_purchases(amnt,arg){
    let result;
    if(amnt!=""){

        amnt=parseFloat(amnt);
if(arg!=1){

    if(document.getElementById("flat_in").value==""){
        flat_p=0;
    }
    else{
    flat_p=document.getElementById("flat_in").value;
    // console.log("flat b4 parse:"+flat_p);
        flat_p=parseFloat(flat_p);
   console.log("flat aft parse:"+flat_p);
        flat_p=flat(flat_p);
   }
   amnt-=flat_p;
   
vat=VAT(amnt,2);
 amnt-=vat;

 nhil= nhil_getfund(amnt,2);

result=parseFloat(vat);

}
else{

 nhil=nhil_getfund(amnt,1)
console.log(nhil);
 amnt+=nhil;

 nhil=nhil/2;
 
 

 result=VAT(amnt,1);
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

    document.getElementById("vat_p_nhil").value=nhil.toFixed(2);
 document.getElementById("vat_p_getfunds").value=nhil.toFixed(2);


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

    nhil_fund= nhil_getfund(amnt,1);
    amnt+=nhil_fund;
    // console.log(amnt);

    vat=amnt*.125;
    var w_vat=amnt*.07;
    //  console.log(w_vat);

    tax=amnt+vat;
    tax-=w_vat;
    nhil_fund/=2;

    // console.log(tax);

    document.getElementById("wh_vat_out").value=vat.toFixed(2);
if(w_vat>0){
document.getElementById("wh_amnt_out").style.borderColor ="lightgreen";
            document.getElementById("wh_amnt_out").style.borderWidth ="thick";
}
else{
document.getElementById("wh_amnt_out").style.borderColor ="";
            document.getElementById("wh_amnt_out").style.borderWidth ="";
}


     document.getElementById("wh_amnt_out").value=w_vat.toFixed(2);
    document.getElementById("wh_nhil_out").value=nhil_fund.toFixed(2);
    document.getElementById("wh_getF_out").value=nhil_fund.toFixed(2);

    document.getElementById("wh_taxable_out").value=amnt.toFixed(2);

    document.getElementById("payable_out").value=tax.toFixed(2);
    

}

// reverse withholding VAT
function rvs_wVAT(amnt){

    amnt=parseFloat(amnt);

    //calc VAT
    vat=amnt/112.5;
    //  console.log(vat.toFixed(2));
    vat*=12.5;
//    console.log("The VAT ankasa:"+vat.toFixed(2));


    amnt-=vat;
    w_vat=amnt*.07;
    // console.log(w_vat.toFixed(2));
   

    nhil_fund= nhil_getfund(amnt,0);
    // console.log(nhil_fund.toFixed(2));
    var payable=(amnt+vat)-w_vat;
    
    document.getElementById("wh_vat_out").value=vat.toFixed(2);
if(w_vat>0){
document.getElementById("wh_amnt_out").style.borderColor ="lightgreen";
            document.getElementById("wh_amnt_out").style.borderWidth ="thick";
}
else{
document.getElementById("wh_amnt_out").style.borderColor ="";
            document.getElementById("wh_amnt_out").style.borderWidth ="";
}
     document.getElementById("wh_amnt_out").value=w_vat.toFixed(2);
    document.getElementById("wh_nhil_out").value=nhil_fund.toFixed(2);
    document.getElementById("wh_getF_out").value=nhil_fund.toFixed(2);

document.getElementById("wh_taxable_out").value=amnt.toFixed(2);
   

    document.getElementById("payable_out").value=payable.toFixed(2);

}


function calc_paye(){
    var in_amnt= document.getElementById("paye_in").value;
    if(amnt==""|| amnt==0){
        document.getElementById("paye_in").style.borderColor ="red";
        document.getElementById("paye_in").style.borderWidth ="thick";
    }
    else{
        
        document.getElementById("paye_in").style.borderColor ="";
        document.getElementById("paye_in").style.borderWidth ="";
        PAYE(in_amnt);
    }
    
    }







    function calc_vat(){
var sales_v= document.getElementById("sales_in").value;
      var purchase_v= document.getElementById("purchase_in").value;

        if(document.getElementById("sales_inclusive").checked == true&&document.getElementById("purchase_inclusive").checked == true){
            sales_v=v_sales(sales_v,2);
            purchase_v=v_purchases(purchase_v,2);

        }

        else if(document.getElementById("sales_inclusive").checked == true){
//sales inclusive
        sales_v=v_sales(sales_v,2);

        purchase_v=v_purchases(purchase_v,1);
        purchase_v=parseFloat(purchase_v);

        }
        else if(document.getElementById("purchase_inclusive").checked == true){
//purchase inclusive
            purchase_v=v_purchases(purchase_v,2);

             sales_v=v_sales(sales_v,1);
             sales_v=parseFloat(sales_v);

        }

        else{
//Exclusive
        

        if(document.getElementById("sales_in").value!=""){
        // var sales_v= document.getElementById("sales_in").value;
            // sales_v=parseFloat(sales_v);
                sales_v=v_sales(sales_v,1);
                sales_v=parseFloat(sales_v);

        }
        else{
            sales_v=v_sales(0,1);
        }
       
        if(document.getElementById("purchase_in").value!=""){

  
        // purchase_v=parseFloat(purchase_v);
        console.log("standard"+purchase_v);
        purchase_v=v_purchases(purchase_v,1);
        purchase_v=parseFloat(purchase_v);
        }
        else{
            purchase_v=v_purchases(0,1);
        }

        
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






document.getElementById("vat_payable").innerHTML="&#8373;"+payable.toFixed(2);

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

    //    console.log("payable:" +payable.toFixed(2));
    //    console.log("sales:"+sales_v);
    //    console.log("purchase:"+purchase_v);



        }


    function calc_wh(){
        amnt=document.getElementById("w_h").value;
        if(amnt==""|| amnt==0){
            document.getElementById("w_h").style.borderColor ="red";
            document.getElementById("w_h").style.borderWidth ="thick";
        }
        else{
            document.getElementById("w_h").style.borderColor ="";
            document.getElementById("w_h").style.borderWidth ="";
            if(document.getElementById("rvs_wh").checked == true){
                rvs_wVAT(amnt);

            }
            else{
                wht_VAT(amnt);
            }
        }

    }  