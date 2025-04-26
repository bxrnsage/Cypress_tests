describe('Menu button test', () => {
    beforeEach(() => {
        cy.visit('https://static.live88.io/game/ld-client/latest/index.html?config_id=65ae3b3ff098df4e79a999e7&session_id=108903db-9d23-4d1f-9489-d2d386ea7e9b&lobby_url=&deposit_url=&device_platform=desktop&engine_base_url=wss://app.live88.io&sub_partner_id=otcasino&lang=en&ts=1745691053207')
    })

    it('Amount of "Highrollers" games',() => {
        cy.GetGameCategory('highrollers', {timeout: 10000}).click()
        cy.get('.tables-list').children('div').should('have.length', 5)
    })

    it('Amount of "Baccarat" games',() => {
        cy.GetGameCategory('baccarat', {timeout: 10000}).click()
        cy.get('.tables-list').children('div').should('have.length', 15)
    })

    it('Amount of "Roulette" games',() => {
        cy.GetGameCategory('roulette', {timeout: 10000}).click()
        cy.get('.tables-list').children('div').should('have.length', 10)
    })

    it('Amount of "Dragon Tiger" games',() => {
        cy.GetGameCategory('dragonTiger', {timeout: 10000}).click()
        cy.get('.tables-list').children('div').should('have.length', 2)
    })

    it('Amount of "Indian Games" games',() => {
        cy.GetGameCategory('indianGames', {timeout: 10000}).click()
        cy.get('.tables-list').children('div').should('have.length', 2)
    })
    
})