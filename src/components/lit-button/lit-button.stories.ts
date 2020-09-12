import { html  } from 'lit-element';
import './lit-button';

export default {
  component: 'lit-button',
  title: 'lit button',
};
export const Front = ({ label }:any) =>
  html`
    <lit-button>${label}</lit-button>
  `;

