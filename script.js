const ent = document.querySelectorAll(".inp");
/*
ent.forEach(element =>
    element.addEventListener("focus", function() {
        element.style.backgroundColor = '#00FF00';
    })
);
*/
 ent.forEach(element =>
    element.addEventListener("mouseover", function() {
        element.style.backgroundColor = '#00FF00';
     })
    
 );
 ent.forEach(element => 
    element.addEventListener('mouseout', function(){
        element.style.backgroundColor = '#252525';
        
    })
);

const nome = document.getElementById('#name');
const email = document.getElementById('#email');
const fone = document.getElementById('#fone');
const btn = document.querySelector('.btn');

function verifica(e) {
    e.preventDefault();
    let nome = document.forms['formulario']['nome'].value;   
        if(nome.length < 5 || nome == ""){
            alert('campo invalido nome');
            return false;
        }
    let email = document.forms['formulario']['email'].value;
        if(email == ""){
            //form.classList.remove('.ativo');
            //email.classList.add(".ativo");
            alert('campo invalido de email');
            return false;
        }    
    let fone = document.forms['formulario']['fone'].value;
        if(fone == ""){
            alert('campo invalido de telefone');
            return false;
        }    
    
}

btn.addEventListener('click', verifica);










