const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    const data = {
        email: email.value,
        password: password.value
    }

    // const data = Object.keys(evt.currentTarget.elements).reduce((acc, item) => {
    //     if (isNaN(item)) {
    //         acc[item] = evt.currentTarget.elements[item].value;
    //     }

    //     return acc;
    // }, {})

    console.log(data);

   if (!data.password || !data.email) {
        alert(
            "Всі поля повинні бути заповнені");
   }
    evt.currentTarget.reset();
}
