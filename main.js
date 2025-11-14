document.addEventListener('DOMContentLoaded', () => {
    const viewToggle = document.getElementById('view-toggle');
    const grid = document.getElementById('grid');
    viewToggle.addEventListener('change', (event) => {
        grid.classList.toggle('list-view');
        viewToggle.textContent = grid.classList.contains('list-view') ? 'show grid' : 'Toggle grid/list'
    });

});