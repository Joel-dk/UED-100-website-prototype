document.addEventListener('DOMContentLoaded', () => {
    const viewToggle = document.getElementById('viewToggle');
    const grid = document.getElementById('grid');
    
    if (viewToggle && grid) {
        viewToggle.addEventListener('click', () => {
            grid.classList.toggle('list-view');

            if (grid.classList.contains('list-view')) {
                viewToggle.textContent = 'Show grid';
            } else {
                viewToggle.textContent = 'Show list';
            }
    });

});