function checkBill(){
	let units = Number(document.getElementById('txt').value);
	let x;
	 if(units== " ")
	{
		alert("please enter your units")
	}
	else if(units<0)
	{

		alert("Invalid Number!")
	}
	else if(units>0 && units<=30)
	{
		x=units*7.85+480;
	}
	else if(units>30 && units<=60)
	{
		x=30*7.85+(units-30)*7.85+480;
	}
	else if(units>60 && units<=90)
	{
		x=30*7.85+30*7.85+(units-60)*10+480;
	}
	else if(units>90 && units<=120)
	{
		x=30*7.85+30*7.85+30*10+(units-90)*27.75+480;
	}
	else
	{
		x=30*7.85+30*7.85+30*10+30*27.75+(units-120)*32+480;
	}
	
	let txt = document.getElementById('Bill');
	txt.innerHTML = "Your Bill amount is :"+x;
	
 }


