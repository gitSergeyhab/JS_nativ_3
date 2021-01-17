const changeModalState = (state) => {
    console.log("!!!111");

    const windowForms = document.querySelectorAll('.balcon_icons_img');
    const windowType = document.querySelector('#view_type');
    // const cold = document.querySelector('#cold');
    // const warm = document.querySelector('#warm');

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

    windowType.addEventListener('change', () => {
        state['type'] = windowType.value;
        console.log(state);
    });

    function temperature(selector) {
        const element = document.querySelector(selector);
        element.addEventListener('click', () => {
            state['temperature'] = element.id;
            console.log(state);
        })
    }

    temperature('#cold');
    temperature('#warm');

    // temperature


   

    


}

export default changeModalState;