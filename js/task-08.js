const formRef = document.querySelector(`.login-form`);

formRef.addEventListener(`submit`, event => {
   event.preventDefault();

   const objectProp = {};
   
   objectProp.email = event.currentTarget.elements.email.value;
   objectProp.password = event.currentTarget.elements.password.value;

   function isEmpty(object) {
      for(const key of Object.keys(objectProp)){
        if(!objectProp[key]) {
         return true;
        }
      }
      return false;
   }

   if(!isEmpty(objectProp)){
      console.log(objectProp);
      event.currentTarget.reset();
      return;
   }
   alert(`Не всі поля заповненені`);
    
});

