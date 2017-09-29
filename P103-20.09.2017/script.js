function hesablama(a){
    try{
         console.log('step 1')
        if(a===undefined){
             throw new Error('deyishen daxil edin');
        
        // return;
        }
        console.log(a*5);   
         console.log('step 2')
    }
    catch(seid){
       // console.log(seid);
    }
    finally{
        console.log('finish')
    }
 
}


hesablama(9);




// //console.log(myInput);

// var myDiv=document.querySelectorAll('.container p');

// console.log(myDiv)
/************** */
// var text=document.getElementById("myinput");
// console.log(text.value);

// var btnSubmit=document.getElementById("btnSubmit");

// btnSubmit.addEventListener('click',function(){
//     console.log(text.value);
// });

// var str="salam";
// console.log(str.split("").reverse());

