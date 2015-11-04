//Create GLOBAL variable below here on line 2
var global_result;

$(document).ready(function(){
	$('button').click(function(){
		console.log('click initiated');
		$.ajax({
			dataType: 'json',
			url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
			success: function(result) {global_result = result;
				global_result = result;
				console.log("result ", global_result);
				var firstMovie = global_result['feed']['entry'][0]['im:image'][2];
				var films = global_result['feed']['entry'];
				for(i = 0; i < films.length; i++)

				console.log(" movie: ", firstMovie);
				console.log('AJAX Success function called, with the following result:', result);


			}
		});
		console.log('End of click function');
	});
});

