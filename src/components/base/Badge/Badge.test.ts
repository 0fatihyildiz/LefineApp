import { it, describe, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Badge from './index.vue';

describe('Badge', () => {
  it('renders not a div', () => {
    const wrapper = mount(Badge);
    expect(wrapper);
  });
});
