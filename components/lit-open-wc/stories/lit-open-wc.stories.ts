import '../lit-open-wc';
import {html, TemplateResult} from 'lit-html';

export default {
  title: 'lit-open-wc',
  component: 'lit-open-wc',
};

export const Base = (): TemplateResult => html` <lit-open-wc></lit-open-wc> `;

export const CustomTitle = (): TemplateResult => html`
  <lit-open-wc title="Hello World"></lit-open-wc>
`;
