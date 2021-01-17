const tabs2 = (contentSelector, tabSelector, activeClass, display = 'block') => {

    const tabContent = document.querySelectorAll(contentSelector);
    const tabs = document.querySelectorAll(tabSelector);
    console.log( tabContent, tabs);

    const hideAllTabContents = () => {
        tabContent.forEach(cont => cont.style.display = 'none');
        tabs.forEach(tab => tab.classList.remove(activeClass));
    }

    const showOneTabContent = (index = 0) => {
        tabContent[index].style.display = display;
        tabs[index].classList.add(activeClass);
    }

    tabs.forEach((tab, tab_i) => {
        tab.addEventListener('click', () => {
            hideAllTabContents();
            tabContent.forEach((con, con_i) => {
                if (tab_i == con_i) showOneTabContent(con_i);
            })
            
        })
    });
    
    hideAllTabContents();
    showOneTabContent();
}

export default tabs2;