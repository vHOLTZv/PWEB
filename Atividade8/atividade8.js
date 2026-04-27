

class PesquisaCinema {
    constructor() {
        this.respostas = [];
    }

    adicionarResposta(idade, sexo, opiniao) {
        this.respostas.push({ idade, sexo, opiniao });
    }

    calcularResultados() {
        const total = this.respostas.length;
        if (total === 0) return "Nenhuma resposta registrada.";

        let somaIdades = 0;
        let maisVelha = -Infinity;
        let maisNova = Infinity;
        let qtdPessimo = 0;
        let qtdOtimoBom = 0;
        
        let contagemSexo = {
            feminino: 0,
            masculino: 0,
            outros: 0
        };

        this.respostas.forEach(resp => {
        
            somaIdades += resp.idade;
            if (resp.idade > maisVelha) maisVelha = resp.idade;
            if (resp.idade < maisNova) maisNova = resp.idade;

         
            if (resp.opiniao === 1) {
                qtdPessimo++;
            } else if (resp.opiniao === 3 || resp.opiniao === 4) {
                qtdOtimoBom++;
            }

          
            const sexoFormatado = resp.sexo.toLowerCase();
            if (contagemSexo[sexoFormatado] !== undefined) {
                contagemSexo[sexoFormatado]++;
            } else {
                contagemSexo.outros++; 
            }
        });

        const mediaIdade = somaIdades / total;
        const porcentagemOtimoBom = (qtdOtimoBom / total) * 100;

        return {
            "Média de idade": mediaIdade.toFixed(2),
            "Idade da pessoa mais velha": maisVelha,
            "Idade da pessoa mais nova": maisNova,
            "Quantidade de respostas 'Péssimo'": qtdPessimo,
            "Porcentagem de respostas 'Ótimo' e 'Bom'": porcentagemOtimoBom.toFixed(2) + "%",
            "Mulheres": contagemSexo.feminino,
            "Homens": contagemSexo.masculino,
            "Outros": contagemSexo.outros
        };
    }
}

const pesquisa = new PesquisaCinema();

for (let i = 0; i < 45; i++) {
    let idade = parseInt(prompt(`Pessoa ${i + 1} - Digite a idade:`));
    let sexo = prompt(`Pessoa ${i + 1} - Digite o sexo (feminino, masculino, outros):`).toLowerCase();
    let opiniao = parseInt(prompt(`Pessoa ${i + 1} - Digite a opinião (4=ótimo, 3=bom, 2=regular, 1=péssimo):`));
    
    pesquisa.adicionarResposta(idade, sexo, opiniao);
}

console.log(pesquisa.calcularResultados());