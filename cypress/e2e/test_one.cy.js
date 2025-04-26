describe('Menu button test', () => {
  it('Open and close menu', () => {
    cy.visit('https://static.live88.io/game/ld-client/latest/index.html?config_id=65ae3b3ff098df4e79a999e7&session_id=108903db-9d23-4d1f-9489-d2d386ea7e9b&lobby_url=&deposit_url=&device_platform=desktop&engine_base_url=wss://app.live88.io&sub_partner_id=otcasino&lang=en&ts=1745691053207')
    
    cy.GetDataTestID('button-click-open-menu-modal', {timeout: 10000}).click()
    cy.get('[id="navigation"]').should('exist').should('be.visible')
    
    cy.GetDataTestID('button-click-close-menu-button', {timeout: 10000}).click()
    cy.get('[id="navigation"]').should('not.exist')
  })
})