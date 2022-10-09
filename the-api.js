customElements.define(
  'the-api',
  class extends HTMLElement {
    const style = document.createElement('style')
    style.innerText = ``
    this.insertAdjacentElement('afterbegin', style);
}
