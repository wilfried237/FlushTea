let users = JSON.parse(localStorage.getItem('users'));

const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('pswInput');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click',()=>{
    if(isEmpty()){
        if(verifyEmail(emailInput.value)){
            const userDetail= verifyEmail(emailInput.value);
            if(userDetail[1] == passwordInput.value){
                alert(`welcome ${userDetail[0]}`);
                window.location.href='../Menu.html';
            }
            else{
                alert('password is not correct');
                passwordInput.style.borderColor="red";
            }
        }    
    }

});

function verifyEmail(userEmail){
    const userLogin = users.find(p=> p.userEmail == userEmail);
    if(userLogin != undefined){
        return [userLogin.userName,userLogin.userPassword];
    }
    else{
        alert('The user is not found');
        emailInput.style.borderColor = "red";
        return false
    }
}

function isEmpty(){
    if(emailInput.value != ""){
        if(passwordInput.value != ""){
            return true;
        }
        else{
            passwordInput.style.value = "red";
            return false;
        }
    }
    else{
        emailInput.style.borderColor = "red"
        return false;
    }
}

function inputHover(element){
    element.addEventListener('click',()=>{
        element.style.borderColor="green";
    });
    element.addEventListener('blur',()=>{
        element.style.borderColor="white";
    });
}


inputHover(emailInput);
inputHover(passwordInput);