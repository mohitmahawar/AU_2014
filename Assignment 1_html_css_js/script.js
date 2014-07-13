	function disableField(id) {
    document.getElementById("field"+id).disabled = true; 	
  }
function convert(id) {
		var f1,f2;
		f1=document.getElementById("field1");
		f2=document.getElementById("field2");
		form=document.getElementById("myform");
		if (id==1) {
			if(!f1.disabled) {
				if(!f1.validity.valid) {
					alert('Please Enter a valid number');
					form.reset();
				}
				else {
					f2.value=f1.value*0.6214;
				}
				f2.disabled=false;
				return;
			} 
			if (!f2.disabled) {
				if(!f2.validity.valid) {
					alert('Please Enter a valid number');
					form.reset();
				}
				else {
					f1.value=f2.value /0.6214;
				}
				f1.disabled=false;
				return;
			}
		}
		else if (id==2) {
			if(!f1.disabled) {
				if(!f1.validity.valid) {
					alert('Please Enter a valid number');
					form.reset();
				}
				else {
					f2.value=f1.value*2.2046;
				}
				f2.disabled=false;
				return;
			} 
			if (!f2.disabled) {
				if(!f2.validity.valid) {
					alert('Please Enter a valid number');
					form.reset();
				}
				else {
					f1.value=f2.value /2.2046;
				}
				f1.disabled=false;
				return;
			}
		}
		else {
			if(!f1.disabled) {
				if(!f1.validity.valid) {
					alert('Please Enter a valid number');
					form.reset();
				}
				else {
					f2.value=((f1.value*9)/5)+32;
				}
				f2.disabled=false;
				return;
			} 
			if (!f2.disabled) {
				if(!f2.validity.valid) {
					alert('Please Enter a valid number');
					form.reset();
				}
				else {
					f1.value=((f2.value -32)*5)/9;
				}
				f1.disabled=false;
				return;
			}		
		}		
}
function changeContent(frameno)
		{
		  var text1 = document.getElementById("text1");
		  var text2 = document.getElementById("text2");
		  document.getElementById("myform").reset();
		  var button= document.getElementById("convertButton");
		  if (frameno==1){
					text1.innerHTML="Distance in KM: ";
					text2.innerHTML="Distance in Miles: ";
					button.setAttribute("onclick","convert(1)");
			}
			else if(frameno==2){
					text1.innerHTML="Weight in KG: ";
					text2.innerHTML="Weight in Pound: ";
					button.setAttribute("onclick","convert(2)");
			}
			else {
					text1.innerHTML="Temperature in Fahrenheit: ";
					text2.innerHTML="Temperature in Celsius: ";
					button.setAttribute("onclick","convert(3)");
			}
		}