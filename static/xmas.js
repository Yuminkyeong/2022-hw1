// The variables below edits the snowfall , feel free to edit
function closeP1(){
document.getElementsByClassName("page1")[0].style.display="none"
document.getElementsByClassName("page2")[0].style.display="block"
}
function select1(){
    var langSelect = document.getElementById("background");
    var selectValue = langSelect.options[langSelect.selectedIndex].value;

    if(selectValue == "moon1"){
       document.getElementsByClassName("num1")[0].style.display="none";
              document.getElementsByClassName("moon2")[0].style.display="block";
              document.getElementsByClassName("moon1")[0].style.display="none";
    }
       else if(selectValue == ""){
        document.getElementsByClassName("num1")[0].style.display="block";
              document.getElementsByClassName("moon2")[0].style.display="none";
              document.getElementsByClassName("moon1")[0].style.display="none";
   }
          else if(selectValue=="moon0"){
        document.getElementsByClassName("num1")[0].style.display="none";
              document.getElementsByClassName("moon2")[0].style.display="none";
              document.getElementsByClassName("moon1")[0].style.display="none";
   }
    else if(selectValue == "moon2"){
       document.getElementsByClassName("num1")[0].style.display="none";
              document.getElementsByClassName("moon2")[0].style.display="none";
              document.getElementsByClassName("moon1")[0].style.display="block";

    }
}
function next1(){
    var langSelect = document.getElementById("background");
    var selectValue = langSelect.options[langSelect.selectedIndex].value;
    document.getElementsByClassName("num1-text")[0].innerHTML="";
    var tmp = document.getElementById("str").value;

    let tt="";
      tt = "🐤"+tmp;
    let txt = `${tt}`

    $('.num1-text').append(txt);
}
function select2(){
    var langSelect = document.getElementById("background2");
    var selectValue = langSelect.options[langSelect.selectedIndex].value;

    if(selectValue == "t1"){
       document.getElementsByClassName("num2")[0].style.display="none";
              document.getElementsByClassName("hat")[0].style.display="none";
              document.getElementsByClassName("star")[0].style.display="block";
    }
       else if(selectValue == ""){
        document.getElementsByClassName("num2")[0].style.display="block";
              document.getElementsByClassName("hat")[0].style.display="none";
              document.getElementsByClassName("star")[0].style.display="none";
   }
          else if(selectValue=="t0"){
        document.getElementsByClassName("num2")[0].style.display="none";
              document.getElementsByClassName("hat")[0].style.display="none";
              document.getElementsByClassName("star")[0].style.display="none";
   }
    else if(selectValue == "t2"){
       document.getElementsByClassName("num2")[0].style.display="none";
              document.getElementsByClassName("hat")[0].style.display="block";
              document.getElementsByClassName("star")[0].style.display="none";

    }
}
function next2(){
    var langSelect = document.getElementById("background2");
    var selectValue = langSelect.options[langSelect.selectedIndex].value;
    document.getElementsByClassName("num2-text")[0].innerHTML="";
    var tmp = document.getElementById("str2").value;

    let tt="";
      tt = "🐤"+tmp;
    let txt = `${tt}`

    $('.num2-text').append(txt);
}
function select3(){
    var langSelect = document.getElementById("background3");
    var selectValue = langSelect.options[langSelect.selectedIndex].value;

    if(selectValue == "ttt1"){
       document.getElementsByClassName("num3")[0].style.display="none";
              document.getElementsByClassName("santa")[0].style.display="block";
              document.getElementsByClassName("socks")[0].style.display="none";
                            document.getElementsByClassName("cookie")[0].style.display="none";
    }
       else if(selectValue == ""){
       document.getElementsByClassName("num3")[0].style.display="block";
              document.getElementsByClassName("santa")[0].style.display="none";
              document.getElementsByClassName("socks")[0].style.display="none";
                            document.getElementsByClassName("cookie")[0].style.display="none";
   }
          else if(selectValue=="ttt2"){
       document.getElementsByClassName("num3")[0].style.display="none";
              document.getElementsByClassName("santa")[0].style.display="none";
              document.getElementsByClassName("socks")[0].style.display="none";
                            document.getElementsByClassName("cookie")[0].style.display="block";
   }
    else if(selectValue == "ttt3"){
       document.getElementsByClassName("num3")[0].style.display="none";
              document.getElementsByClassName("santa")[0].style.display="none";
              document.getElementsByClassName("socks")[0].style.display="block";
                            document.getElementsByClassName("cookie")[0].style.display="none";

    }
        else if(selectValue == "ttt0"){
       document.getElementsByClassName("num3")[0].style.display="none";
              document.getElementsByClassName("santa")[0].style.display="none";
              document.getElementsByClassName("socks")[0].style.display="none";
                            document.getElementsByClassName("cookie")[0].style.display="none";

    }
}
function next3(){
    var langSelect = document.getElementById("background3");
    var selectValue = langSelect.options[langSelect.selectedIndex].value;
    document.getElementsByClassName("num3-text")[0].innerHTML="";
    var tmp = document.getElementById("str3").value;

    let tt="";
      tt = "🐤"+tmp;
    let txt = `${tt}`

    $('.num3-text').append(txt);
}
function select4(){
    var langSelect = document.getElementById("background4");
    var selectValue = langSelect.options[langSelect.selectedIndex].value;

    if(selectValue == "ttt1"){
       document.getElementsByClassName("num4")[0].style.display="none";
              document.getElementsByClassName("santa1")[0].style.display="block";
              document.getElementsByClassName("socks1")[0].style.display="none";
                            document.getElementsByClassName("cookie1")[0].style.display="none";
    }
       else if(selectValue == ""){
       document.getElementsByClassName("num4")[0].style.display="block";
              document.getElementsByClassName("santa1")[0].style.display="none";
              document.getElementsByClassName("socks1")[0].style.display="none";
                            document.getElementsByClassName("cookie1")[0].style.display="none";
   }
          else if(selectValue=="ttt2"){
       document.getElementsByClassName("num4")[0].style.display="none";
              document.getElementsByClassName("santa1")[0].style.display="none";
              document.getElementsByClassName("socks1")[0].style.display="none";
                            document.getElementsByClassName("cookie1")[0].style.display="block";
   }
    else if(selectValue == "ttt3"){
       document.getElementsByClassName("num4")[0].style.display="none";
              document.getElementsByClassName("santa1")[0].style.display="none";
              document.getElementsByClassName("socks1")[0].style.display="block";
                            document.getElementsByClassName("cookie1")[0].style.display="none";

    }
        else if(selectValue == "ttt0"){
       document.getElementsByClassName("num4")[0].style.display="none";
              document.getElementsByClassName("santa1")[0].style.display="none";
              document.getElementsByClassName("socks1")[0].style.display="none";
                            document.getElementsByClassName("cookie1")[0].style.display="none";

    }
}
function next4(){
    var langSelect = document.getElementById("background4");
    var selectValue = langSelect.options[langSelect.selectedIndex].value;
    document.getElementsByClassName("num4-text")[0].innerHTML="";
    var tmp = document.getElementById("str4").value;

    let tt="";
      tt = "🐤"+tmp;
    let txt = `${tt}`

    $('.num4-text').append(txt);
}
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var next = 0;

function select5(){
    var langSelect = document.getElementById("background5");
    var selectValue = langSelect.options[langSelect.selectedIndex].value;

    if(selectValue == "ttt1"){
       document.getElementsByClassName("num5")[0].style.display="none";
              document.getElementsByClassName("santa2")[0].style.display="block";
              document.getElementsByClassName("socks2")[0].style.display="none";
                            document.getElementsByClassName("cookie2")[0].style.display="none";
    }
       else if(selectValue == ""){
       document.getElementsByClassName("num5")[0].style.display="block";
              document.getElementsByClassName("santa2")[0].style.display="none";
              document.getElementsByClassName("socks2")[0].style.display="none";
                            document.getElementsByClassName("cookie2")[0].style.display="none";
   }
          else if(selectValue=="ttt2"){
       document.getElementsByClassName("num5")[0].style.display="none";
              document.getElementsByClassName("santa2")[0].style.display="none";
              document.getElementsByClassName("socks2")[0].style.display="none";
                            document.getElementsByClassName("cookie2")[0].style.display="block";
   }
    else if(selectValue == "ttt3"){
       document.getElementsByClassName("num5")[0].style.display="none";
              document.getElementsByClassName("santa2")[0].style.display="none";
              document.getElementsByClassName("socks2")[0].style.display="block";
                            document.getElementsByClassName("cookie2")[0].style.display="none";

    }
        else if(selectValue == "ttt0"){
       document.getElementsByClassName("num5")[0].style.display="none";
              document.getElementsByClassName("santa2")[0].style.display="none";
              document.getElementsByClassName("socks2")[0].style.display="none";
                            document.getElementsByClassName("cookie2")[0].style.display="none";

    }
}
function next5(){
    var langSelect = document.getElementById("background5");
    var selectValue = langSelect.options[langSelect.selectedIndex].value;
    document.getElementsByClassName("num5-text")[0].innerHTML="";
    var tmp = document.getElementById("str5").value;

    let tt="";
      tt = "🐤"+tmp;
    let txt = `${tt}`

    $('.num5-text').append(txt);

}
function submit1(){
    alert("결과 저장!");
    }
$(document).ready(function () {
    $(".next").click(function () {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function (now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50) + "%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale(' + scale + ')',
                    'position': 'absolute'
                });
                next_fs.css({'left': left, 'opacity': opacity});
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });
});

$(document).ready(function () {
    $(".previous").click(function () {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //de-activate current step on progressbar
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function (now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale previous_fs from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2;
                //2. take current_fs to the right(50%) - from 0%
                left = ((1 - now) * 50) + "%";
                //3. increase opacity of previous_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({'left': left});
                previous_fs.css({'transform': 'scale(' + scale + ')', 'opacity': opacity});
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });
});
