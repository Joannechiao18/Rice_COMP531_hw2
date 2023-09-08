function validate(){
    var name_input = document.querySelector("#displayName");
    var email_input = document.querySelector("#email");
    var phone_input = document.querySelector("#phone");
    var zip_input = document.querySelector("#zip");
    var pass_input = document.querySelector("#pass");
    var rePass_input = document.querySelector("#rePass");
    
    var nameField = document.getElementById("nameField");
    var emailField = document.getElementById("emailField");
    var phoneField = document.getElementById("phoneField");
    var zipField = document.getElementById("zipField");
    var passField = document.getElementById("passField");
    var rePassField = document.getElementById("rePassField");

    const submitButton = document.getElementById("submit");

    var errorName=document.getElementById("errorName");
    var errorEmail=document.getElementById("errorEmail");
    var errorPhone=document.getElementById("errorPhone");
    var errorZip=document.getElementById("errorZip");
    var errorPass=document.getElementById("errorPass");
    var errorRePass=document.getElementById("errorRePass");

    function valid(){
        function checkName(name) {
            if (name ===''){
                errorName.style.display='block';
                errorName.textContent="Please enter display name";
            }
            else{
                nameField.textContent=name;
                name_input.value='';
                errorName.style.display='block';
                errorName.style.color="green";
                errorName.textContent="Display name updated"
            } 
        }

        function checkEmail(email) {
            if (email==='' || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
                errorEmail.style.display='block';
                errorEmail.textContent="Please enter email in this format: a@b.co";
            }
            else{
                emailField.textContent=email;
                email_input.value='';
                errorEmail.style.display='block';
                errorEmail.style.color="green";
                errorEmail.textContent="Email updated"
            } 
        }

        function checkPhone(phone) {
            if (phone==='' || !(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone))) {
                errorPhone.style.display='block';
                errorPhone.textContent="Please enter phone in this format: 555-555-5555";
            } else {
                phoneField.textContent=phone;
                phone_input.value='';
                errorPhone.style.display='block';
                errorPhone.style.color="green";
                errorPhone.textContent="Phone updated"
            }
        }

        function checkZip(zip) {
            if (zip==='' || !(/^\d{5}(-\d{4})?$/.test(zip))) {
                errorZip.style.display='block';
                errorZip.textContent="Please enter zip code in this format: 77030";
            } else {
                zipField.textContent=zip;
                zip_input.value='';
                errorZip.style.display='block';
                errorZip.style.color="green";
                errorZip.textContent="Zip code updated"
            }
        }

        function checkPass(pass, rePass) {
            if (pass==='') {
                errorPass.style.display='block';
                errorPass.textContent="Please enter password";
            } else if(pass!=rePass){
                errorRePass.style.display='block';
                errorRePass.textContent="Password mismatch";
            }
            else {
                passField.textContent="'"+"*".repeat(pass.length)+"'";
                rePassField.textContent="'"+"*".repeat(pass.length)+"'";
                pass_input.value='';
                rePass_input.value='';
                errorPass.style.display='block';
                errorPass.style.color="green";
                errorPass.textContent="Password updated"
                errorRePass.style.display='block';
                errorRePass.style.color="green";
                errorRePass.textContent="Password confirmed"
            }
        }

        var check_name=checkName(name_input.value);
        var check_email=checkEmail(email_input.value);
        var check_phone=checkPhone(phone_input.value);
        var check_zip=checkZip(zip_input.value);
        var check_pass=checkPass(pass_input.value, rePass_input.value);

        return check_name && check_email && check_phone && check_zip && check_pass;
    }
    valid()
}