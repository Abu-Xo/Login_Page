function validate(){
    var a = document.getElementById('email');
  
    if(a.value=="")
    {
     document.getElementById("p1").innerHTML = "*Enter your Email Id*";
     a.focus();
     a.style.border= "solid 2px red";
     return false;
    }
  
    if(a.value.length>30)
    {
  
    alert("30 character only using email")
      return false;
    }
  
  
    var b = document.getElementById('pass');
  
    if(b.value=="")
    {
     document.getElementById("p2").innerHTML = "*Enter your Password*";
     b.focus();
     b.style.border= "solid 2px red";
     return false;
    }
  
    if(b.value.length>8)
    {
  
    alert("8 character only using password")
      return false;
    }
  
  }