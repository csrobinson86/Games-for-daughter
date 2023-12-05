document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('abc-list');

    list.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('open');
        }
    });
});