/// <reference types="Cypress" />

describe("Email validation", function(){
    it("should validate valid email",()=>{
        cy.request({
            method:"POST",
            url:"https://smilemoney-sandbox.renmoney.com/agent/email_validation",
            body: {
                "email":"adada@yopmail.com",
                "networkKey":"4342424"
            }
        }).should((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.status).to.eql("successful")
            expect(response.body.message).to.eq("User found")
        });
    })

    it("should not validate empty email",()=>{
        cy.request({
            method:"POST",
            url:"https://smilemoney-sandbox.renmoney.com/agent/email_validation",
            failOnStatusCode: false,
            body: {
                "email":"",
                "networkKey":"4342424"
            }
        }).should((response) =>{
            expect(response.status).to.eq(400)
            expect(response.body.status).to.eql("failed")
            expect(response.body.message).to.eq("Email is empty or invalid,Invalid Email")
        });
    })

    it("should not validate invalid email",()=>{
        cy.request({
            method:"POST",
            url:"https://smilemoney-sandbox.renmoney.com/agent/email_validation",
            failOnStatusCode:false,
            body: {
                "email":"austin",
                "networkKey":"4342424"
            }
        }).should((response) =>{
            expect(response.status).to.eq(400)
            expect(response.body.status).to.eql("failed")
            expect(response.body.message).to.eq("Invalid Email")
        });
    })
    
});