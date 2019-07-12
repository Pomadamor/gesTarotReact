export  function Verifier_Numero_Telephone(num_tel)
{
	var regex = new RegExp(/^(01|02|03|04|05|06|08)[0-9]{8}/gi);	
	return (regex.test(num_tel))
}

export function checkMail(mail)
{
	var regex = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
	return(regex.test(mail));
}

