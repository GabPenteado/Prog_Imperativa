function Rest(nome, cardapio){
    this.nome=nome
    this.cardapio=cardapio
    this.entrada = () => console.log('Seja bem vindo ao',nome,', aqui está nosso cardápio:',cardapio.join('-'))
}
let restau = new Rest('Outback',['Costela', 'Massa','Sanduíche','Salada'])

restau.entrada()

        
        