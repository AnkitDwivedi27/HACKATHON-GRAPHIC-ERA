import CardDemo from './CardDemo';
import ButtonDemo from './ButtonDemo';

export const componentsList = [
  {
    name: 'Card',
    Component: CardDemo,
    code: `
<div class="display-flex flex-column bg-black" style="padding: 1rem; color: white;">
  <h3>Card Title</h3>
  <p>This is a card using custom classes.</p>
</div>
    `
  },
  {
    name: 'Button',
    Component: ButtonDemo,
    code: `
<button class="bg-black" style="padding: 0.5rem 1rem; color: white;">
  Click Me
</button>
    `
  }
];
