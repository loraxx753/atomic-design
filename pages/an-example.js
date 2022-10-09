customElements.define(
  'an-example',
  class extends HTMLElement {
    const style = document.createElement('style')
    style.innerText = ``
    this.insertAdjacentElement('afterbegin', style);
}
