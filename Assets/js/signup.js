document.addEventListener('DOMContentLoaded', (e)=>{
    document.addEventListener('submit', e=>{
        e.preventDefault()
        checkInput(e.target)
    })
})

//Check if input fields are filled and completed
function checkInput(form){
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const name = form.fullname.value,
    email = form.userEmail.value,
    password = form.userPassword.value,
    password2 = form.userPassword2.value

    if(name===""){
        alert("Name field has not been filled")
        form.fullname.focus()
    }
    else if(email ===""||!email.match(mailformat)){
        alert("Please write a valid email")
        form.userEmail.focus()
    }
    else if(password===""||password2==="" || password!= password2){
        alert([password.value, password2.value])
        form.userPassword.focus()
    }
    else{
        createUser(name,email,password)
    }

}
function createUser(name,email,password){
    fetch('http://localhost:3000/users',{
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
    
            'id': email,
            'name': name,
            'email' : email,
            'password': password
        })
    })
}