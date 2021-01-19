const changeModalState = (state) => {

    const windowForms = document.querySelectorAll('.balcon_icons_img');
    windowForms.forEach((form, i) => {
        form.addEventListener('click', () => {
            state['form'] = i;
            console.log(state);
        });
    });
    
    function heightAndWidth(selector) {
        const element = document.querySelector(selector);
        element.addEventListener('input', () => {
            element.value = element.value.replace(/\D/, '');
            state[element.id] = element.value;
            console.log(state);
        });
    }
    heightAndWidth('#width');
    heightAndWidth('#height');

    const windowType = document.querySelector('#view_type');
    state['type'] = 'tree';
    windowType.addEventListener('change', () => {
        state['type'] = windowType.value;
        console.log(state);
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
            console.log(state);
        })
    })
    console.log(Object.keys(state).length);

}

export default changeModalState;