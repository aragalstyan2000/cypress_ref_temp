describe('template spec', () => {
    const randomData = Date.now().toString()
    beforeEach(() => {
        cy.prepareData(randomData)
    })

    it('Positive', function () {
        cy.createPaste(randomData, this.data).then(response => {
            expect(response.status).to.eq(201)
            const id = response.body.id

            cy.getPaste(id).then(response => {
                expect(response.body.paste.id).to.not.be.null
                expect(response.body.paste.id).to.eq(id)
                expect(response.body.paste.description).to.eq("test")
                expect(response.body.paste.sections[0].contents).to.eq(randomData)
            })

            cy.deletePaste(id).then(response => {
                expect(response.body.success).to.be.true
            })
        })
    })

    it('Negative', function () {
        cy.createPaste(randomData, "").then(response => {
            expect(response.body.errors[0].message).to.eq("The sections field is required.")
        })
    })
})
