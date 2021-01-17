import './slider';
import modals from './modules/modals';
import tabs2 from './modules/tabs2';
import tabs from './modules/tabs';


window.addEventListener('DOMContentLoaded', () => {
    modals();
    // tabs2('.glazing_content', '.glazing_block', 'active');
    // tabs2('.decoration_content > div > div', '.no_click', 'after_click');
    tabs('.glazing_slider', '.glazing_content', '.glazing_block', 'active');
    tabs('.decoration_slider', '.decoration_content > div > div', '.no_click', 'after_click');
})
