$(document).ready(function(){
    console.log("Ready!");
        /*var nome,email,subject,msg;

        nome = $("#name").val();
        email = $("#email").val();
        subject = $("#msg_subject").val();
        msg = $("#message").val();
        console.log(nome+" "+email+" "+subject+" "+msg);
        */
       $('#form-submit').click(function(e){
        e.preventDefault();
        //Get inputs by id
        var userName = $('#fname').val();
        var text = $('#message').val();
        //Define body and subject
        var body = "Contact form Start Template from "+userName+"%0D%0A%0D%0A"+$("form").serialize().replace(new RegExp('&', 'g'), "%0D%0A");
        var subject = "Contact form Start Template from "+userName;
        //open mail client
         window.location.href = "mailto:alessandroagozar@gmail.com?subject=Example Mail from "+userName+"&body="+text;
    });
});
