import Button from '../components/base/Button/index.vue';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => ({
  components: { Button },
  template: '<Button  primary label="Button"> Storybook </Button>',
});
