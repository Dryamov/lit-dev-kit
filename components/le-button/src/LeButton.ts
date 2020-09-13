import {LitElement, html, TemplateResult, property} from 'lit-element';

export class LeButton extends LitElement {
  @property({type: Boolean})
  isDisabled = false;

  @property({type: String, reflect: true, attribute: 'foo-bar'})
  label = 'Loading';

  @property({type: String})
  showIcon = 'Cross';

  constructor() {
    super();
    this.label = '111';
  }
  render(): TemplateResult {
    return html` <button><slot>${this.label}</slot></button> `;
  }
}
