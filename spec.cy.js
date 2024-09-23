


describe('Visitar site', () => {
  it('Acessar o login', () => {
    cy.visit('https://joaovitorlopesvieira.github.io/PaginaDeCadastroDeUsuario/');

    cy.get('#username').type('joao vitor lopes');
    cy.wait(2000);
    cy.get('#password').type('123456789')
    cy.wait(2000)
    cy.get('button').click();
  });
    
});


