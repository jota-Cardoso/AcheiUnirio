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
const botaoBusca = document.getElementById('botao-busca');
const campoBusca = document.getElementById('campo-busca');

if (botaoBusca && campoBusca) {
    botaoBusca.addEventListener('click', function() {
        const termoPesquisa = campoBusca.value.toLowerCase();
        const itens = document.querySelectorAll('.borda_item');

        itens.forEach(function(item) {
            const nomeItemElemento = item.querySelector('.nome_item');
            
            if (nomeItemElemento) {
                const nomeItemTexto = nomeItemElemento.textContent.toLowerCase();
                
                if (nomeItemTexto.includes(termoPesquisa)) {
                    item.style.display = 'block'; 
                } else {
                    item.style.display = 'none';  
                }
            }
        });
    });
}
