var words = ["Synergy","Disruptive","Omnichannel","Utilisation","Content is king","Storyscaping","SoLoMo","Data, yeh?","Advertainment","Ideation","Quality, not quantity", "Viral"];

$(document).ready(function(){
	$("button").click( function() {
		var randomWord = words[Math.floor(Math.random() * words.length)];
		console.log(randomWord);
		$("#change").text('"'+randomWord+'"');
	});
});