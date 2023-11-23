it('Assertions Demo', () => {

    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
    cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type("Putri Sakinah")
    cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type("082225943815")
    // cy.get(':nth-child(1) > div > .--x-77 > .-a-79 > .-hE-80').click().check('Affordable')
    cy.get('.-im-88').click()
    cy.get('#DatePicker0-label').click().type('11/22/2023');
    cy.get('.css-224').click();
    cy.get('.--Z-230')
    cy.get('#ErrorMsgId_r8bc17b753f0048ecb03794ef45037bb7 > span')

})