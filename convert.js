$('document').ready(function() {	
	$("#currency-convert-form").validate({
		rules: {
			amount: {
				required: true,
			},
		},
		messages: {
			amount:{
			  required: ""
			 },			
		},
		submitHandler: currencyConvertFormSubmit	
	});	
	function currencyConvertFormSubmit() {		
		var data = $("#currency-convert-form").serialize();				
		$.ajax({				
			type : 'POST',
			url  : 'convert_currency.php',
			dataType:'json',
			data : data,
			beforeSend: function(){					
			},
			success : function(response){				
			}
		});
		return false;
	}   
});