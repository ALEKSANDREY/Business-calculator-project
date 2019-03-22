"use strict";

console.log("hello");

parseFloat("String")

$(document).ready( function () {

  $("#result").toggleClass("result");

    //Addition
    $("#add").click(function() {
        var a = parseFloat($("#1").val());
        var b = parseFloat($("#2").val());
        var c = parseFloat($("#3").val());
        var d = parseFloat($("#4").val());
        var f = parseFloat($("#5").val());
        var g = parseFloat($("#6").val());
        var h = parseFloat($("#7").val());
        var i = parseFloat($("#8").val());
        var j = parseFloat($("#9").val());
        var k = parseFloat($("#10").val());
        var l = parseFloat($("#11").val());
        var m = parseFloat($("#12").val());
        var n = parseFloat($("#13").val());
        var total

        $("#result").val(a +b+c  +c+d  +f+g  +h+i  +j+k  +l+m  +n);
      });
});
$("total").html("this is test");
