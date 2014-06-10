"use strict";

// var board =

// //winning combinations:
// [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9],
// [1, 4, 7],
// [2, 5, 8],
// [3, 6, 9],
// [1, 5, 9],
// [3, 5, 7]]

$(document).ready(function() {

  var current_turn = "X"

  $("#board").delegate( "td", "click", function(e) {
    // console.log("TD clicked");
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.delegateTarget);
    // console.log(this);
    var square = $(e.target)
    var current = square.html();  

    function toggle_turn() {
      current_turn = (current_turn === 'X') ? 'O' : 'X'
    };

    if(current === "") {
      square.html(current_turn);
      toggle_turn()
    }
  })

function reset_board(){
  $("td").empty();
}


$("#reset").click(function(){
  reset_board()
});


});