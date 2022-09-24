$(document).ready(function(){
    $("#sclass,#scountry,#sname").focus(function(){
        $(this).css('background-color','lime');
    });
    $("#sclass,#scountry,#sname").blur(function(){
        $(this).css('background-color','');
    });
    $("#scountry").change(function(){
       // $(this).css('background-color','pink');
       var a=$(this).val();
        $('#test').html(a);
    });
    $("#sclass,#sname").select(function(){
        $(this).css('background-color','yellow');
    });
    $("#sform").submit(function(){
        $("body").css('background-color','yellow');
    });


})