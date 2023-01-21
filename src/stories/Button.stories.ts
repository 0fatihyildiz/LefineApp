import type { Meta, Story } from '@storybook/vue3';
import Button from '../components/base/Button/index.vue';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Primary: Story = () => ({
  components: { Button },
  template:
    '<Button variant="primary" label="Button"> Primary Button </Button>',
});

export const Secondary: Story = () => ({
  components: { Button },
  template:
    '<Button variant="secondary" label="Button"> Secondary Button </Button>',
});

export const Constract: Story = () => ({
  components: { Button },
  template:
    '<Button variant="constract" label="Button"> Constract Button </Button>',
});
