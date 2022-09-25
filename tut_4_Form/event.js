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
        var ssname=$('#sname').val();
        alert("name",ssname)
        console.log(ssname)
      //  $("body").css('background-color','yellow');
    });
    $("#clickbutton").click(function(){
        $('#box').text('welcome to jquery world')
        //var ssname=$('#sname').val();
       // alert("name",ssname)
       // console.log(ssname)
      //  $("body").css('background-color','yellow');
    });


})