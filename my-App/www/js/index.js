 (function($) {
  "use strict";
  
  var gApoint = 90.0;
  var ghomework,ghomework1,glabs,glabs1,gproject,gproject1,gmidterm,gmidterm1,gpresentation,gpresentation1,gfinal,gfinal1;
  var glowA,glowB,glowC,glowD,glowE,glowF, ghighA, ghighB, ghighC, ghighD, ghighE, ghighF;
  
  var computeGrade = function()
  {
  console.log(ghomework1);
  var currentGrade = "NA";
  try {
  var homework2 = eval(parseFloat( $('#homework2').val() )*ghomework1/ghomework);
  var labs2 = eval(parseFloat( $('#labs2').val() )*glabs1/glabs);
  var project2 = eval(parseFloat( $('#project2').val() )*gproject1/gproject);
  var presentation2 = eval(parseFloat( $('#presentation2').val() )*gpresentation1/gpresentation);
  var final2 = eval(parseFloat( $('#final2').val() )*gfinal1/gfinal);
  var midterm2 = eval(parseFloat( $('#midterm2').val() )*gmidterm1/gmidterm);
  } catch (ex)
  {
  alert('Points must be a decimal value');
  }
  
  var txt2= eval(homework2+labs2+presentation2+project2+final2+midterm2);
  
  switch(true)
  {
  
  case(txt2>=glowA):
  currentGrade = "A";
  break;
  case(txt2>=glowB && txt2 <= ghighB):
  currentGrade = "B";
  break;
  case(txt2>=glowC && txt2 <= ghighC):
  currentGrade = "C";
  break;
  case(txt2>=glowD && txt2 <= ghighD):
  currentGrade = "D";
  break;
  case(txt2>=glowE && txt2 <= ghighE):
  currentGrade = "E";
  break;
  case(txt2>=glowF && txt2 <= ghighF):
  currentGrade = "F";
  break;
  
  }
  
  $('#finalgrade').text(currentGrade);
  };
  
  
  var cancelSettings = function()
  {
  localStorage.clear();
  };
  
  
  var saveMaxSettings = function()
  {
  try {
  var homework = parseFloat( $('#homework').val() );
  var labs = parseFloat( $('#labs').val() );
  var project = parseFloat( $('#project').val() );
  var presentation = parseFloat( $('#presentation').val() );
  var final = parseFloat( $('#final').val() );
  var midterm = parseFloat( $('#midterm').val() );
  
  localStorage.setItem('homework', homework);
  localStorage.setItem('labs', labs);
  localStorage.setItem('project', project);
  localStorage.setItem('presentation', presentation);
  localStorage.setItem('final', final);
  localStorage.setItem('midterm', midterm);
  ghomework=homework;
  glabs=labs;
  gproject=project;
  gpresentation=presentation;
  gfinal=final;
  gmidterm=midterm;
  
  console.log("value is" + homework);
  window.history.back();
  } catch (ex)
  {
  alert('Points must be a decimal value');
  }
  };
  var saveScaleSettings = function()
  {
  try {
  var homework1 = parseFloat( $('#homework1').val() );
  var labs1 = parseFloat( $('#labs1').val() );
  var project1 = parseFloat( $('#project1').val() );
  var presentation1 = parseFloat( $('#presentation1').val() );
  var final1 = parseFloat( $('#final1').val() );
  var midterm1 = parseFloat( $('#midterm1').val() );
  
  localStorage.setItem('homework1', homework1);
  localStorage.setItem('labs1', labs1);
  localStorage.setItem('project1', project1);
  localStorage.setItem('presentation1', presentation1);
  localStorage.setItem('final1', final1);
  localStorage.setItem('midterm1', midterm1);
  ghomework1=homework1;
  glabs1=labs1;
  gproject1=project1;
  gpresentation1=presentation1;
  gfinal1=final1;
  gmidterm1=midterm1;
  window.history.back();
  } catch (ex)
  {
  alert('Points must be a decimal value');
  }
  };
  var saveGradeSettings = function()
  {
  
  var lowA = document.getElementById("lowA").value;
  var lowB = document.getElementById("lowB").value;
  var lowC = document.getElementById("lowC").value;
  var lowD = document.getElementById("lowD").value;
  var lowE = document.getElementById("lowE").value;
  var lowF = document.getElementById("lowF").value;
  var highA = document.getElementById("highA").value;
  var highB = document.getElementById("highB").value;
  var highC = document.getElementById("highC").value;
  var highD = document.getElementById("highD").value;
  var highE = document.getElementById("highE").value;
  var highF = document.getElementById("highF").value;
  
  localStorage.setItem('lowA', lowA);
  localStorage.setItem('lowB', lowB);
  localStorage.setItem('lowC', lowC);
  localStorage.setItem('lowD', lowD);
  localStorage.setItem('lowE', lowE);
  localStorage.setItem('lowF', lowF);
  localStorage.setItem('highA', highA);
  localStorage.setItem('highB', highB);
  localStorage.setItem('highC', highC);
  localStorage.setItem('highD', highD);
  localStorage.setItem('highE', highE);
  localStorage.setItem('highF', highF);
  
  glowA=lowA;
  glowB=lowB;
  glowC=lowC;
  glowD=lowD;
  glowE=lowE;
  glowF=lowF;
  ghighA=highA;
  ghighB=highB;
  ghighC=highC;
  ghighD=highD;
  ghighE=highE;
  ghighF=highF;
  window.history.back();
  
  };
  
  // Setup the event handlers
  $( document ).on( "ready", function()
                   {
                   $('#computeGrade').on('click', computeGrade);
                   $('#saveMaxSettings').on('click', saveMaxSettings);
                   $('#saveScaleSettings').on('click', saveScaleSettings);
                   $('#saveGradeSettings').on('click', saveGradeSettings);
                   $('#cancelSettings').on('click', cancelSettings);
                   
                   var gradeCutOffSetting = localStorage.getItem('gradeCutOff');
                   
                   if (gradeCutOffSetting)
                   {
                   gApoint = parseFloat(gradeCutOffSetting);
                   }
                   
                   $('#gradeCutOff').val(gApoint);
                   
                   });
  
  // Load plugin
  $( document ).on( "deviceready", function(){
                   StatusBar.overlaysWebView( false );
                   StatusBar.backgroundColorByName("gray");
                   });
  }
  
  
  )(jQuery);
