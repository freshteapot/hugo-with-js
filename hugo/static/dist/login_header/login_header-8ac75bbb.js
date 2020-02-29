// Create a class for the element
class LoginHeader extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create text node and add word count to it
        const text = document.createElement('span');
        text.textContent = "Login, Logout, Sign up!!";

        // Append it to the shadow root
        shadow.appendChild(text);
    }
}

customElements.define('login-header', LoginHeader);
//# sourceMappingURL=login_header-8ac75bbb.js.map
