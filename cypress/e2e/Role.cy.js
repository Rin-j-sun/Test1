describe('Tests Role', ()=>{
  it('Позитивный выбор роли', ()=>{
    cy.fixture('trueTestData').then(data=>{
      cy.log('Переход на сайт')
      cy.visit(data.main_url)

      cy.log('Переход на авторизацию')
      cy.get('[href="/login"] >.button').should('be.visible').click()
      cy.url().should('include','login')

      cy.log('Ввод валидного логина')
      cy.get('.form-input--text').type(data.existent_login).should('have.value', data.existent_login)

      cy.log('Ввод валидного пароля')
      cy.get('.form-input--password').type(data.existent_password).should('have.value', data.existent_password)

      cy.log('Вход')
      cy.get(':nth-child(3) > .button').should('be.visible').click()

      cy.log('Проверка что переход в личный кабинет произведён успешно')
      cy.url().should('include','account/main')


      cy.log('Выбор роли')
      cy.get('.page-nav__role-block > .button').should('be.visible').click()
      cy.get('.select-role-form > :nth-child(3)').click()

    })


  })
})