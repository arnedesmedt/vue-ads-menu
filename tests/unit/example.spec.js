import { shallowMount } from '@vue/test-utils';
import Menu from '@/components/Menu';

describe('Menu', () => {
    it('renders the menu', () => {
        const wrapper = shallowMount(Menu);
        expect(wrapper.name()).toBe('VueAdsMenu');
    });
});
