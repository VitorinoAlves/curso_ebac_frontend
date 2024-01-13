
const form = document.getElementById("form-comparar");

form.addEventListener('submit', function(e){
    e.preventDefault();
    const numeroA = document.getElementById('numeroA');
    const numeroB = document.getElementById('numeroB');
    const resultMessage = document.querySelector('.resultMessage');

    if(parseInt(numeroA.value)<parseInt(numeroB.value)){
        resultMessage.innerHTML=`Os números informados são válidos ${numeroA.value}<${numeroB.value}`;
        resultMessage.classList.remove('error');
        resultMessage.classList.add('success');
    } else {
        resultMessage.innerHTML=`Os números informados são inválidos ${numeroA.value}>=${numeroB.value}`;
        resultMessage.classList.remove('success');
        resultMessage.classList.add('error');
    }
});

