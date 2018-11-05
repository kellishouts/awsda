document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';

    //configures tableau graphic
    var divElement = document.getElementById('viz1541398310162');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '100%';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);


    //configures assault by age graphic
    var assaultDivElement = document.getElementById('viz1541398984149');
    var vizAssaultElement = assaultDivElement.getElementsByTagName('object')[0];
    vizAssaultElement.style.width = '100%';
    vizAssaultElement.style.height = (assaultDivElement.offsetWidth * 0.75) + 'px';
    vizAssaultElement.parentNode.insertBefore(scriptElement, vizAssaultElement);

    //configures assault by county
    var divCountyElement = document.getElementById('viz1541399127056');
    var vizCountyElement = divCountyElement.getElementsByTagName('object')[0];
    vizCountyElement.style.width = '100%';
    vizCountyElement.style.height = (divCountyElement.offsetWidth * 0.75) + 'px';
    vizCountyElement.parentNode.insertBefore(scriptElement, vizCountyElement);
});
