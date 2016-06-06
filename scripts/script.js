$(document).ready(
	$(".beer-form").submit(function(event){
			event.preventDefault();
			quantity = $(".grain", this).val(); 
			sugar = (quantity * 5);
			$(".sugar", this).html;
			console.log(sugar);
		})
	);