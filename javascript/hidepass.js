var x = true;
function hidePass(){
    if(x){
    document.getElementById('pass').type = "text";
        x = false;
    }else{
        document.getElementById('pass').type = "password";
        x = true;
    }
}

