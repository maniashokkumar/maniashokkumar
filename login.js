


function validate(){
 
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var phone=document.getElementById("mobile").value;
    var email=document.getElementById("email").value;
    var psw1=document.getElementById("password").value;
    
  
    var name1=/[a-zA-Z]+/;
    var firstname=(name1.test(fname));
    var lastname=(name1.test(lname));

    if(firstname==false ){
     
        document.getElementById("fname").style.border="2px solid red";
        return false
    }

    if(lastname==false){
     
        document.getElementById("lname").style.border="2px solid red";
        return false
    }

    var phone1=/(^[6-9])([0-9]{9})$/;
    var phonenumber=phone1.test(phone);
    console.log(phonenumber);
    if(phonenumber==false){
     
        document.getElementById("mobile").style.border="2px solid red";
        return false
    }
    var email1=/([a-zA-z0-9]+)[@]([a-zA-Z]+).([a-zA-Z]+)/;
    var email2=(email1.test(email));
   
    if(email2==false){
     
        document.getElementById("email").style.border="2px solid red";
        return false
    }


    if(psw1.length<10){
     
        document.getElementById("password").style.border="2px solid red";
        document.getElementById("ptxt").innerHTML="Min password length is 10";
        return false
        
       

    }
    else if(psw1.search(/[a-z]+/)==-1){
        document.getElementById("password").style.border="2px solid red";
        document.getElementById("ptxt").innerHTML="Password should contain atleast one lower case";
        return false
        
    
    }
    else if(psw1.search(/[A-Z]+/)==-1){
        document.getElementById("password").style.border="2px solid red";
        document.getElementById("ptxt").innerHTML="Password should contain atleast one  Uppercase";
        return false
        
    
    }
    else if(psw1.search(/[0-9]+/)==-1){
        document.getElementById("password").style.border="2px solid red";
        document.getElementById("ptxt").innerHTML="Password should contain atleast one Number";
        return false
        
    
    }
    else if(psw1.search(/[!\@\#\$\%\^\&\*\(\)\_]/)==-1){
        document.getElementById("password").style.border="2px solid red";
        document.getElementById("ptxt").innerHTML="Password should contain atleast one Special character";
        return false
        
    
    }
    var name=fname+' '+lname;
    var date=new Date();
    alert("Hi"+ " "+ name+' '+"you are successfully logedin at"+date);
  

    
   
 

} 



function age(){

    cur_age=document.getElementById("curage").value;
    exp_age=document.getElementById("expage").value;
    ret_age=document.getElementById("retage").value;

    if(exp_age>cur_age){
        alert("Current age should be less than expected age");
    }
    else if(cur_age<ret_age){
        alert("Current age should be less than reteriment age");
    }
    else if(cur_age<20){
        alert("You are too young")
       
    }
    else{
        alert("You have a service period of", ret_age-cur_age);
    }
}

