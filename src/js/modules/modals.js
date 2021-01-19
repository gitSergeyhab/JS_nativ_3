const modals = (state) => {
    function bindModal(modalSelector, btnOpenSelector, btnCloseSelector, closeClickOverlay, goOn = [0, {}]) {

        const modal = document.querySelector(modalSelector);
        const btnsOpenModal = document.querySelectorAll(btnOpenSelector);
        const btnCloseModal = document.querySelector(btnCloseSelector);
        const windows = document.querySelectorAll('[data-modal]');
    
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
                // при открытии количество ключей объекта должно быть рвно первому значению goOn 
                if (goOn[0] == Object.keys(goOn[1]).length) {
                    if (evt.target) {
                        windows.forEach(wind => {
                            wind.style.display = 'none';
                        });
                        showModal();
                    }
                }
            });
        });
        
        btnCloseModal.addEventListener('click', () => {
            hideModal();
            windows.forEach(wind => {
                wind.style.display = 'none';
            });
        });
    
        // обработчик на все окно, если тыкать на все, что вне окна - попадаешь как раз именно ы окно, 
        // если тыкаешь в само окно, попадаешь в его элементы
        modal.addEventListener('click', (evt) => {
            if (evt.target === modal && closeClickOverlay) {
                hideModal();
                windows.forEach(wind => {
                    wind.style.display = 'none';
                });
            }
        })
    }

    bindModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close', true);
    bindModal('.popup', '.phone_link', '.popup .popup_close', true);
    bindModal('.popup_calc', '.popup_calc_btn', '.popup_calc_close', true);
    bindModal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', false, [4, state]);
    bindModal('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', false, [5, state]);
}

export default modals