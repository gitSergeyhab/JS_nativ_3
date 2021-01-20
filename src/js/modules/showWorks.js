const showWorks = () => {

    const works = document.querySelector('.works');

    works.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (evt.target && evt.target.classList.contains('preview')) {

            const container = document.createElement("div"),
                img = document.createElement("img");

            const src = evt.target.parentNode.getAttribute('href')
            img.setAttribute('src', src);
            container.appendChild(img);
            
            container.classList.add('popup');
            container.style.justifyContent = 'center';
            container.style.alignItems = 'center';
            container.style.display = 'flex';
            works.appendChild(container);
        }

        if (evt.target && evt.target.matches('div.popup')) {
            evt.target.style.display = 'none';
        }
    })

};

export default showWorks;