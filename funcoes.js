
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
function publicarNovoItem() {
    const inputNomeItem = document.getElementById('cadastrar-item-nome');
    const inputLocalItem = document.getElementById('cadastrar-item-local');
    const selectCategoria = document.getElementById('cadastrar-item-categoria');
    const gradeItens = document.getElementById('grade-produtos');
    const formPublicar = document.getElementById('form-publicar');

    if (!inputNomeItem) return;

    const nomeItemText = inputNomeItem.value.trim();
    const localItemText = inputLocalItem ? inputLocalItem.value.trim() : "";

    if (nomeItemText === '') {
        window.alert('Por favor, digite o nome do item que você encontrou!');
        inputNomeItem.focus();
        return;
    }

    const areaMarcada = document.querySelector('input[name="area"]:checked');

    const valorCategoria = selectCategoria ? selectCategoria.value : "pessoal";
    const valorArea = areaMarcada ? areaMarcada.value : "outro";

    let localFinalText = "Local Geral";
    if (localItemText !== "") {
        localFinalText = localItemText;
    } else if (areaMarcada) {
        localFinalText = areaMarcada.value.toUpperCase();
    }

    const imagemPadrao = "https://cdn-icons-png.flaticon.com/512/5024/5024484.png";
    
    const novoCardHtml = '<div class="borda_item" data-categoria="' + valorCategoria + '" data-local="' + valorArea + '">' +
        '<img src="' + imagemPadrao + '" height="90">' +
        '<p class="nome_item">' + nomeItemText + '</p>' +
        '<p class="desc_item">' + localFinalText + '</p>' +
        '<p style="font-size:10px">' + new Date().toLocaleDateString() + '</p>' +
    '</div>';

    if (gradeItens) {
        gradeItens.insertAdjacentHTML('afterbegin', novoCardHtml);
        window.alert('Item publicado com sucesso na grade!');
        
        if (formPublicar) {
            formPublicar.reset();
        }
    } else {
        window.alert('Erro: Não foi possível encontrar a grade de produtos na tela.');
    }
}
function executarFiltroLocal() {
    const caixasCategorias = document.querySelectorAll('input[name="categoria_filtro"]:checked');
    const categoriasSelecionadas = [];
    caixasCategorias.forEach(function(caixa) {
        categoriasSelecionadas.push(caixa.value);
    });

    const caixasLocais = document.querySelectorAll('input[name="area_filtro"]:checked');
    const locaisSelecionados = [];
    caixasLocais.forEach(function(caixa) {
        locaisSelecionados.push(caixa.value);
    });

    const filtroCategoriaAtivo = (categoriasSelecionadas.length > 0);
    const filtroLocalAtivo = (locaisSelecionados.length > 0);

    const itens = document.querySelectorAll('.borda_item');

    itens.forEach(function(item) {
        const categoriaDoItem = item.getAttribute('data-categoria');
        const localDoItem = item.getAttribute('data-local');

        if (!filtroCategoriaAtivo && !filtroLocalAtivo) {
            item.style.display = 'block';
            return;
        }

        if (!categoriaDoItem || !localDoItem) {
            item.style.display = 'none';
            return;
        }

        let bateuCategoria = true;
        if (filtroCategoriaAtivo) {
            bateuCategoria = categoriasSelecionadas.includes(categoriaDoItem);
        }

        let bateuLocal = true;
        if (filtroLocalAtivo) {
            bateuLocal = locaisSelecionados.includes(localDoItem);
        }

        if (bateuCategoria && bateuLocal) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
        }
    });
}
