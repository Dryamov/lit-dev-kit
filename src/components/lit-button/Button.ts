import { html } from 'lit-html';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, onClick }:any) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return html`
    <button
      type="button"
      class=${['storybook-button', `storybook-button--${size || 'medium'}`, mode].join(' ')}
      style=background-color:${backgroundColor}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};
