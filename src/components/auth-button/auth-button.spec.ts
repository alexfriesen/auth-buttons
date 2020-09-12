import { newSpecPage } from '@stencil/core/testing';
import { AuthButton } from './auth-button';

describe('auth-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AuthButton],
      html: '<auth-button></auth-button>',
    });
    expect(root).toEqualHtml(`
      <auth-button>
        <mock:shadow-root>
          <button>
            <span>Sign In with</span>
          </button>
        </mock:shadow-root>
      </auth-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AuthButton],
      html: `<auth-button icon-src="test.png">test</auth-button>`,
    });
    expect(root).toEqualHtml(`
      <auth-button icon-src="test.png">
        <mock:shadow-root>
          <button>
            <div class="icon"><img src="test.png" /></div>
            <span class="label">test</span>
          </button>
        </mock:shadow-root>
      </auth-button>
    `);
  });
});
