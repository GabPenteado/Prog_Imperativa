let microondas = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8,
    aquecer: (comida, tempo)=>{
        switch(comida) {
            case 'pipoca':
            tempoPadrao = microondas.pipoca
            return acao(tempo, tempoPadrao)

            case 'macarrao':
            tempoPadrao = microondas.macarrao    
            return acao(tempo, tempoPadrao)

            case 'carne':
            tempoPadrao = microondas.carne 
            return acao(tempo, tempoPadrao)

            case 'feijao':
            tempoPadrao = microondas.feijao
            return acao(tempo, tempoPadrao)

            case 'brigadeiro':
            tempoPadrao = microondas.brigadeiro
            return acao(tempo, tempoPadrao)

            default:
            return 'Prato inexistente.'

        }
    }
}


function acao(tempoInfo, tempoPadrao){
    if(tempoInfo > 3* tempoPadrao){
        return 'Kabumm!'
    }else if(tempoInfo >= 2* tempoPadrao){
        return 'A comida queimou.'
    }else if(tempoInfo < tempoPadrao){
        return 'Tempo insuficiente.'
    }else if(tempoInfo >= tempoPadrao && tempoInfo < 2* tempoPadrao){
        return 'Prato pronto, bom apetite.'
    }
}

console.log(microondas.aquecer('pipoca', 15))