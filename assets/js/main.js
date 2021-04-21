$(document).ready(function(){
  var featuresBtn = $('.features');
  var plansBtn = $('.plans');
  var aboutBtn = $('.about_us');
  var helpBtn = $('.help');

  var featuresInfo = $('.features_info');
  var plansInfo = $('.plans_info');
  var aboutInfo = $('.about_us_info');
  var helpInfo= $('.help_info');


  var displayBlock = $('.display_block');


/*   featuresBtn.on('mouseenter', function(){
    console.log("hover")
  })
 */
  featuresBtn.on('mouseenter', function(){
    displayHover(featuresInfo, plansInfo, aboutInfo, helpInfo);
  });

  featuresBtn.on('click', function(){
    displayClick(featuresInfo);
  });

  plansBtn.on('mouseenter', function(){
    displayHover(plansInfo, featuresInfo, aboutInfo,helpInfo);
  });

  
  plansBtn.on('click', function(){
    displayClick(plansInfo);
  });

  aboutBtn.on('mouseenter', function(){
    displayHover(aboutInfo, plansInfo, featuresInfo, helpInfo);
  });

  aboutBtn.on('click', function(){
    displayClick(aboutInfo);
  });

  helpBtn.on('mouseenter', function(){
    displayHover(helpInfo, plansInfo, featuresInfo, aboutInfo);
  });

  helpBtn.on('click', function(){
    displayClick(helpInfo);
  });


  function displayHover(element, inactive1, inactive2, inactive3){
    element.addClass("display_block");
    inactive1.removeClass("display_block");
    inactive2.removeClass("display_block");
    inactive3.removeClass("display_block");
  }

  function displayClick(element){
    if(element.hasClass("display_block")){
      element.removeClass("display_block");
    }else{
      element.addClass("display_block");
    }
  }

});