PennController.ResetPrefix(null) // Keep here
PennController.AddHost("http://amor.cms.hu-berlin.de/~buchmueo/");
//PennController.DebugOff();

////////////////////////////////////comments///////////////////////////////////////////////////////////////////
//this is a draft in progress (14) for a prestudy to denote suitable texts to describe situations referring to the dimensions static/dynamic
//and prepared/spontaneous.

//PennController.Sequence("instructions","instructions_2","description", "example", "situation_rating" ,"send","thanks" ); 

////////////////////////////////////////SEQUENCING/////////////////////////////////////////////////////////////////

sitrat = randomize("situation_rating")
Sequence("instructions",
         "instructions_2",
    "agesex",
         "description",
         "example",
         "precheck",
         pick(sitrat,10),
         "check1",
         pick(sitrat,10),
         "check2",
         pick(sitrat,10),
         "check3",
         pick(sitrat,10),
    "send",
    "thanks")
    
 ;

/////////////////////////////////////////INSTRUCTIONS//////////////////////////////////////////////////////////////
PennController("instructions",

    newHtml("instructions", "instructions.html")
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

PennController("instructions_2",

    newHtml("instructions_2", "instructions_2.html")
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
        getHtml("instructions_2").test.complete()
            .failure( getHtml("instructions_2").warn())
            ));

//////////////////////////////////////AGESEX///////////////////////////////////////////////////////////////////////

PennController("agesex",

    newHtml("agesex", "age_sex.html")
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

///////////////////////////////////DESCRIPTION/////////////////////////////////////////////////////////////////////
PennController("description",

    newHtml("description", "description.html")
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
    newText("1", "Сейчас мы покажем Вам на примере, как именно будет проходить исследование.")
        .settings.color("blue")
        .center()
        .print()
    ,
    newCanvas("1", 1, 20)
            .print()
    ,
    newTimer("t2", 4000)
            .start()
            .wait()
    ,
    newText("2", "Сначала появится предложение, которое Вы внимательно прочитаете.")
            .settings.color("blue")
            .center()
            .print()
    ,
    newCanvas("2", 1, 30)
            .print()
    ,
    newTimer("t3", 4000)
            .start()
            .wait()
    ,
    newText("Лёша читает рецепт в кулинарной книге.")
            .css("font-size", "large")
            .settings.center()
            .print()
    ,
    newCanvas("2", 1, 20)
            .print()
    ,
    newTimer("t4", 4000)
            .start()
            .wait()
    ,
    newText("3","Затем появится вопрос, в котором спрашивается об использовании языка в этом предложении. <br> В данном случае использование языка - это рецепт в кулинарной книге.")
            .settings.color("blue")
            .center()
            .print()
    ,
    newTimer("t5",4000)
            .start()
            .wait()
    ,
    newCanvas("3", 1, 30)
            .print()
    ,
    newText("Является ли использование языка в описанной ситуации скорее субъективным или объективным?")
            .css("font-size", "large")
            .settings.center()
            .print()
    ,
    newTimer("t6",4000)
            .start()
            .wait()
    ,
    newCanvas("4_emp", 1, 20)
            .print()
    ,
    newText("4","Теперь появится шкала с двумя полюсами. Пожалуйста, обратите внимание на термины на концах шкалы. <br>Эти термины были описаны в инструкции в начале исследования. Теперь оцените, пожалуйста, использование языка в предложении по этой шкале.")
            .settings.color("blue")
            .center()
            .print()
    ,
    newText("3","После того, как вы сделали свой выбор, вы уже не сможете его исправить.")
            .settings.color("red")
            .center()
            .print()
    ,
    newCanvas("4", 1, 30)
            .print()
    ,
    newTimer("t66",4000)
            .start()
            .wait()
    ,
    newScale("scale_dyn_stat","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("subjektivní", "субъективное") )
            .settings.after(newText("objektivní", "объективное") )
            .settings.center()
            .once()
            .print()
            .wait()
    ,
    newCanvas("5", 1, 30)
            .print()
    ,
    newTimer("t7", 1000)
            .start()
            .wait()
    ,
    newText("5","После нажатия на точку на первой шкале появляется вторая шкала, а после нажатия на точку на второй шкале появляется третья (последняя) шкала. <br> Пожалуйста, теперь оцените использование языка в предложении по этим шкалам.")
            .settings.color("blue")
            .center()
            .print()
    ,
    newCanvas("6", 1, 30)
            .print()
    ,
    newTimer("t8", 4000)
            .start()
            .wait()
    ,
    newText("Является ли использование языка в описанной ситуации скорее интерактивным или неинтерактивным?")
            .settings.center()
            .print()
    ,
    newCanvas("7", 1, 20)
            .print()
    ,
    newTimer("t9", 4000)
            .start()
            .wait()
    ,
    newScale("scale_dyn_stat2","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("very_interactive", "очень интерактивное") )
            .settings.after(newText("not_interactive_at_all", "неинтерактивное") )
            .settings.center()
            .once()
            .print()
            .wait()
    ,
    newCanvas("8", 1, 30)
            .print()
    ,
    newTimer("t10", 1000)
            .start()
            .wait()
    ,
    newText("Является ли использование языка в описанной ситуации скорее спонтанным или подготовленным?")
             .settings.center()
             .print()
          
    ,
    newCanvas("9", 1, 20)
            .print()
    ,
    newTimer("t11", 4000)
            .start()
            .wait()
    ,
    newScale("scale_spo_prep","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("spontánní", "спонтанное") ) 
            .settings.after(newText("připravené", "подготовленное")   )
            .settings.center()
            .once()
            .print()
            .wait()
    ,
    newCanvas("10", 1, 30)
            .print()
    ,
    newTimer("t12", 1000)
            .start()
            .wait()
    ,
    newText("6","После того, как Вы оценили использование языка по всем шкалам, Вы можете перейти к следующему предложению, которое Вы будете оценивать по тем же трём шкалам.<br><br> Далее последует контрольное предложение, чтобы проверить Ваше понимание терминов.")
            .settings.color("blue")
            .settings.center()
            .print()
    ,
    newCanvas("11", 1, 20)
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
    newText("Александр Михайлович разговаривает с сотрудником городского банка.")
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
    newButton("true", "разговор между Александром Михайловичем и сотрудником банка")
    .print()
    ,
    newButton("false", "то, что сотрудник думает об этом разговоре")
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
    newText("Wrong", "Неверный ответ! В данном случае под использованием языка подразумевается разговор между Александром Михайловичем и сотрудником банка.")
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
    (newButton("При нажатии на кнопку ДАЛЕЕ Вы перейдете к самому исследованию.").center() .print().wait())
    
       
);


////////////////////////////////////////CHECKS - AFTER EACH 10 ITEMS SHUFFLED//////////////////////////////////////

PennController("check1",
    
    newTimer("a", 1000)
            .start()
            .wait()
    ,
    newText("Света читает главу из исторического романа.")
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
    newButton("true", "текст главы исторического романа")
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
    newText("Wrong", "Неверный ответ! В данном случае под использованием языка подразумевается текст главы исторического романа")
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
    newText("Стас пишет поздравление для своей сестры.")
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
    newText("Екатерина Михайловна выступает с лекцией перед посетителями на Дне науки.")
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
        newText(variable.sentence)
            .css("font-size", "large")
            .settings.center()
            .print()
        ,
        newTimer("timer_2",1500)
            .start()
            .wait()
        ,
        newCanvas("3_emp", 1, 80)
            .print()
        ,
        newText("Является ли использование языка в описанной ситуации скорее субъективным или объективным?")
            .print()
            .settings.center()
        ,
        newCanvas("4_emp", 1, 30)
            .print()
        ,
        newScale("scale_dyn_stat","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("subjektivní", "субъективное") )
            .settings.after(newText("objektivní", "объективное") )
            .settings.center()
            .once()
            .print()
            .wait()
            .settings.log("rating")
        ,
        newCanvas("5_emp", 1, 80)
            .print()
        ,
        newText("Является ли использование языка в описанной ситуации скорее интерактивным или неинтерактивным?")
            .print()
            .settings.center()
        ,
        newCanvas("6_emp", 1, 30)
            .print()
        ,
        newScale("scale_dyn_stat2","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("very_interactive", "очень интерактивное") )
            .settings.after(newText("not_interactive_at_all", "неинтерактивное")   )
            .settings.center()
            .once()
            .print()
            .wait()
            .settings.log("rating")
        ,
        newCanvas("7_emp", 1, 80)
            .print()
        ,
        newText("Является ли использование языка в описанной ситуации скорее спонтанным или подготовленным?")
            .print()
            .settings.center()
        ,
        newCanvas("8_emp", 1, 30)
            .print()
        ,
        newScale("scale_spo_prep","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("spontánní", "cпонтанное") )
            .settings.after(newText("připravené", "подготовленное")   )
            .settings.center()
            .once()
            .print()
            .wait()
            .settings.log("scale_spo_prep")
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
            .log("dimension", variable.dimension)
            .log("agens_gender", variable.agens_gender)
            .log("modality", variable.modality)
            .log("agens_formality", variable.agens_formality)
            .log("sentence", variable.sentence)
                    
                );

///////////////////////////////////////SEND RESULTS////////////////////////////////////////////////////////////////

PennController.SendResults("send");

///////////////////////////////////////THANK YOU AND BYE//////////////////////////////////////////////////////////

PennController("thanks",
    newText("thanks", "Благодарим Вас за участие в исследовании! Здесь есть место для Ваших комментариев или предложений. Мы будем рады получить Ваш отзыв:")
            .css("font-size", "large")
            .settings.center()
            .print()
    ,
    newCanvas("10_emp", 20, 20)
            .print()
    ,
    newTextInput("comment")      
        .settings.center()
        .print()
        .log()
    ,
   newCanvas("10_emp", 20, 20)
            .print()
    ,
    getTextInput("comment").settings.log("comment")
    ,
    newButton("thanks", "Отправить комментарий")
            .settings.center()
            .print()
            .wait()
            
        );

