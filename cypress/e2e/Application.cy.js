describe('Tests Application', ()=>{
  // it('Позитивное создание заявки', ()=>{
  //   cy.fixture('trueTestData').then(data=>{
  //     cy.log('Переход на сайт')
  //     cy.visit(data.main_url)
  //
  //     cy.log('Переход на авторизацию')
  //     cy.get('[href="/login"] >.button').should('be.visible').click()
  //     cy.url().should('include','login')
  //
  //     cy.log('Ввод валидного логина')
  //     cy.get('.form-input--text').type(data.existent_login).should('have.value', data.existent_login)
  //
  //     cy.log('Ввод валидного пароля')
  //     cy.get('.form-input--password').type(data.existent_password).should('have.value', data.existent_password)
  //
  //     cy.log('Вход')
  //     cy.get(':nth-child(3) > .button').should('be.visible').click()
  //
  //     cy.log('Проверка что переход в личный кабинет произведён успешно')
  //     cy.url().should('include','account/main')
  //
  //
  //     cy.log('Верификация')
  //     cy.get('.message-student > .button').click()
  //
  //     cy.log('Ввод данных роли')
  //     cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text').type(data.existent_oy).should('have.value', data.existent_oy)
  //     cy.get('.search-input__item').click()
  //
  //     cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text').type(data.existent_specific).should('have.value', data.existent_specific)
  //     cy.get('.search-input__item').click()
  //
  //     cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text').type(data.existent_kvalific).should('have.value', data.existent_kvalific)
  //
  //     cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(2)').click()
  //
  //     cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number').type(data.existent_start_year).should('have.value', data.existent_start_year)
  //
  //     cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number').type(data.existent_end_year).should('have.value', data.existent_end_year)
  //
  //     cy.get('.desktop-modal__content > .student-form > .button').click()
  //
  //     cy.log('Проверка оставления заявки')
  //     cy.get(':nth-child(3) > .menu-item__item-name').click()
  //
  //   })
  //
  //
  // })

  it('Негативное создание заявки', ()=>{
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


      cy.log('Верификация')
      cy.get('.message-student > .button').click()

      cy.log('Ввод данных роли')
      cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text').type(data.existent_oy).should('have.value', data.existent_oy)
      cy.get('.search-input__item').click()

      cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text').type(data.existent_specific).should('have.value', data.existent_specific)
      cy.get('.search-input__item').click()

      cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text').type(data.existent_kvalific).should('have.value', data.existent_kvalific)

      cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(2)').click()

      cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number').type(data.not_existent_start_year).should('have.value', data.not_existent_start_year)

      cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number').type(data.existent_end_year).should('have.value', data.existent_end_year)

      cy.log('Проверка что переход далее не действителен')
      cy.get('.desktop-modal__content > .student-form > .button').should('be.disabled')



    })


  })
})