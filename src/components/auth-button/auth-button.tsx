import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'auth-button',
  styleUrl: 'auth-button.css',
  shadow: true,
})
export class AuthButton {
  /**
   * Buttons text
   */
  @Prop() text: string = '';

  /**
   * icons src
   */
  @Prop({attribute: 'icon-src'}) iconSrc: string;

  render() {
    return (
      <button>
        <div class="icon">
          { this.iconSrc ? (<img src={this.iconSrc} />) : null }
          <slot name="icon">
          </slot>
        </div>
        <span class="label">
          <slot>{this.text}</slot>
        </span>
      </button>
    );
  }
}
