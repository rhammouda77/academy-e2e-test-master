class loginPage {

    // Elements

    get robotButton() {
        return cy.get('.robot').click();

    }

    typeUsername(username) {
        cy.get('#username').type(username);
    }

    get loginButton() {
        return cy.get(':nth-child(2) > .ant-btn').click();
    }

    typePassword(password) {
        cy.get('#password').type(password);
    }

    get submitButton() {
        return cy.get('.ant-btn').click();
    }

    // Methods

    load() {
        cy.visit('/');
    }

    robot() {
        this.robotButton.click
    };


    validlogin() {
        cy.fixture('credentials.json').then((credentials) => {
            this.typeUsername(credentials.valid.username);
            this.loginButton.click;
            this.typePassword(credentials.valid.password);
            this.submitButton.click
        });
    }
}


export default loginPage;


