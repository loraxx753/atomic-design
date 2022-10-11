customElements.define('the-api', class extends HTMLElement {
  static get observedAttributes() { return ['endpoint', 'base']; }

  async updateData() {
    const url = this.hasAttribute('base') 
      ? new URL (this.getAttribute('endpoint'), this.getAttribute('base')) 
      : new URL(this.getAttribute('endpoint'))
    this.response = await (await fetch(url)).json()
    // If an array, pick a random item
    if(Array.isArray(this?.response)) {
      this.response = this.response[Math.floor(Math.random() * this.response.length)]
    }
    for (const [key, value] of Object.entries(this.response)) {
      [...document.querySelectorAll(`[api-key=${key}]`)].map(element => element.innerText = value)
    }
  }
  
  async connectedCallback() {
    this.updateData(this.getAttribute('endpoint'))
  }
  
   attributeChangedCallback(name, oldValue, newValue) {
     !!oldValue ? this.updateData(newValue) : null;
  }

})
