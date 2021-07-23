const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', function () {

        document.body.classList.toggle('dark');
        btnSwitch.classList.toggle('active');

});

let submitt = document.getElementById('submit');
let myAlert = document.getElementById('.alert');
let showw = document.getElementById('show')



submitt.addEventListener('click', (e) => {
        e.preventDefault()

        console.log('el formulario ha sido enviado')

        showw.style.opacity = 1;

})