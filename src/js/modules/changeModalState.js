const changeModalState = (state) => {

    const windowForms = document.querySelectorAll('.balcon_icons_img');
    windowForms.forEach((form, i) => {
        form.addEventListener('click', () => {
            state['form'] = i;
        });
    });
    
    function heightAndWidth(selector) {
        const element = document.querySelector(selector);
        element.addEventListener('input', () => {
            element.value = element.value.replace(/\D/, '');
            state[element.id] = element.value;
        });
    }
    heightAndWidth('#width');
    heightAndWidth('#height');

    const windowType = document.querySelector('#view_type');
    state['type'] = 'tree';
    windowType.addEventListener('change', () => {
        state['type'] = windowType.value;
    });

    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((box, i) => {
        box.addEventListener('change', () => {
            checkboxes.forEach(box1 => {
                box1.checked = false;
            });
            box.checked = true;

            const prof = ['cold', 'warm']
            state['profile'] = prof[i];
        })
    })
}

export default changeModalState;