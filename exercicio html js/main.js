const form = document.getElementById('form-confirm')

let formValid = false;

function numberValid (ValA, ValB) {
    return ValB > ValA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let ValA = parseFloat(document.getElementById('valor-a').value);
    let ValB = parseFloat(document.getElementById('valor-b').value);

    const messageSuccess = `Formulário enviado com sucesso! Verificando: <b>${ValA} é menor que ${ValB}</b>`;
    const containerMessaggeSuccess = document.querySelector('.success-message');
    const messageError = `${ValB} é menor que ${ValA}.`;
    const containerMessageError = document.querySelector('.error-message')

    formValid = numberValid(ValA, ValB);

    if (formValid) {
        document.querySelector('.error-message').style.display = 'none';
        containerMessaggeSuccess.innerHTML = messageSuccess;
        containerMessaggeSuccess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        ValA.value = '';
        ValB.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containerMessageError.innerHTML = messageError;
        containerMessaggeSuccess.style.display = 'none';
    }
})



