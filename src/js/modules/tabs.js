const tabs = (headerTabsSelector, contentSelector, tabSelector, activeClass) => {

    const headerTabs = document.querySelector(headerTabsSelector);
    const tabContent = document.querySelectorAll(contentSelector);
    const tabs = document.querySelectorAll(tabSelector);

    const hideAllTabContents = () => {
        tabContent.forEach(cont => cont.style.display = 'none');
        tabs.forEach(tab => tab.classList.remove(activeClass));
    }

    const showOneTabContent = (index = 0) => {
        tabContent[index].style.display = 'block';
        tabs[index].classList.add(activeClass);
    }

    headerTabs.addEventListener('click', (evt) => {
        if (evt.target && 
            (evt.target.classList.contains(tabSelector.slice(1)) || 
            evt.target.parentNode.classList.contains(tabSelector.slice(1)))) {
                tabs.forEach((tab, i) => {
                    if (evt.target == tab || evt.target.parentNode == tab) {
                        hideAllTabContents();
                        showOneTabContent(i);
                    }
                })
        }
    })

    
    hideAllTabContents();
    showOneTabContent();
}

export default tabs;