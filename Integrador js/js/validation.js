//validation contacto
const formContact = document.querySelector(".contact-forms")
const nameContact = document.getElementById("contact_name")
const lastContact = document.getElementById("contact_last")
const mailContact = document.getElementById("contact_mail")
const phoneContact = document.getElementById("contact_phone")
const messageContact = document.getElementById("contact_message")

// validation register
const formRegister = document.querySelector(".register-forms")
const nameRegister = document.getElementById("register_name")
const passwordRegister = document.getElementById("register_password")
const lastRegister = document.getElementById("register_last")
const mailRegister = document.getElementById("register_mail")
const phoneRegister = document.getElementById("register_phone")
const bornRegister = document.getElementById("register_born")
//REGEX
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
const PHONE_REGEX = /^[0-9]{10}$/;

const isEmpty = value => value === '';
const minLength = (length, min) => length > min;
const isEmailValid = (email) => EMAIL_REGEX.test(email);
const isPhoneValid = (phone) => PHONE_REGEX.test(phone);

const showError = (input, message) => {
   const formInput = input.parentElement; 
   formInput.classList.remove('success');
   formInput.classList.add('error');
   const errorContainer = formInput.querySelector("small");
   errorContainer.textContent = message;
   errorContainer.classList.add('error');
}
const showSuccess = (input) => {
   const formInput = input.parentElement;
   formInput.classList.remove("error");
   formInput.classList.add("success");
   const errorContainer = formInput.querySelector("small");
   errorContainer.textContent = "";
}
const checkName = () => {
    let valid = false; 
    const min = 3;
    const name = nameContact.value.trim();
    if (isEmpty (name)){
        showError(nameContact, "Debes llenar este espacio con tu consulta");
    } else if (!minLength (name.length, min)) {
        showError(nameContact, `El nombre es demasiado corto`)
    } else {
        showSuccess(nameContact);
        valid = true;
    }
    return valid;
   };
   const checkLastName = () => {
       let valid = false;
       const min = 3;
       const lastName = lastContact.value.trim();
       if (isEmpty(lastName)) {
           showError(lastContact, 'El apellido es obligatrorio');
       } else if (!minLength (lastName.length, min)) {
        showError(lastContact, `El apellido es demasiado corto`)
        } else {
           showSuccess(lastContact);
           valid = true;
         }
         return valid;
       };
   const checkEmail = () => {
       let valid = false;
       const email = mailContact.value.trim();
       if (isEmpty(email)) {
         showError(mailContact, "El email es obligatorio");
       } else if (!isEmailValid(email)) {
         showError(mailContact, "El email es invalido");
       } else {
         showSuccess(mailContact);
         valid = true;
       }
       return valid;
     };
     const checkPhone = () => {
       let valid = false;
       const phone = phoneContact.value.trim();
       if (isEmpty(phone)) {
         showError(phoneContact, "El número de teléfono es obligatorio");
       } else if (!isPhoneValid(phone)) {
         showError(phoneContact, "El teléfono no es valido");
       } else {
         showSuccess(phoneContact);
         valid = true;
       }
       return valid;
     };
     const checkMessage = () => {
       let valid = false; 
       const min = 10;
       const message = messageContact.value.trim();
       if (isEmpty (message)){
           showError(messageContact, "Debes llenar este espacio con tu consulta");
       } else if (!minLength (message.length, min)) {
           showError(messageContact, "El mensaje es demasiado corto")
       } else {
           showSuccess(messageContact);
           valid = true;
       }
       return valid;
     }
     formContact.addEventListener("submit", (e) => {
       e.preventDefault();
     
       const isNameValid = checkName();
       const isLastNameValid = checkLastName();
       const isEmailValid = checkEmail();
       const isPhoneValid = checkPhone();
       const isMessageValid = checkMessage();
     
       const isFormValid =
         isNameValid && isLastNameValid && isEmailValid && isPhoneValid && isMessageValid;
     
       if (isFormValid) {
         formContact.submit();
         window.alert("Mensaje enviado!")
       }
     });
     
     const debounce = (fn, delay = 500) => {
       let timeoutId;
       return (...args) => {
         if (timeoutId) clearTimeout(timeoutId);
         timeoutId = setTimeout(() => {
           fn.apply(null, args);
         }, delay);
       };
     };
     
     formContact.addEventListener("input", debounce((e) => {
         switch (e.target.id) {
           case "contact_name":
             checkName();
             break;
           case "contact_last":
             checkLastName();
             break;
           case "contact_mail":
             checkEmail();
             break;
           case "contact_message":
             checkMessage();
             break;
           case "contact_phone":
             checkPhone();
             break;
         }
       })
     );