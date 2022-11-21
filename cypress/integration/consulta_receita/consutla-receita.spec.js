/// <reference types="cypress" />

describe('Consulta cpf na receita', () => {
  beforeEach(() => {
  
    cy.visit('https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/ConsultaPublica.asp')
    cy.viewport(1366, 768)
  })

  it('A validação anti-robô não foi realizada corretamente. Por favor, tente novamente', () => {
    cy.gui_consulta_anti_robo_nao_foi_realizada()
    cy.contains('A validação anti-robô não foi realizada corretamente. Por favor, tente novamente.').should('be.visible') 
    
});

it('Realiza consulta do cpf na receita', () => {
    cy.gui_consulta_cpf()

});

it('Limpa campos informados', () => {
    cy.gui_limpar_campos()
    cy.contains('Preencha os campos abaixo com os dados solicitados.').should('be.visible') 
});

})
