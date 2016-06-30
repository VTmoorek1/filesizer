$(document).ready(function () {
	$("#submitBTN").css("visibility","hidden");
	
	$("input").change(function () {
		var fileName = $(this).val();
		
		if (fileName !== "No file selected.")
		{
			$("#submitBTN").css("visibility","visible");
		}
		else
		{
			$("#submitBTN").css("visibility","hidden");
		}
	});
});