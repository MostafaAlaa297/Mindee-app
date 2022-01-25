let date = new Date();
let copyright = document.getElementById("footer").innerHTML = `${date.getFullYear()} &copy; صنع بكل حب بواسطة مصطفى علاء`;


let dictionary = [
    /* علامات الترقيم، علامات العطف، والمسافات */
    [/^\s+/g, ""],
    [/(?<!\w+)(و)\s+/gm, "و"],
    [/(?<!\w+)(و)\n/gm, "و"],
    [/(?<!\w+)(ف)\s+/gm, "ف"],
    [/(?<!\w+)(ف)\n/gm, "ف"],
    [/\s+،/g, "،"],
    [/(?=\w+)?،/g, "، "],
    [/\n،/g, "،"],
    [/\s+:/g, ":"], 
    [/(?=\w+)?:/g, ": "],
    [/\n:/g, ":"],
    [/\s+؛/g, "؛"], 
    [/(?=\w+)?؛/g, "؛ "],
    [/\n؛/g, "؛"],
    [/\s+\./g, "."],
    [/(?=\w+)?\./g, ". "],
    [/\n./g, "."],
    [/(\.)(\s+)(\.)/g, match => match.join("")],
//     [/(\p{P})(\s+)(\p{P})/gu, match => match.join("")],
    [/([؟!])(\.)/g, match => [...match].shift()],
    [/\s+؟/g, "؟ "],
    [/\n؟/g, "؟"],
    [/(?=\w+)?؟/g, "؟ "],
    [/\s+!/g, "! "],
    [/\n!/g, "!"],
    [/(?=\w+)?!/g, "! "],
    [/\s\s+/g, " "],
    [/\s*\(\s*/g, "("],
    [/\s*\)\s*/g, ")"],
    [/\s*\<\s*/g, "<"],
    [/\s*\>\s*/g, ">"],
    [/(ال)(\s)?(?=[a-zA-Z])/g, "الـ"],
    [/(ل)(\s)?(?=[a-zA-Z])/g, "لـ"],
    [/(لل)(\s)?(?=[a-zA-Z])/g, "للـ"],
    [/(ك)(\s)?(?=[a-zA-Z])/g, "كـ"],
    [/(ف)(\s)?(\s)?(?=[a-zA-Z])/g, "فـ"],
/****************************************/    
    /* الضمائر */
    //مذكر مخاطب
    [/(?<=\s+)([اإ]نت)(?!\w+)?$/g, "أنت"],
    [/(?<!\w+)([اإ]نت)(?=\s+)/g, "أنت"],
    [/\s([اإ]نت)\s/g, " أنت "],
    [/(?<=[؛،.؟!:])\s([اإ]نت)(?!\w+)?$/g, " أنت"], 
    [/(?<!\w+)([اإ]نت)(?=[؛،\.؟!:,\/])/g, "أنت"], 
    [/^(انت)?(?!\w+)$/g, "أنت"], 

    //مؤنث مخاطب 
    [/(?<=\s+)([اإأ]نت(ى|ي))(?!\w+)?$/g, "أنتِ"],
    [/(?<!\w+)([اإأ]نت(ى|ي))(?=\s+)/g, "أنتِ"],
    [/\s([اإأ]نت(ى|ي))\s/g, " أنتِ "],
    [/(?<=[؛،.؟!:])\s([اإأ]نت(ى|ي))(?!\w+)?$/g, " أنتِ"], 
    [/(?<!\w+)([اإأ]نت(ى|ي))(?=[؛،\.؟!:,\/])/g, "أنتِ"], 
    [/^([اإأ]نت(ى|ي))?(?!\w+)$/g, "أنتِ"],
    
    //متكلم
    [/(?<=\s+)([آإا]نا)(?!\w+)?$/gm, "أنا"],
    [/(?<!\w+)([آإا]نا)(?=\s+)/gm, "أنا"],
    [/\s([آإا]نا)\s/gm, " أنا "],
    [/(?<=[؛،.؟!:])\s([آإا]نا)(?!\w+)?$/gm, " أنا"], 
    [/(?<!\w+)([آإا]نا)(?=[؛،\.؟!:,\/])/gm, "أنا"], 
    [/^([آإا]نا)?(?!\w+)$/gm, "أنا"],
/****************************************/    
    /* الهمزات */ 
    ["إتفاق", "اتفاق"],
    ["إتفق", "اتفق"],
    ["إجتماع", "اجتماع"],
    ["إجتمع", "اجتمع"],
    ["إقتصاد", "اقتصاد"],
    ["إقتصد", "اقتصد"],
    ["إتفاق", "اتفاق"],
    ["إمتحان", "امتحان"],
    ["إختبار", "اختبار"],
    [/(?<!\w+)(اثر)/g, "أثر"],
    [/(ا|أ)تمني(?!\w+)$/g, "أتمنى"],
    ["إتمنى", "اتمنى"],
    [/(?<!\w+)(اول)/g, "أول"],
    [/(?<!\w+)(انك)/g, "أنك"],
    [/(لانك)/g, "لأنك"],
   

    [/(?<=\s+)(اه)(?!\w+)?$/g, "أه"],
    [/(?<!\w+)(اه)(?=\s+)/g, "أه"],
    [/\s(اه)\s/g, " أه "],
    [/(?<=[؛،.؟!:])\s(اه)(?!\w+)?$/g, " أه"], 
    [/(?<!\w+)(اه)(?=[؛،\.؟!:,\/])/g, "أه"], 
    [/^(اه)?(?!\w+)$/g, "أه"],

    [/(?<=\s+)([اأ]ي(ه|ة))(?!\w+)?$/g, "إيه"],
    [/(?<!\w+)([اأ]ي(ه|ة))(?=\s+)/g, "إيه"],
    [/\s([اأ]ي(ه|ة))\s/g, " إيه "],
    [/(?<=[؛،.؟!:])\s([اأ]ي(ه|ة))(?!\w+)?$/g, " إيه"], 
    [/(?<!\w+)([اأ]ي(ه|ة))(?=[؛،\.؟!:,\/])/g, "إيه"], 
    [/^([اأ]ي(ه|ة))?(?!\w+)$/g, "إيه"],

    [/(?<=\s+)(([اإ]مل(ي|ى))|(أملى))(?!\w+)?$/g, "املا"],
    [/(?<!\w+)(([اإ]مل(ي|ى))|(أملى))(?=\s+)/g, "املا"],
    [/\s(([اإ]مل(ي|ى))|(أملى))\s/g, " املا "],
    [/(?<=[؛،.؟!:])\s(([اإ]مل(ي|ى))|(أملى))(?!\w+)?$/g, " املا"], 
    [/(?<!\w+)(([اإ]مل(ي|ى))|(أملى))(?=[؛،\.؟!:,\/])/g, "املا"], 
    [/^(([اإ]مل(ي|ى))|(أملى))?(?!\w+)$/g, "املا"],
    
    [/(?<=\s+)((تمل(ي|ى)))(?!\w+)?$/g, "تملا"],
    [/(?<!\w+)((تمل(ي|ى)))(?=\s+)/g, "تملا"],
    [/\s((تمل(ي|ى)))\s/g, " تملا "],
    [/(?<=[؛،.؟!:])\s((تمل(ي|ى)))(?!\w+)?$/g, " تملا"], 
    [/(?<!\w+)((تمل(ي|ى)))(?=[؛،\.؟!:,\/])/g, "تملا"], 
    [/^((تمل(ي|ى)))?(?!\w+)$/g, "تملا"],

    [/(?<=\s+)((يمل(ي|ى)))(?!\w+)?$/g, "يملا"],
    [/(?<!\w+)((يمل(ي|ى)))(?=\s+)/g, "يملا"],
    [/\s((يمل(ي|ى)))\s/g, " يملا "],
    [/(?<=[؛،.؟!:])\s((يمل(ي|ى)))(?!\w+)?$/g, " يملا"], 
    [/(?<!\w+)((يمل(ي|ى)))(?=[؛،\.؟!:,\/])/g, "يملا"], 
    [/^((يمل(ي|ى)))?(?!\w+)$/g, "يملا"],
    
    [/(\s|\n)(اي)(\s*|\n)(?!\w+)/g, " أي "],
    [/(?<=[؛،.؟!:])\s(اي)(?!\w+)?/g, " أي"], 
    [/(?<!\w+)(اي)(?=[؛،\.؟!:,\/])/g, "أي"], 
    [/^(اي)?(?!\w+)$/g, "أي"],
/****************************************/
    /* التاء المربوطة والهاء */
    ["حاجه", "حاجة"],
    ["مسافه", "مسافة"],
    ["إسم", "اسم"],
    ["اسماء", "أسماء"],
    ["إشتري", "اشتري"],
    ["إستخدام", "استخدام"],
    ["إستخدم", "استخدم"],
    ["إستقبال", "استقبال"],
    ["إستقبل", "استقبل"],
    ["بهجه", "بهجة"],
    ["مشاركه", "مشاركة"],
/****************************************/    
    /* أسماء وكلمات أخرى */
    ["مصطفي", "مصطفى"],
    [/(\s|و)(احمد)|^(احمد)/g, "أحمد"],
    [/[اأ]سلام/g, "إسلام"],
    ["سلمي", "سلمى"],
    ["مروه", "مروة"],
    [/[اأ]روي/g, "أروى"],
    [/(?<!\w+)(ت)?(بقي)(?!\w+)/g, "أروى"],
    [/[اإ](نشاء)(\s)?(الله)/g, "إن شاء الله"],
    ["شاطيء", "شاطئ"],
    ["شئ", "شيء"],
    ["لاكن", "لكن"],
    ["اللذين", "الذين"],
/****************************************/    
    /* تنوين */
    ["اً", "ًا"],
    [/(بناءا|بناءًا|بناءاً)/g, "بناءً"],
    [/(رجاءا|رجاءًا|رجاءاً)/g, "رجاءً"],
/****************************************/
    /* Abbreviations */
    [/\b([qQ](m)|(qM))\b/g, "QM"],
    [/\b([hH][rR](m)|(hRM)|(hrM))\b/g, "HRM"],
    [/\b([hH](r)|(hR))\b/g, "HR"],
    [/\b([tT][qQ](m)|(tQM)|(tqM))\b/g, "TQM"],
    [/\b([oO](c)|(oC))\b/g, "OC"],
    [/\b([pP](r)|(pR))\b/g, "PR"],
    [/\b([fF](r)|(fR))\b/g, "FR"],
    [/\b([aA](c)|(aC))\b/g, "AC"],
    [/\b([sS][wW](d)|(sWD)|(swD))\b/g, "SWD"],
    [/\b([pP](v)|(pV))\b/g, "PV"],
    [/\b([cC](w)|(cW))\b/g, "CW"],
    [/\b([sS](m)|(sM))\b/g, "SM"],
    [/\b([gG](d)|(gD))\b/g, "GD"],
    [/\b([iI](t)|(iT))\b/g, "IT"],
    [/\bfb\b/g, "FB"],
    [/fl(u|a)tter/g, "Flutter"],
    [/m(i|o|u)nd(e|r|w)(r|e|t)s/g, "Minders"],
    [/fac(e|r)book/g, "Facebook"],
    [/(w|W)hatsapp|(whatsApp)/g, "WhatsApp"],
    [/instagram/g, "Instagram"],
    [/insta/g, "Insta"],
    [/(t|T)iktok|(tikTok)/g, "TikTok"],
    [/(twitter|tweeter|tweter|twiter)/g, "Twitter"],
    [/((y|Y)outube|youTube)/g, "YouTube"],
    
    /* الألف المقصورة والياء اللينة */
    [/(?<=\s+)(إلي|الى|الي|ألى|ألي)(?!\w+)?$/g, "إلى"],
    [/(?<!\w+)(إلي|الى|الي|ألى|ألي)(?=\s+)/g, "إلى"],
    [/\s(إلي|الى|الي|ألى|ألي)\s/g, " إلى "],
    [/(?<=[؛،.؟!:])\s(إلي|الى|الي|ألى|ألي)(?!\w+)?$/g, " إلى"], 
    [/(?<!\w+)(إلي|الى|الي|ألى|ألي)(?=[؛،\.؟!:,\/])/g, "إلى"], 
    [/^(إلي|الى|الي|ألى|ألي)?(?!\w+)$/g, "إلى"],
    [/(?<!\w+)(اليه)/g, "إليه"],
    [/(?<!\w+)(حتي)(?!\w+)?/g, "حتى"],
    [/(?<!\w+)فحتي(?!\w+)?/g, "فحتى"]
];


function text() {
    let val = document.getElementById("textarea").value;
    console.log(val);
    let newVal;
    for (let i = 0; i < dictionary.length; i++) {
        val = val.replace(dictionary[i][0], dictionary[i][1]);
        newVal = val;
    }

    return document.getElementById("textarea").value = newVal;
}
