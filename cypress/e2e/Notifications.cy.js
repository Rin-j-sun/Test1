describe('Tests Vacancies', ()=>{
  it('Позитивный просмотр уведомлений', ()=>{
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

    cy.wait(1000)
    cy.log('Клик по "колокольчику"')
    cy.get('.header-container__desktop > .notification-bell > .notification-bell__icon__desktop > svg').click()

  })


    it('Негативный просмотр уведомлений', ()=>{
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

        cy.wait(1000)
        cy.log('Клик по "колокольчику"')
        cy.get('.header-container__desktop > .notification-bell > .notification-bell__icon__desktop > svg').click()

        cy.log('Клик по "прочитать всё"')
        cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .notifications-similar__header > .link').click()
        cy.log('Уведомления открываются но не прочитываются!')
      })
})
})
})