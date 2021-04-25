const btn = document.querySelectorAll('.tabs__nav-btn');
      tab = document.querySelectorAll('.tabs__item')

addListenerAllBtn();


function addListenerAllBtn () {
    btn.forEach((oneBtn) => {
        oneBtn.addEventListener('click', (e) => {
            if(!e.currentTarget.classList.contains('active')) {

                let tabId = e.currentTarget.getAttribute('data-tab');
                let currentTab = document.querySelector(tabId);
                removeActiveAll();
                e.currentTarget.classList.add('active');
                currentTab.classList.add('active');
            }

        })
    })
}

function removeActiveAll () {
    btn.forEach((oneBtn) => {
        oneBtn.classList.remove('active');
    })
    tab.forEach((oneTab) => {
        oneTab.classList.remove('active');
    })

}