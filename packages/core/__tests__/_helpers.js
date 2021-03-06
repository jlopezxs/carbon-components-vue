import { shallowMount } from '@vue/test-utils';

export const testComponent = {
  propsAreRequired: (component, props) => {
    test.each(props)('has a required prop: %s', prop => {
      expect(component.props[prop].required).toBe(true);
    });
  },

  propsAreString: (component, props) => {
    test.each(props)('has a prop of String type: %s', prop => {
      expect(component.props[prop].type).toBe(String);
    });
  },

  propsHaveDefault: (component, props) => {
    test.each(props)('has a prop with a default: %s', prop => {
      expect(component.props[prop].default).toBeDefined();
    });
  },
};

const PLACEMENT_STRING = 'Now is > the FOO &amp; of &#128169; our (discontent)';

export const testInstance = {
  propStringIsRendered: (component, prop, selector) => {
    test(`renders the String prop: ${prop}`, () => {
      expect(
        shallowMount(component, {
          propsData: { [prop]: PLACEMENT_STRING },
        })
          .find(selector)
          .text()
      ).toMatch(PLACEMENT_STRING);
    });
  },
};
