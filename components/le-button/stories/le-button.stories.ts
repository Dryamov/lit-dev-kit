import '../le-button';
import {html, TemplateResult} from 'lit-html';
import {LeButton} from '../src/LeButton';

export default {
  title: 'le-button',
  component: 'le-button',
};

export const Base = ({showIcon, isDisabled, label}): TemplateResult =>
  html`
    <le-button showIcon=${showIcon} ?disabled=${isDisabled}>${label}</le-button>
  `;
Base.args = {showIcon: false, isDisabled: false, label: 'Simple'};
console.log(typeof Base);
