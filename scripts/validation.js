/*code for jquery validation*/
$(function(){
	
	
//	$('input[type=text],input[type=radio],input[type=checkbox],select,textarea').valid()
});

$(function(){
	//validating form start
	jQuery.validator.addMethod("lettersonly", function(value, element) {
		return this.optional(element) || /^[A-Za-z.'"]+$|^$/.test(value);
	}, "This should not be in number")
	jQuery.validator.addMethod("email", function(value, element) {
		return this.optional(element) || /^[A-Za-z.0-9_]+@[a-zA-Z0-9.]+?\.[a-zA-Z.]{2,7}$/ .test(value);
	},"Please enter a valid email address.");
	
	$('.checkForm').validate({
		errorClass: 'has-error',
		errorElement:'span',
		validClass:'has-success',
		errorPlacement: function(error,element) {
			//error.remove();
			error.appendTo(element.parents('.input-group'))
		},
		//adding error class for elements
		highlight: function(element, errorClass, validClass) {
			$(element).parents('.input-group').addClass(errorClass).removeClass(validClass);		
		},
		//adding sucesse class to element
		unhighlight: function(element, errorClass, validClass) {
			if($(element).parents('.input-group').hasClass('has-error'))
			{		
				$(element).parents('.input-group').addClass(validClass).removeClass(errorClass);		
			}
		},
	});
	//validating form end
	
	//custom validation rules 
	
	//requried is for madatory fields 
	$('[required="required"]').each(function () {
			$(this).rules('add', {
					required: true,
					messages: {
						required: "Should filled proper",
					}
			});
	});
	
	$('[data-validate="text"]').each(function () {
			$(this).rules('add', {
					lettersonly:true,
			});
	});
	$('[data-validate="number"]').each(function () {
			$(this).rules('add', {
					number:true,
			});
	});
	$('[data-validate="contryCode"]').each(function () {
			$(this).rules('add', {
					number:true,
					minlength: 2,
					maxlength: 2,
					messages: {
						number:"Please enter Number only",
						minlenght: "Country code should be minmum 2 digit",
						maxlength :"Country code should not more that 2 digit"
					}
			});
	});
	$('[data-validate="mobileNo"]').each(function () {
			$(this).rules('add', {
					number:true,
					minlength: 10,
					maxlength : 10,
					messages: {
						number:"Please enter Number only",
						minlength: "Mobile should be minmum 10 digit",
						maxlength :"Mobile should not more that 10 digit"
					}
			});
	});
	
	$('[data-validate="select"]').each(function () {
			$(this).rules('add', {
					required:true
			});
	});
	$('[data-validate="email"]').each(function () {
			$(this).rules('add', {
					email:true,
					messages: {
						required: "Please enter valid email id"
					}
			});
			
	});

});