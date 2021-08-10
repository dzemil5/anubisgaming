function proveraPodataka() {
    var ime =  document.getElementById("fname").value;
    var email =  document.getElementById("email").value;
    var poruka =  document.getElementById("message").value;
    
    var regIme= /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/;
    var regMail = /^[$#&^><?!]{0,3}[0-9]{0,5}[A-Za-z._-]{1,}@[A-Za-z.]{1,}$/;
    var regPoruka = /^[a-zA-Z0-9,.!? ]{1,}$/;
    
    if(!regIme.test(ime))
    {
        alert("Name entered incorrectly. Please try again.");
        return false;
    }
    else if(!regMail.test(email))
    {
        alert("E-mail entered incorrectly. Please try again.");
        return false;
    }
    else if(poruka.length>255)
    {
        alert("Your message exceeds the allowed 255 characters. Please try again.");
        return false;
    }
    else if(!regPoruka.test(poruka))
    {
        alert("E-mail entered incorrectly. Please try again.");
        return false;
    }
    else
    {
        alert("Message sent successfully!");
        return true;
    }


}
