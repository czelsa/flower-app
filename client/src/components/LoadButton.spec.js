import { createLocalVue, shallowMount } from '@vue/test-utils';
import Button from './LoadButton.vue';

const localVue = createLocalVue();

describe('load-button', () => {
  it('renders correctly with default options', () => {
    const wrapper = shallowMount(Button, { localVue });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders correctly with custom options', () => {
    const wrapper = shallowMount(Button, {
      localVue,
      propsData: {
        type: 'secondary',
        disabled: true,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('validates button type', () => {
    const errorMock = jest.spyOn(global.console, 'error').mockImplementation();
    shallowMount(Button, {
      localVue,
      propsData: { type: 'invalid' },
    });
    expect(errorMock).toHaveBeenCalled();
    errorMock.mockRestore();
  });

  it('displays the loading status with a custom slot', () => {
    const wrapper = shallowMount(Button, {
      localVue,
      propsData: { loading: true },
      slots: { loading: '<p>Custom slot</p>' },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
