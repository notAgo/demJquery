$("document").ready(function(){
    console.log("red!");
    
    $("#form-submit").on('click',function(e){
        e.preventDefault();
        

        var nome,email,subject,msg;

        nome = $("#name").val();
        email = $("#email").val();
        subject = $("#msg_subject").val();
        msg = $("#message").val();
        console.log(nome+" "+email+" "+subject+" "+msg);
    });
});