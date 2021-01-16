import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';


window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing_content', '.glazing_block', 'active');
    tabs('.decoration_content > div > div', '.no_click', 'after_click');
})
