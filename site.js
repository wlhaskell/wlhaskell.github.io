/*function setSelection(){
	$('#playerChoiceImage').attr("src",$(this).attr("src"));
	$('#playerChoiceId').html($(this).attr("id"))
}*/

var playerChoice;
var playerScore = 0;
var oppScore = 0;

$(".choice").hover(function(){
	playerChoice = $(this).attr("id");
	$("#playerChoiceImage").attr("src",$(this).attr("src"));
	$("#playerChoiceId").html(playerChoice);
},function(){
	$("#message").html("Ready to Play");
	$("#player-panel").attr("class","panel panel-info");
	$("#opp-panel").attr("class", "panel panel-info");
	$("#oppChoiceId").html("None");
	$("#oppChoiceImage").attr("src","assets/images/data.jpg");
});

$(".choice").click(function(){
	
	var oppChoice;
	var win = false;
	var tie = false;

	switch( Math.floor(Math.random()*5) ){
		case 0: 
			oppChoice = "rock"; 
			if (playerChoice == "paper" || playerChoice == "spock"){
				win = true;
			} 
			break;
		case 1: oppChoice = "paper";
			if (playerChoice == "scissor" || playerChoice == "lizzard"){
				win = true;
			}
			break;
		case 2: oppChoice = "scissor";
			if (playerChoice == "rock" || playerChoice == "spock"){
				win = true;
			} 
			break;
		case 3: oppChoice = "lizzard";
			if (playerChoice == "scissor" || playerChoice == "rock"){
				win = true;
			}
			break;
		case 4: oppChoice = "spock"; 
			if (playerChoice == "paper" || playerChoice == "lizzard"){
				win = true;
			}
			break;
		default: oppChoice ="Default";
	}

	if (playerChoice == oppChoice){
		tie = true;
	}
	
	if (win){
		$("#message").html("YOU WIN!");
		$("#player-panel").attr("class","panel panel-success")
		$("#opp-panel").attr("class", "panel panel-danger")
		playerScore++;
		$("#playerScore").html("Score:"+playerScore);
	} else if (tie){
		$("#message").html("Draw");
		$("#player-panel").attr("class","panel panel-warning")
		$("#opp-panel").attr("class", "panel panel-warning")
	} else {
		$("#message").html("YOU LOOSE!");
		$("#player-panel").attr("class","panel panel-danger")
		$("#opp-panel").attr("class", "panel panel-success")
		oppScore++;
		$("#oppScore").html("Score:"+oppScore);
	}

	$("#oppChoiceId").html(oppChoice);
	$("#oppChoiceImage").attr("src",$("#"+oppChoice).attr("src"));

});
