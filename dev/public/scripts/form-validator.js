YUI().use("node", "event", "event-valuechange", function(Y) {
	var	formContainer = Y.one(".contact-section"),
		form = Y.one("body"),
		contactUs = Y.one("#contact-us");		
	// Form + Validation
    //On submit validate form error
	function validateForm(){	
	
		var	firstName = form.one('#first-name input').get('value'),
		    lastName = form.one('#last-name input').get('value'),
			bizAddress = form.one('#address input').get('value'),
			bizCity= form.one('#city input').get('value'),
			bizState = form.one('#state input').get('value'),	
			bizZipCode = form.one('#zipcode input').get('value'),
			phone = form.one('#phone input').get('value'),
			myComments = form.one('#comments textarea').get('value'),
			email = form.one('#email input').get('value'),
			atpos = email.indexOf("@"),
			dotpos = email.lastIndexOf("."),
			questionA = form.one('#questionA select').get('value'),
			questionB = form.one('#questionB select').get('value'),
			questionC = form.one('#questionC select').get('value'),
			questionD = form.one('#questionD select').get('value'),
			questionE = form.one('#questionE select').get('value'),
			questionF = form.one('#questionF select').get('value');

		if(firstName.length < 2){
			Y.all("#first-name").addClass("invalid");								
		}else{
			Y.all("#first-name").replaceClass("invalid", "valid");
		}

		if(lastName.length < 2){
			Y.all("#last-name").addClass("invalid");							
		}else{
			Y.all("#last-name").replaceClass("invalid", "valid");
		}

		if(bizAddress.length < 2){
			Y.all("#address").addClass("invalid");							
		}else{
			Y.all("#address").replaceClass("invalid", "valid");
		}

		if(bizCity.length < 2){
			Y.all("#city").addClass("invalid");							
		}else{
			Y.all("#city").replaceClass("invalid", "valid");
		}
		
		if(bizState.length < 2){
			Y.all("#state").addClass("invalid");							
		}else{
			Y.all("#state").replaceClass("invalid", "valid");
		}

		if(bizZipCode.length < 5){
			Y.all("#zipcode").addClass("invalid");							
		}else{
			Y.all("#zipcode").replaceClass("invalid", "valid");
		}

		if(phone.length < 10){
			Y.all("#phone").addClass("invalid");							
		}else{
			Y.all("#phone").replaceClass("invalid", "valid");
		}

		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length){
			Y.all("#email").addClass("invalid");
		}else{
			Y.all("#email").replaceClass("invalid", "valid");
		}

		if(myComments == 'Comments' || myComments.length < 2 ){
			Y.all("#comments").addClass("invalid");	
		}else{
			Y.all("#comments").replaceClass("invalid", "valid");
		} 	

		if(questionA === "0"){
			Y.all("#questionA").addClass("invalid");							
		}else{
			Y.all("#questionA").replaceClass("invalid", "valid");
		}
		
		if(questionB === "0"){
			Y.all("#questionB").addClass("invalid");							
		}else{
			Y.all("#questionB").replaceClass("invalid", "valid");
		}
		
		if(questionC === "0"){
			Y.all("#questionC").addClass("invalid");							
		}else{
			Y.all("#questionC").replaceClass("invalid", "valid");
		}
		
		if(questionD === "0"){
			Y.all("#questionD").addClass("invalid");							
		}else{
			Y.all("#questionD").replaceClass("invalid", "valid");
		}
		
		if(questionE === "0"){
			Y.all("#questionE").addClass("invalid");							
		}else{
			Y.all("#questionE").replaceClass("invalid", "valid");
		}
		
		if(questionF === "0"){
			Y.all("#questionF").addClass("invalid");							
		}else{
			Y.all("#questionF").replaceClass("invalid", "valid");
		}
			
	}				

	//Process form submit
	form.delegate('click',function(e){
        e.preventDefault();
        
        validateForm();

       	var validData = formContainer.all(".validate").hasClass("valid").join("").indexOf("false")===-1;
		
		if (validData === true){
			form.one('.contact-form').submit();
        }else{
        	e.halt();
        }
	}, 'input[type=submit]'); 
});