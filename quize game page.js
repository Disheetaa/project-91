player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_scores = 0;
player2_scores = 0;

document.getElementById("player_1_name").innerHTML = player1_name + ":";
document.getElementById("player_2_name").innerHTML = player2_name + ":";

document.getElementById("player_1_score").innerHTML = player1_scores;
document.getElementById("player_2_score").innerHTML = player2_scores;

document.getElementById("player question").innerHTML = "Question turn -" + player1_name;
document.getElementById("player answer").innerHTML= "Answer turn -" + player2_name;

function Send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_word = "<h4 id='display_word'> Q."+number1+"X"+number2+"</h4>";
    input_box = "<br>Answer:<input type='text' id= 'input_check_box'> ";
    check_box = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_box;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}




