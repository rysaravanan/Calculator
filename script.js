$(document).ready(function() {
 var arr=[];
  $("#0").click(function(){
    if(arr.length <= 9) {
    arr.push('0');}
    $('#sr').html(arr);
  });
   $("#1").click(function(){
    if(arr.length <= 9) {
    arr.push('1');}
    $('#sr').html(arr);
  });
   $("#2").click(function(){
    if(arr.length <= 9) {
    arr.push('2');}
    $('#sr').html(arr);
  });
   $("#3").click(function(){
    if(arr.length <= 9) {
    arr.push('3');}
    $('#sr').html(arr);
  });
   $("#4").click(function(){
    if(arr.length <= 9) {
    arr.push('4');}
    $('#sr').html(arr);
  });
   $("#5").click(function(){
    if(arr.length <= 9) {
    arr.push('5');}
    $('#sr').html(arr);
  });
   $("#6").click(function(){
    if(arr.length <= 9) {
    arr.push('6');}
    $('#sr').html(arr);
  });
   $("#7").click(function(){
    if(arr.length <= 9) {
    arr.push('7');}
    $('#sr').html(arr);
  });
   $("#8").click(function(){
    if(arr.length <= 9) {
    arr.push('8');}
    $('#sr').html(arr);
  }); $("#9").click(function(){
    if(arr.length <= 9) {
    arr.push('9');}
    $('#sr').html(arr);
  });
   $("#dot").click(function(){
    arr.push('.');
    $('#sr').html(arr);
  });
  
  
   $("#ac").click(function(){
   $('#sr').html('0');
   arr=[]; 
  });
   $('#ce').click(function(){
    arr.splice(arr.length - 1,1);
    if(arr.length<1) {
      $('#sr').html('0');
    } else {
      $('#sr').html(arr);
    }
  });
   $("#mod").click(function(){
    if(arr.length <= 9) {
    arr.push('%');}
    $('#sr').html(arr);
  });
   $("#mul").click(function(){
    if(arr.length <= 9) {
    arr.push('*');}
    $('#sr').html(arr);
  });
   $("#div").click(function(){
    if(arr.length <= 9) {
    arr.push('/');}
    $('#sr').html(arr);
  });
   $("#add").click(function(){
    if(arr.length <= 9) {
    arr.push('+');}
    $('#sr').html(arr);
  });
   $("#sub").click(function(){
    if(arr.length <= 9) {
    arr.push('-');}
    $('#sr').html(arr);
  });
  
  $('#eql').click(function(){
    $('#sr').html(eval(arr.join("")));
    var a = $('#sr').text();
    arr = [];
    arr.push(a);
  });
  

  });