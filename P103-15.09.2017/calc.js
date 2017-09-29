var eded1=document.getElementById("myInput1");
var eded2=document.getElementById("myInput2");

//emeliyat : topla ; cixma ;*; /
function hesablama(emeliyat) {
	
	if(eded1.value=='' && eded2.value==''){
		alert('Bos buraxma');
		
		return;
	}

	

	if(isNaN(eded1.value)==false && isNaN(eded2.value)==false){
		var netice = 0;
	
		switch(emeliyat){
			case 'topla':
				netice=parseInt(eded1.value) + parseInt(eded2.value);
				break;

			case 'cixma':
				netice=parseInt(eded1.value) - parseInt(eded2.value);
				break;

			case '*':
				netice=parseInt(eded1.value) * parseInt(eded2.value);
				break;

			case '/':
				netice=parseInt(eded1.value) / parseInt(eded2.value);
				break;

			default:
				netice=0;
				break;
		}

		//alert(netice);
		
		document.getElementById('result').innerText=netice;

	}else{
		alert("Reqem daxil et : ");
	}

}


function toplama() {
	if(isNaN(eded1.value)==false && isNaN(eded2.value)==false){
		var netice = parseInt(eded1.value) + parseInt(eded2.value);
		console.log(netice);

	}else{
		alert("Reqem daxil et : ");
	}

}

function cixma() {


	if(isNaN(eded1.value)==false && isNaN(eded2.value)==false){
		var netice = parseInt(eded1.value) - parseInt(eded2.value);
		console.log(netice);

	}else{
		alert("Reqem daxil et : ");
	}
}

function vurma() {
		if(isNaN(eded1.value)==false && isNaN(eded2.value)==false){
		var netice = parseInt(eded1.value) * parseInt(eded2.value);
		console.log(netice);

	}else{
		alert("Reqem daxil et : ");
	}
}

function bolme() {
		if(isNaN(eded1.value)==false && isNaN(eded2.value)==false){
		var netice = parseInt(eded1.value) / parseInt(eded2.value);
		console.log(netice);

	}else{
		alert("Reqem daxil et : ");
	}
}