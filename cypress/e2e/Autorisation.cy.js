describe('Tests Authorization', ()=>{
  it('Позитивная авторизация', ()=>{
    cy.fixture('testData').then(data=>{
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

    })
  })

  it('Негативная авторизация', ()=>{
    cy.fixture('testData').then(data=>{
      cy.log('Переход на сайт')
      cy.visit(data.main_url)

      cy.log('Переход на авторизацию')
      cy.get('[href="/login"] >.button').should('be.visible').click()
      cy.url().should('include','login')

      cy.log('Ввод невалидного логина')
      cy.get('.form-input--text').type(data.none_existent_login).should('have.value', data.none_existent_login)

      cy.log('Ввод невалидного пароля')
      cy.get('.form-input--password').type(data.none_existent_password).should('have.value', data.none_existent_password)

      cy.log('Вход')
      cy.get(':nth-child(3) > .button').should('be.visible').click()

      cy.log('Проверка что появилось сообщение об ошибке')
      cy.get('.form-error > span').should('exist')

      cy.log('Проверка что остались на этой же странице')
      cy.url().should('include','login')

    })
  })

})