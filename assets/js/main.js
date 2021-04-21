$(document).ready(function(){
  var featuresBtn = $('.features');
  var plansBtn = $('.plans');
  var aboutBtn = $('.about_us');
  var helpBtn = $('.help');

  var featuresInfo = $('.features_info');

  var displayBlock = $('.display_block');


/*   featuresBtn.on('mouseenter', function(){
    console.log("hover")
  })
 */
  featuresBtn.on('mouseenter', function(){
    displayHover(featuresInfo)}
    );

  featuresBtn.on('click', function(){
    displayClick(featuresInfo);
  })

  function displayHover(element){
    element.removeClass("display_none");
    element.addClass("display_block");
  }

  function displayClick(element){
    if(element.hasClass("display_block")){
      element.removeClass("display_block");
      element.addClass("display_none")
    }else{
      element.removeClass("display_none");
      element.addClass("display_block")
    }
  }

});