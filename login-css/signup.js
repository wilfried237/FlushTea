// creating user
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPsw = document.getElementById('userPsw');
const userCpsw = document.getElementById('userCpsw');
const userCheck = document.getElementById('userCheck');

const btnReg= document.getElementById('btn-reg');

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (event) => {
  // prevent the default form submission behavior
  event.preventDefault();

  // perform your desired action or redirection here
  
});

btnReg.addEventListener('click',()=>{
        if(isEmpty()){
            if(userVerification(userName.value,userEmail.value)){
                let userDetails={
                    userName:userName.value,
                    userEmail:userEmail.value,
                    userPassword:userPsw.value
                };
                let users = JSON.parse(localStorage.getItem('users')) || [];
                users.push(userDetails);
                localStorage.setItem('users',JSON.stringify(users));
                alert('successfully been created');
                window.location.href = "login.html";
            }
        }
});
function isEmpty(){
    if(userName.value!=""){
        if(userEmail.value!=""){
            if(userPsw.value!=""){
                if(userCpsw.value!=""){
                    if(userCheck.checked)
                    {
                            return true;
                    }
                    else{
                        alert("check the check box");
                        return false;
                    }
                }
                else
                {
                    userCpsw.style.borderColor="red";
                    return false;
                }
        }
        else
        {
            userPsw.style.borderColor="red";
            return false;
        }
    }
    else
    {
        userEmail.style.borderColor="red";
        return false;
    }
}
    else
    {
        userName.style.borderColor="red";
        return false;
    }
}

function userVerification(usern,usere){
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let username = users.find(p=> p.userName == usern);
    let useremail = users.find(p=> p.userEmail == usere);
    if(username==undefined || username==null){
        if(useremail == undefined || useremail==null){
            return true;
        }
        else{
            alert('Sorry The email address is already in use');
            userEmail.style.borderColor="red";
            return false ;
        }      
    }
    else{
        alert('Sorry The user name is already used');
        userName.style.borderColor="red";
        return false;
    }
}

// function verificationPassword(){
//     if(userPsw.value === userCpsw.value){
//         return true;
//     }
//     else{
//         userPsw.style.borderColor="red";
//         userCpsw.style.borderColor="red";
//         return false;
//     }
// }
function inputHover(element){
    element.addEventListener('click',()=>{
        element.style.borderColor="green";
    });
    element.addEventListener('blur',()=>{
        element.style.borderColor="white";
    });
}
inputHover(userName);
inputHover(userEmail);
inputHover(userPsw);
inputHover(userCpsw);
