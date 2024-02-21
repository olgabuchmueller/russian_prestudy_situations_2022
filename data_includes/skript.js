PennController.ResetPrefix(null) // Keep here
PennController.AddHost("http://amor.cms.hu-berlin.de/~buchmueo/");
PennController.DebugOff();

////////////////////////////////////comments///////////////////////////////////////////////////////////////////
//this is a draft in progress 18.09.2023 for a prestudy to denote suitable texts to describe situations referring to the dimensions static/dynamic
//and prepared/spontaneous.

//PennController.Sequence("instructions","instructions_2","description", "example", "situation_rating" ,"send","thanks" ); 

////////////////////////////////////////SEQUENCING/////////////////////////////////////////////////////////////////

sitrat = randomize("situation_rating")
Sequence("1_screen_instructions",
         "2_screen_consent",
         "3_screen_agesex",
         "4_screen_definitions",
         "example",
         "precheck",
         pick(sitrat,16),
         "check1",
         pick(sitrat,16),
         "check2",
         pick(sitrat,16),
         "check3",
         pick(sitrat,16),
    "send",
    "thanks",
    "send")
    
 ;

/////////////////////////////////////////INSTRUCTIONS//////////////////////////////////////////////////////////////
PennController("1_screen_instructions",

    newHtml("1_screen_instructions", "1_screen_instructions.html")
        .center()
        .print()
    ,
    newCanvas("1_emp", 40, 40)
        .print()
    ,
    newButton("continue1", "ДАЛЕЕ")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait()
);
////////////////////////////////////INSTRUCTIONS WITH KLICKBOXES///////////////////////////////////////////////////

PennController("2_screen_consent",

    newHtml("2_screen_consent", "2_screen_consent.html")
        .center()      
        .print()
    ,
    newCanvas("1_emp", 40, 40)
        .print()
    ,
    newButton("continue1", "ДАЛЕЕ")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait(
        getHtml("2_screen_consent").test.complete()
            .failure( getHtml("2_screen_consent").warn())
            ));

//////////////////////////////////////AGESEX///////////////////////////////////////////////////////////////////////

PennController("3_screen_agesex",

    newHtml("3_screen_agesex", "3_screen_agesex.html")
        .center()      
        .print()
        .log()
    ,                   
    newCanvas("111_emp", 40, 40)
        .print()
    ,
    newButton("agesex", "ДАЛЕЕ")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait()
);

///////////////////////////////////DEFINITIONS/////////////////////////////////////////////////////////////////////
PennController("4_screen_definitions",

    newHtml("4_screen_definitions", "4_screen_definitions.html")
         .center()
         .print()
    ,
    newCanvas("11_emp", 40, 40)
        .print()
    ,
    newButton("continue2", "ДАЛЕЕ")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait()
);
////////////////////////////////////////EXAMPLE////////////////////////////////////////////////////////////////////

PennController("example",
    
    newTimer("t1", 1000)
            .start()
            .wait()
    ,
    newText("Сейчас мы покажем Вам на примере, как именно будет проходить исследование.")
        .settings.color("blue")
        .center()
        .print()
    ,
    newCanvas("1", 1, 30)
            .print()
    ,
    newText("Сначала появится предложение с краткой инструкцией.")
            .settings.color("blue")
            .center()
            .print()
    ,
    newCanvas("2", 1, 30)
            .print()
    ,
    newTimer("t2", 4000)
            .start()
            .wait()
    ,
    newText("Оцените использование языка в ситуации, описанной в предложении:")
            .center()
            .print()
    ,
    newCanvas("3", 1, 30)
            .print()
    ,
    newTimer("t3", 4000)
            .start()
            .wait()
    ,
    newText("Затем появляется предложение, описывающее ситуацию использования языка.")
            .settings.color("blue")
            .center()
            .print()
    ,
    newCanvas("4", 1, 20)
            .print()
    ,
    newTimer("t4", 4000)
            .start()
            .wait()         
    ,
    newText("Александр читает записку сестры.")
            //.css("font-size", "large")
            .settings.center()
            .print()              
    ,
    newCanvas("5", 1, 20)
            .print()
    ,
    newTimer("t4", 4000)
            .start()
            .wait()
    ,
    newText("Теперь появится шкала с двумя полюсами. Пожалуйста, обратите внимание на термины на концах шкалы. <br>Эти термины были описаны в инструкции в начале исследования. Оцените использование языка в предложении по этой шкале.")
            .settings.color("blue")
            .center()
            .print()
    ,
    newCanvas("6", 1, 30)
            .print()

    ,
    newScale("scale_dyn_stat","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("spon", "спонтанное") )
            .settings.after(newText("prep", "подготовленное") )
            .settings.center()
            .once()
            .print()
            .wait()
    ,
    newCanvas("7", 1, 30)
            .print()
    ,
    newTimer("t7", 1000)
            .start()
            .wait()
    ,
    newText("После нажатия на точку на первой шкале появляется вторая шкала. <br> Пожалуйста, теперь оцените использование языка в предложении по этой шкале.")
            .settings.color("blue")
            .center()
            .print()
    ,
    newCanvas("8", 1, 30)
            .print()
    ,
    newScale("scale_dyn_stat2","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("very_interactive", "информативное") )
            .settings.after(newText("not_interactive_at_all", "разработанное") )
            .settings.center()
            .once()
            .print()
            .wait()
    ,
    newCanvas("9", 1, 30)
            .print()
    ,
    newTimer("t10", 1000)
            .start()
            .wait()
    ,
    newText("После того, как Вы оценили использование языка по шкалам, Вы можете перейти к следующему предложению, которое Вы будете оценивать по тем же шкалам.<br><br> На следующем экране последует контрольное предложение, чтобы проверить Ваше понимание терминов.")
            .settings.color("blue")
            .settings.center()
            .print()
    ,
    newCanvas("10", 1, 20)
            .print()
    ,
    newTimer("t12", 1000)
            .start()
            .wait()
    ,
    newButton("continue", "ДАЛЕЕ")
            .settings.center()
            .print()
            .wait()

);

////////////////////////////////////////EXAMPLE CONTROL QUESTION///////////////////////////////////////////////////

PennController("precheck",
               
    newTimer("a", 1000)
            .start()
            .wait()
    ,
               
    newText("Контрольное предложение:")  
            .settings.color("blue")
            .center()
            .print()
    ,
    newTimer("aa", 2000)
            .start()
            .wait() 
    ,
    newCanvas("aa", 1, 30)
            .print()       
    ,
    newText("Александр Михайлович пишет письмо сестре.")
            .center()
            .print()
    ,
    newTimer("b",1500)
            .start()
            .wait()
    ,
    newCanvas("a", 1, 30)
    .print()
    ,
    newText("Вопрос для проверки:")
            .center()
            .print()
    ,
    newCanvas("b", 1, 30)
    .print()
    ,
    newTimer("c", 1000)
            .start()
            .wait()
    ,
    newText("Использованием языка в данном случае является:")
            .center()
            .print()
    ,
    newCanvas("c", 1, 30)
            .print()
    ,
    newButton("true", "язык, используемый в письме")
    .print()
    ,
    newButton("false", "то, что сестра думает об этом писме")
    .print()
    ,
    newCanvas("check1", "150em", "5em")
               //.scaling("page")
               .center()
    .settings.add( "left at 30%"    , "middle at 50%", getButton("true" ))
    .settings.add(  "right at 65%" , "middle at 50%", getButton("false"))       
    .print()
    ,
    newText("Right", "Верный ответ!")
    ,
    newText("Wrong", "Неверный ответ! В данном случае под использованием языка подразумевается язык, используемый в письме.")
    ,
    newSelector("check1")
    .add( getButton("true"), getButton("false"))
    .wait()
    .test.selected("true")
    .success(getText("Right") .print() .center() .color("green"))
    .failure(getText("Wrong") .print() .center() .color("red"))      
    .log()
    .print()
    .center()
    ,
    newCanvas("d", 1, 30)
    .print()
    ,
    (newButton("При нажатии на эту кнопку Вы перейдете к самому исследованию.").center() .print().wait())
    
       
);


////////////////////////////////////////CHECKS - AFTER EACH 16 ITEMS SHUFFLED//////////////////////////////////////

PennController("check1",
    
    newTimer("a", 1000)
            .start()
            .wait()
    ,
    newText("Света читает анекдот в газете.")
            .center()
            .print()
    ,
    newTimer("b",1500)
            .start()
            .wait()
    ,
    newCanvas("a", 1, 30)
    .print()
    ,
    newText("Вопрос, чтобы освежить Вашу память:")
            .center()
            .print()
    ,
    newCanvas("b", 1, 30)
    .print()
    ,
    newTimer("c", 1000)
            .start()
            .wait()
    ,
    newText("Использованием языка в данном случае является:")
            .center()
            .print()
    ,
    newCanvas("c", 1, 30)
            .print()
    ,
    newButton("true", "текст анекдота в газете")
    .print()
    ,
    newButton("false", "процесс чтения, происходящий в голове Светы")
    .print()
    ,
    newCanvas("check1", "150em", "5em")
               //.scaling("page")
               .center()
    .settings.add( "left at 35%"    , "middle at 50%", getButton("true" ))
    .settings.add(  "right at 65%" , "middle at 50%", getButton("false"))       
    .print()
    ,
    newText("Right", "Верный ответ!")
    ,
    newText("Wrong", "Неверный ответ! В данном случае под использованием языка подразумевается текст анекдота в газете")
    ,
    newSelector("check1")
    .add( getButton("true"), getButton("false"))
    .wait()
    .test.selected("true")
    .success(getText("Right") .print() .center() .color("green"))
    .failure(getText("Wrong") .print() .center() .color("red"))      
    .log()
    .print()
    .center()
    ,
    newCanvas("d", 1, 30)
    .print()
    ,
    (newButton("ДАЛЕЕ").center() .print().wait())
    
        );

PennController("check2",
    newTimer("a", 1000)
            .start()
            .wait()
    ,
    newText("Стас пишет поздравление сестре.")
            .center()
            .print()
    ,
    newCanvas("a", 1, 30)
    .print()
    ,
    newTimer("b", 1500)
            .start()
            .wait() 
    ,         
    newText("Вопрос, чтобы освежить Вашу память:")
            .center()
            .print()
    ,
    newCanvas("b", 1, 30)
    .print()
    ,
    newTimer("c", 1000)
            .start()
            .wait()
    ,
    newText("Использованием языка в данном случае является:")
            .center()
            .print()
    ,
    newCanvas("c", 1, 30)
            .print()
    ,
    newButton("true", "текст поздравления")
    .print()
    ,
    newButton("false", "подготовка, предшествующая написанию поздравления")
    .print()
    ,
    newCanvas("check1", "150em", "5em")
               //.scaling("page")
               .center()
    .settings.add( "left at 35%"    , "middle at 50%", getButton("true" ))
    .settings.add(  "right at 65%" , "middle at 50%", getButton("false"))       
    .print()
    ,
    newText("Right", "Верный ответ!")
    ,
    newText("Wrong", "Неверный ответ! В данном случае под использованием языка подразумевается текст поздравления")
    ,
    newSelector("check1")
    .add( getButton("true"), getButton("false"))
    .wait()
    .test.selected("true")
    .success(getText("Right") .print() .center() .color("green"))
    .failure(getText("Wrong") .print() .center() .color("red"))      
    .log()
    .print()
    .center()
    ,
    newCanvas("d", 1, 30)
    .print()
    ,
    (newButton("ДАЛЕЕ").center() .print().wait())
    
        );


PennController("check3",
    newTimer("a", 1000)
            .start()
            .wait()
    ,
    newText("Екатерина Михайловна говорит с профессором в университете.")
            .center()
            .print()
    ,
    newCanvas("a", 1, 30)
    .print()
    ,
    newTimer("b", 1500)
            .start()
            .wait()
    ,
    newText("Вопрос, чтобы освежить Вашу память:")
            .center()
            .print()
    ,
    newCanvas("b", 1, 30)
    .print()
    ,
    newTimer("c", 1000)
            .start()
            .wait()
    ,
    newText("Использованием языка в данном случае является:")
            .center()
            .print()
    ,
    newCanvas("c", 1, 30)
            .print()
    ,
    newButton("true", "то, что говорит Екатерина Михайловна")
    .print()
    ,
    newButton("false", "мысли Екатерины Михайловны")
    .print()
    ,
    newCanvas("check1", "150em", "5em")
               //.scaling("page")
               .center()
    .settings.add( "left at 35%"    , "middle at 50%", getButton("true" ))
    .settings.add(  "right at 65%" , "middle at 50%", getButton("false"))       
    .print()
    ,
    newText("Right", "Верный ответ!")
    ,
    newText("Wrong", "Неверный ответ! В данном случае под использованием языка подразумевается то, что говорит Екатерина Михайловна")
    ,
    newSelector("check1")
    .add( getButton("true"), getButton("false"))
    .wait()
    .test.selected("true")
    .success(getText("Right") .print() .center() .color("green"))
    .failure(getText("Wrong") .print() .center() .color("red"))      
    .log()
    .print()
    .center()
    ,
    newCanvas("d", 1, 30)
    .print()
    ,
    (newButton("ДАЛЕЕ").center() .print().wait())
    
        );
    
///////////////////////////////////////////////MAIN PART///////////////////////////////////////////////////////////

PennController.Template( "sentences.csv",
    variable => PennController("situation_rating"
    ,
        newCanvas("2_emp", 1, 80)
            .print()
        ,
        newTimer("timer_1", 1000)
            .start()
            .wait()
        ,
        newText("Оцените использование языка в ситуации, описанной в предложении:")
            .print()
            .settings.center()  
        ,
        newCanvas("33_emp", 1, 80)
            .print()                    
        ,
        newText(variable.sentence)
            .css("font-size", "large")
            .settings.center()
            .print()
        ,
        newTimer("timer_2",2000)
            .start()
            .wait()
        ,
        newCanvas("4_emp", 1, 40)
            .print()
        ,
        newScale("scale_spo_prep","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("spon", "cпонтанное") )
            .settings.after(newText("prep", "подготовленное")   )
            .settings.center()
            .once()
            .print()
            .wait()
            .settings.log("scale_spon_prep")
        ,
        
        newCanvas("5_emp", 1, 80)
            .print()
        ,
          newScale("scale_spo_prep","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("info", "информативное") )
            .settings.after(newText("elab", "разработанное")   )
            .settings.center()
            .once()
            .print()
            .wait()
            .settings.log("scale_info_elab")
        ,
        newCanvas("9_emp", 80, 80)
            .print()
        ,
        newButton("continue", "ДАЛЕЕ")
            .settings.center()
            .print()
            .wait()
            
                )
            
            .log("item_nr", variable.item_nr)
            .log("item_version", variable.item_version)
            .log("dimension_group", variable.dimension_group)
            .log("distinction_dimension", variable.distinction_dimension)
            .log("agens_gender", variable.agens_gender)
            .log("modality", variable.modality)
            .log("formality", variable.formality)
            .log("sentence", variable.sentence)
                    
                );

///////////////////////////////////////SEND RESULTS////////////////////////////////////////////////////////////////

PennController.SendResults("send");

///////////////////////////////////////THANK YOU AND BYE//////////////////////////////////////////////////////////

PennController("thanks",
    newText("thanks", "Благодарим Вас за участие в исследовании! <br>Вы можете закрыть окно браузера.")
            .css("font-size", "large")
            .settings.center()
            .print()
            .wait()
 
            
        );


