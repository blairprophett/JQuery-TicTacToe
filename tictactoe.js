"use strict";

$(document).ready(function() {

  function toggle_turn() {
      current_turn = (current_turn === 'X') ? 'O' : 'X'
    };

  function reset_board(){
    $("td").empty();
  };

  var current_turn = "X";

  $("#board").delegate( "td", "click", function(e) {
   
    var square = $(e.target);
    var current = square.html();
    var arr_x = [];
    var arr_y = [];

    if(current === "") {
      square.html(current_turn);
      toggle_turn()
      if (current === "X"){
        arr_x.push(square)
      }
      else 
        arr_y.push(square)
      }

    var winner = [ //winning combinations
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
    ["one", "four", "seven"],
    ["two", "five", "eight"],
    ["three", "six", "nine"],
    ["one", "five", "nine"],
    ["three", "five", "seven"]
    ];

    for (var i = 0; i < winner.length; i++) {
      if(arr_x === winner[i]){
        alert("winner!");
      }
      else(arr_y === winner[i])
        alert("winner!");
      }
    })

  $("#reset").click(function(){
    reset_board()
  });
});