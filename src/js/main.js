import './slider';
import modals from './modules/modals';
// import tabs2 from './modules/tabs2';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';



window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    changeModalState(modalState);
    modals();
    // tabs2('.glazing_content', '.glazing_block', 'active');
    // tabs2('.decoration_content > div > div', '.no_click', 'after_click');
    tabs('.glazing_slider', '.glazing_content', '.glazing_block', 'active');
    tabs('.decoration_slider', '.decoration_content > div > div', '.no_click', 'after_click');
    tabs('.balcon_icons', '.big_img > img', '.balcon_icons_img', 'do_image_more', 'inline-block');
    forms();
})
