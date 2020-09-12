import {LitElement, html, customElement, property, css, TemplateResult} from 'lit-element';

@customElement('lit-button')
export class LitButton extends LitElement {
  static styles = css`
    :host {
      border: solid 1px gray;
      color: red;
    }
  `;

  @property({type: String})
  label = 'Label';

  render():TemplateResult {
    return html`
      <button>
        ${this.label}
      </button>
    `;
  }
}