function SendMail(){
    var params={
        from_name:document.getElementById("name").value,
        email_id:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_yjd87qc","template_7bun9kb",params).then(res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err)=>console.log(err));
}

