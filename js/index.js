const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', function () {

                document.body.classList.toggle('dark');
                btnSwitch.classList.toggle('active');

        });

