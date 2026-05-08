const faqItems = document.querySelectorAll('.item');

faqItems.forEach((item, index) => {
    item.querySelector('.title').addEventListener('click', () => faqToggle(index))
});

function faqToggle(index) {
    const clickedItem = faqItems[index];
    const icon = clickedItem.querySelector('.title img');
    const isOpened = clickedItem.classList.contains('opened');

    for (let item of faqItems) {
        item.classList.remove('opened');
        item.querySelector('.title img').src = './assets/images/icon-plus.svg';
        item.querySelector('.title').setAttribute('aria-expanded', 'false');
    }

    if (isOpened) return;

    clickedItem.classList.add('opened');
    icon.src = './assets/images/icon-minus.svg';
    clickedItem.querySelector('.title').setAttribute('aria-expanded', 'true');

}