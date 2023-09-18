PennController.ResetPrefix(null) // Keep here
PennController.AddHost("http://amor.cms.hu-berlin.de/~buchmueo/");
PennController.DebugOff();

////////////////////////////////////comments///////////////////////////////////////////////////////////////////
//this is a draft in progress for an acceptability study in for czech language

/////////////////////////////////////////SEQUENCING///////////////////////////////////////////////////////////////

PennController.Sequence("instructions","instructions_2","demograficdata","4factors","progress2","description", "1_test","2_test","progress3",randomize("acceptability") ,"send1","final", "send2" );

/////////////////////////////////////////INSTRUCTIONS//////////////////////////////////////////////////////////////
PennController("instructions",

    newHtml("instructions", "instructions.html")
        .center()
        .print()
    ,
    newCanvas(40, 40)
        .print()
    ,
    newButton("continue1", "POKRAČOVAT")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait()
);
////////////////////////////////////INFO AND CONSENT////////////////////////////////////////////////////////////////

PennController("instructions_2",

    newHtml("instructions_2", "instructions_2.html")
        .center()      
        .print()
    ,
    newCanvas(40, 40)
        .print()
    ,
    newButton("POKRAČOVAT")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait(
        getHtml("instructions_2").test.complete()
            .failure( getHtml("instructions_2").warn())
            ));
/////////////////////////////////////////////////PROGRESS SCREEN 1///////////////////////////////////////////////////////

PennController("progress1",
    newText("progress1", "Thank you, well done! On the next screen (or two) you will be asked to answer questions about your person. The answers are very important for us, since they will help us to analyze the experimental data.")
    ,
    newCanvas("1000px", "200px")
         .center()
         .add("left at 100px", "middle at 50%%", getText("progress1"))
         .print()
    ,
    newButton("POKRAČOVAT")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait()
);

//////////////////////////////////////INTRO QUESTIONS html/////////////////////////////////////////////////////////

PennController("introquestions",

    newHtml("introquestions", "intro_questions.html")
        .center()
        .print()
    ,
    newCanvas(40, 40)
        .print()
    ,
    newButton("POKRAČOVAT")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait()
        .log()
);

////////////////////////////////////////////////////intro questions ibex///////////////////////////////////////////

PennController ("demograficdata",
     newText("info", "Prosíme, vyplňte následující informace a odpovězte na otázky. Uložení a zpracování Vašich odpovědí bude anonymní. Pozor, prosím, odpovědi nelze měnit.")          
     ,
     newText("gender","Pohlaví:")
     ,   
     newScale("gender","Žena","Muž","Jiné")
        .settings.vertical()
        .settings.labelsPosition("right")
        .once()
        .settings.log("gender")        
     ,
     newText("age","Věk:")
     ,
     newScale("age","18-30","31-40","41-50","starší")
        .settings.vertical()
        .settings.labelsPosition("right")
        .once()
        .settings.log("age")
     ,
     newText("l1","Mateřský jazyk/mateřské jazyky:")
     ,
     newScale("l1","Čeština","Čeština a další jazyk/další jazyky","Jiné")
        .settings.vertical()
        .settings.labelsPosition("right")
        .once()
        .settings.log("l1")
     ,
     newText("areaoforigin","Nářeční oblast, ve které jste vyrostl/vyrostla (pobyt cca do 15 let):")
     ,
     newScale("areaoforigin","Česká","Moravská","Slezská")
        .settings.vertical()
        .settings.labelsPosition("right")
        .once()
        .settings.log("areaoforigin")         
     ,
     newText("dyslex","Projevují se u Vás nějaké problémy se čtením (například dyslexie)?")
     ,
     newScale("dyslex","Ano","Ne")
        .settings.vertical()
        .settings.labelsPosition("right")
        .once()
        .settings.log("dyslex")          
     ,
      newCanvas(1000,700)
       .add(200,0, getText("info"))
       .add(200,70, getText("gender"))
       .add(200,100, getScale("gender"))
       .add(200,200, getText("age"))
       .add(200,230, getScale("age"))
       .add(200,350, getText("l1"))
       .add(200,380, getScale("l1"))
       .add(200,470, getText("areaoforigin"))
       .add(200,500, getScale("areaoforigin"))
       .add(200,600, getText("dyslex"))
       .add(200,630, getScale("dyslex"))
       .center()
       .print()
     ,
     newButton("continue3", "POKRAČOVAT")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait()
            ); 
//////////////////////////////////////4_FACTORS////////////////////////////////////////////////////////////////////

   
PennController("4factors",
     newText("0","<strong>Demografický dotazník</strong>")
     //,
     //newText("geschlecht","<strong>Welchem Geschlecht ordenst du dich zu?</strong>")     
     //,
     //newScale("geschlecht","Weiblich","Maennlich","Divers")
         //.settings.vertical()
         //.settings.labelsPosition("right")
         //.once()
         //.settings.log("geschlecht")
     ,
     newText("partnerschaft","<strong>Žijete v partnerském vztahu?</strong>")
     ,
     newScale("partnerschaft","Ano", "Ne")
         .settings.vertical()
         .settings.labelsPosition("right")
         .once()
         .settings.log("partnerschaft")
     ,
     newText("bildung","<strong>Jaké je Vaše nejvyšší dosažené vzdělání?</strong>")
     ,
     newScale("bildung", "Neuvedeno", "Základní", "Středoškolské", "Vyšší odborné", "Vysokoškolské bakalářské","Vysokoškolské magisterské", "Vysokoškolské doktorské či vyšší")
         .settings.vertical()
         .settings.labelsPosition("right")
         .once()
         .settings.log("bildung")
     ,
     newText("bildungPartner","<strong>Jaké je případně nejvyšší dosažené vzdělání Vašeho partnera/Vaší partnerky?</strong>")
     ,
     newScale("bildungPartner", "Neuvedeno", "Základní", "Středoškolské", "Vyšší odborné", "Vysokoškolské bakalářské","Vysokoškolské magisterské", "Vysokoškolské doktorské či vyšší")
         .settings.vertical()
         .settings.labelsPosition("right")
         .once()
         .settings.log("bildungPartner")
     ,
     newText("beruf","<strong>Jaké je Vaše současné povolání/profese?")
     ,
     newScale("beruf","Neuvedeno", "Číšník/servírka; Student/studentka; V domácnosti", "Povolání bez kvalifikace", "Řemeslník/řemeslnice", "Úředník/úřednice; Montér/montérka", "Technik/technička; Práce v administrativě; Reportér/reportérka", "Majitel/majitelka malého podniku; Ředitel/ředitelka; Vedoucí podniku",  "Majitel/majitelka středně velkého podniku; Státní zaměstnanec/zaměstnankyně; Zaměstnanec/zaměstnankyně ve vyšší veřejné službě", "CEO; Manažer/Manažerka; Majitel/Majitelka velkého podniku")
         .settings.vertical()
         .settings.labelsPosition("right")
         .once()
         .settings.log("beruf")
     ,
     newText("berufPartner","<strong>Jaké je případně současné povolání/profese Vašeho partnera/Vaší partnerky?</strong>")
     ,
     newScale("berufPartner","Neuvedeno", "Číšník/servírka; Student/studentka; V domácnosti", "Povolání bez kvalifikace", "Řemeslník/řemeslnice", "Úředník/úřednice; Montér/montérka", "Technik/technička; Práce v administrativě; Reportér/reportérka", "Majitel/majitelka malého podniku; Ředitel/ředitelka; Vedoucí podniku",  "Majitel/majitelka středně velkého podniku; Státní zaměstnanec/zaměstnankyně; Zaměstnanec/zaměstnankyně ve vyšší veřejné službě", "CEO; Manažer/Manažerka; Majitel/Majitelka velkého podniku")
         .settings.vertical()
         .settings.labelsPosition("right")
         .once()
         .settings.log("berufPartner")
         //,
         //newButton("weiter", "weiter")
         
    ,
     newCanvas("c1", "1000px", "1300px")
        
         .center()
         .add(100, 0, getText("0"))
         .add(100, 40, getText("partnerschaft"))
         .add(100, 70, getScale("partnerschaft"))
         .add(100, 120, getText("bildung"))
         .add(100, 150, getScale("bildung"))
         .add(100, 330, getText("bildungPartner"))
         .add(100, 380, getScale("bildungPartner"))
         .add(100, 550, getText("beruf"))
         .add(100, 580, getScale("beruf"))
         .add(100, 810, getText("berufPartner"))
         .add(100, 845, getScale("berufPartner"))
         .print()
        ,
       newButton("continue4", "POKRAČOVAT")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait()
            );
        

///////////////////////////////////PROGRESS SCREEN 2/////////////////////////////////////////////////////////////////////
PennController("progress2",
    newText("progress2", "Děkujeme za odpovědi! Nyní bude následovat přesná instrukce k experimentu.")
    ,
    newCanvas("1000px", "200px")
         .center()
         .add("left at 100px", "middle at 50%%", getText("progress2"))
         .print()
    ,
    newButton("continue3", "POKRAČOVAT")
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
    newCanvas(40, 40)
        .print()
    ,
    newButton("continue5", "POKRAČOVAT")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait()
);

////////////////////////////////////////TEST TRIALS - 1st TEST TRIAL/////////////////////////////////////////////////////////////////

PennController("1_test"
        ,
        newTimer(1000)
            .start()
            .wait()
        ,
        newText("s_context","Zde bude vždy uveden situační kontext:")
            .settings.color("blue")
            .center()
            .print()
        ,
        newCanvas(1000,20)
            .print()
        ,
        newText("s_context_text","Jana si povídá s kamarádkou na školní akci.")
            .css("font-size", "large")
            .center()
            .print()
        ,
        newCanvas(1000,100)
            .add(0,25, newText("explan_1","Věta, kterou máte hodnotit, bude vždy uvedená slovesem „Říká“ nebo „Píše“, podle toho, zda je jazykový projev psaný, či mluvený."))
            .settings.center()
            .settings.color("blue")
            .print()       
        ,
        newText("item","Říká: Moje máma mi zabalila dvě housky.")
            .css("font-size", "large")
            .settings.center()
            .print()
        ,
        newCanvas(1000,200)
            .add(0,25, newText("explan_2","Hodnoticí škála je vymezená dvěma stupni: „zcela přijatelné v daném kontextu“ (věta na Vás v daném kontextu působí bezproblémově, nic Vás na ní nezarazilo, mohli byste se s ní docela pravděpodobně setkat v uvedeném ústním či písemném projevu rodilých mluvčích češtiny) a „zcela nepřijatelné v daném kontextu“ (věta na Vás působí naprosto rušivě, do uvedeného kontextu se vůbec nehodí, rodilý mluvčí češtiny by ji nejspíše v daném kontextu nikdy nepoužil."))             
            .add(0,100, newText("V okamžiku, kdy zvolíte bod na škále a kliknete na něj, Vaše odpověď se zaznamená a objeví se nová situace a věta. Svoji odpověď tedy již nemůžete změnit."))
            .settings.center()
            .settings.color("blue")
            .print() 
        ,
        newText("explan_2","Hodnoticí škála je vymezená dvěma stupni: „zcela přijatelné v daném kontextu“ (věta na Vás v daném kontextu působí bezproblémově, nic Vás na ní nezarazilo, mohli byste se s ní docela pravděpodobně setkat v uvedeném ústním či písemném projevu rodilých mluvčích češtiny) a „ nepřijatelné v daném kontextu“ (věta na Vás působí naprosto rušivě, do uvedeného kontextu se vůbec nehodí, rodilý mluvčí češtiny by ji nejspíše v daném kontextu nikdy nepoužil).")               
            .settings.color("blue")
        ,
        newText("explan_3","V okamžiku, kdy zvolíte bod na škále a kliknete na něj, Vaše odpověď se zaznamená a objeví se nová situace a věta. Svoji odpověď tedy již nemůžete změnit.")
            .settings.color("blue")
        ,
   //   newCanvas(1000,20)
   //         .print()
   //     ,
   //     newText("question","How acceptable do you find the utterance?") //needs translation
   //         .css("font-size", "large")
   //         .css("font-style", "italic")
   //         .settings.center()
   //         .print()
   //    ,
        newCanvas(1000,30)
            .print()
        ,
        newScale("scale","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("absolutely", "Zcela přijatené v daném kontextu ") ) //the formulation is too long
            .settings.after(newText("noway", "Zcela nepřijtelné v daném kontextu") )
            .settings.center()   
            .print()
            .once()
            .wait()         
);
//////////////////////////////////////////////////////////////////2nd TEST TRIAL////////////////////////////////////////////////////////////////////
                         
PennController("2_test"
        ,
        newTimer(1000)
            .start()
            .wait()
        ,
        newText("s_context","Situační kontext:")
            .settings.color("blue")
            .center()
            .print()
        ,
        newCanvas(1000,20)
            .print()
        ,
        newText("s_context_text","Pan Prchal píše článek do Hospodářských novin.")
            .css("font-size", "large")
            .center()
            .print()
        ,
        newCanvas(1000,100)
            .add(200,25, newText("explan_1","Věta, kterou máte hodnotit, uvedená slovesem „Říká“ nebo „Píše“:"))
            .settings.center()
            .settings.color("blue")
            .print()       
        ,
        newText("item","Píše:     Tyjo, mě to samotnýho překvapilo, no normálně se ceny zvedly.")
            .css("font-size", "large")
            .settings.center()
            .print()
        ,
        newCanvas(1000,100)
            .add(400,50, newText("explan_2","Hodnoticí škála:"))             
   //         .add(0,100, newText("V okamžiku, kdy zvolíte bod na škále a kliknete na něj, Vaše odpověď se zaznamená a objeví se nová situace a věta. Svoji odpověď tedy již nemůžete změnit"))
            .settings.center()
            .settings.color("blue")
            .print()
        ,
        newText("explan_2","Hodnoticí škála:")               
            .settings.color("blue")
        
//        newText("explan_3","V okamžiku, kdy zvolíte bod na škále a kliknete na něj, Vaše odpověď se zaznamená a objeví se nová situace a věta. Svoji odpověď tedy již nemůžete změnit.")
//            .settings.color("blue")
        ,
        newCanvas(1000,20)
            .print()
//        ,
//        newText("question","How acceptable do you find the utterance?") //needs translation
//            .css("font-size", "large")
//            .css("font-style", "italic")
//            .settings.center()
//            .print()
        ,
        newScale("scale","1", "2", "3", "4", "5", "6","7")
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("absolutely", "Zcela přijatelné v daném kontextu") ) //the formulation is too long
            .settings.after(newText("noway", "Zcela nepřijatelné v daném kontextu") )
            .settings.center()   
            .print()
            .once()
            .wait()
        
         
);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


PennController("progress3",
    newText("progress1", "Nyní následuje samotná studie. Až budete připraven/a, zmáčkněte tlačítko POKRAČOVAT.")
    ,
    newCanvas("1000px", "200px")
         .center()
         .add("left at 100px", "middle at 50%%", getText("progress1"))
         .print()
    ,
    newButton("POKRAČOVAT")
        .settings.center()
        .settings.color("blue")
        .print()
        .wait()
);
    
///////////////////////////////////////////////FORCED CHOICE///////////////////////////////////////////////////////

PennController.Template( "1_list.csv",
    variable => PennController("acceptability"
        ,
        newCanvas(1, 80)
            .print()
        ,
        newTimer(1000)
            .start()
            .wait()
        ,
        newText(variable.sit_context)                     
            .css("font-size", "large")
            .settings.center()
            .print()
        ,
        newCanvas(1, 40)
            .print()  
        ,
        newText(variable.full_sentence)
            .css("font-size", "large")
            .settings.center()
            .print()
        
  //      newCanvas(1, 40)
  //          .print() 
  //                             
  //      ,              
  //      newText("How acceptable do you find the utterance?")
  //          .css("font-size", "large")
  //          .css("font-style", "italic")
  //          .print()
  //          .settings.center()
        ,
        newCanvas(1, 50)
            .print()   
        ,
        newScale("acceptability","1", "2", "3", "4", "5", "6","7") //one scale or several?
            .size("20em","auto")
            .settings.color("grey")
            .settings.labelsPosition("top")
            .settings.before(newText("absolutely", "Zcela přijatelné v daném kontextu") )
            .settings.after(newText("noway", "Zcela nepřijatelné v daném kontextu") )
            .settings.center()
            .print()
            .wait()
            .settings.log("choice"))
         
         .log("context", variable.sit_context)
         .log("sentence", variable.full_sentence) 
         .log("stimulus", variable.stimulus)
         .log("dimension", variable.dimension)
         .log("item_kind", variable.item_kind)
         .log("specificator", variable.specificator)  ////////add more var from csv!!! 
         .log("disloc_nounrole", variable.disloc_nounrole)
         .log("topic_nounrole", variable.topic_nounrole)      
  );      

///////////////////////////////////////SEND RESULTS////////////////////////////////////////////////////////////////

PennController.SendResults("send1");
    
///////////////////////////////////////////////THANKS AND CLICKWORKER CODE////////////////////////////////////////
PennController("final",
   
    
    newText("thanks", "Děkujeme za účast na studii!")
            //.css("font-size", "large")
            .settings.center()
            .print()  
    ,
    newCanvas(1,40)
        .print()
    ,
    newText("Prosíme, poznamenejte si následující kód: <strong>Prijatelnost2023</strong><br> Tento kód použijete, abyste získali finanční odměnu přes server Clikworker. Bez tohoto kódu není možné odměnu získat.")
        .settings.color("red")
        .css("font-size", "large")
        .settings.center()
        .print()
    ,
    newCanvas(1,40)
        .print()
    ,
    newText("Zde je místo na Vaše případné připomínky či komentáře. Budeme rádi za Vaši zpětnou vazbu!")
        .settings.center()
        .print()  
    ,
    newCanvas(1,20)
        .print()
    ,
    newTextInput("comment")    
        .settings.center()       
        .print()
    ,
    getTextInput("comment","Comment")
       .log("comment")
    ,
    newCanvas(1,40)
        .print()
    ,
    newText("Až kliknete na tlačítko UKONČIT EXPERIMENT, Vaše odpovědi se uloží a Vy můžete stránku s experimentem bezpečně zavřít.")
         .settings.center()
        .print()
    ,
    newCanvas(1,40)
        .print()
    ,
    newButton("UKONČIT EXPERIMENT")
        .settings.center()      
        .print()                            
        .wait()    
    );

    
///////////////////////////////////////////////SEND FINAL RESULTS////////////////////////////////////////////////////

PennController.SendResults("send2");