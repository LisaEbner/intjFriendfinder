$(document).ready(function(){
  var result = 0;
  var type = ["INTJ", "INTP"]
  $('#submitSurvey').on("click", function(){
    console.log("CLICKED!")
    $('.answer').each((i,a)=>{
      console.log($(a).children("option:selected").val())
      result += parseInt($(a).children("option:selected").val())
    })
    //
    console.log("YOUR Personality type is ", result)

    var typeIndex = Math.floor((result-63)/15)
    console.log("Your type is ", type[typeIndex])
  });
  $('.qi7').on("click", function(){
    console.log($(this).attr('name'), $(this).attr('value'))
    var q = $(this).attr('name');
    var val = $(this).attr('value')
  })
})