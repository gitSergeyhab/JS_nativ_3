const forms = () => {
    const allForms = document.querySelectorAll('form'),
        allInputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(phone => {
        phone.addEventListener('input', () => {
            phone.value = phone.value.replace(/[A-Za-zА-Яа-я]/, '');
        })
    });

    const messages = {
        ok: 'datas was sent',
        wait: '... loading ...',
        fuck: 'something went wrong'
    };

    const postData = async (url, data) => {

        let result = await fetch(url, {
            method: 'POST',
            body: data
        })
        return await result.text()
    };

    const clearImputs = () => {
        allInputs.forEach(input => input.value = '')
    }
        
    allForms.forEach(form => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const messageElement = document.createElement('div');
            messageElement.classList.add('status');
            messageElement.textContent = messages.wait;
            form.appendChild(messageElement);

            const formData = new FormData(form);

            // console.log(formData)

            postData('assets/server.php', formData)
            .then(res => {
                console.log(res);
                messageElement.textContent = messages.ok
            })
            .catch( () => messageElement.textContent = messages.fuck )
            .finally( () => {
                clearImputs();
                setTimeout( () => messageElement.remove(), 3000);
            }
                
            )
        })
    })
};

export default forms;