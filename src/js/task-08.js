const formRef = document.querySelector(`.login-form`);

formRef.addEventListener(`submit`, event => {
   event.preventDefault();

   const objectProp = {};
   
   objectProp.email = isEmpty(event.currentTarget.elements.email.value);
   objectProp.password = isEmpty(event.currentTarget.elements.password.value);

   function isEmpty(string) {
         if(string === ""){
            alert(`Не всі поля заповненені`);
            return;
         }
         return string;
   }
   for(const key of Object.keys(objectProp)){
    console.log(`${key}: ${objectProp[key]};`)
   }

   event.currentTarget.reset();
});

