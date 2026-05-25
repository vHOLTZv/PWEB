function validar(event) {
    const nome = document.meuFormulario.elements['nome'].value;
    const comentario = document.meuFormulario.elements['comentario'].value;
    const radios = document.meuFormulario.elements['pesquisa'];


    if (nome.length < 10) {
        alert("O Nome não pode ter menos que 10 caracteres.");
        return false;
    }


    if (comentario.length < 20) {
        alert("O Comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    let selecionado = null;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selecionado = radios[i].value;
            break;
        }
    }

    if (!selecionado) {
        alert("A pesquisa é obrigatória. Por favor, selecione Sim ou Não.");
        return false; 
    }


    if (selecionado === "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else if (selecionado === "sim") {
        alert("Volte sempre à está página!");
    }

   
    return true; 
}