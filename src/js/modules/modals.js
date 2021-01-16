const modals = () => {
    function bindModal(modalSelector, btnOpenSelector, btnCloseSelector) {

        const modal = document.querySelector(modalSelector);
        const btnsOpenModal = document.querySelectorAll(btnOpenSelector);
        const btnCloseModal = document.querySelector(btnCloseSelector);
    
        // let timerShowModal = setTimeout(showModal, 4000);
    
        function showModal() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            // clearTimeout(timerShowModal);
        }
    
        function hideModal() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    
        btnsOpenModal.forEach(btn => {
            btn.addEventListener('click', (evt) => {
                if (evt.target) showModal();
            });
        });
        
        btnCloseModal.addEventListener('click', hideModal);
    
        // обработчик на все окно, если тыкать на все, что вне окна - попадаешь как раз именно ы окно, 
        // если тыкаешь в само окно, попадаешь в его элементы
        modal.addEventListener('click', (evt) => {
            if (evt.target === modal) hideModal();
        })
    }

    bindModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close');
    bindModal('.popup', '.phone_link', '.popup .popup_close')
}

export default modals