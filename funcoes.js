const formCadastro = document.getElementById('cadastrar');

if (formCadastro) {
    formCadastro.addEventListener('submit', function(event) {
        
        const senha = document.getElementsByName('senha')[0].value;
        const confirmar = document.getElementsByName('confirmar')[0].value;
        
        if (senha !== confirmar) {
            event.preventDefault(); 
            
            window.alert('As senhas não coincidem. Por favor, verifique se digitou igual nos dois campos.');
        }
    });
}