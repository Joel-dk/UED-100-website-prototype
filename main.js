document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    
    // Visability toggle show all / show less 
    const visibilityToggle = document.getElementById('visibilityToggle');
    
    if (visibilityToggle && grid) {
        visibilityToggle.addEventListener('click', () => {
            //toggles visability of posters 5-8
            grid.classList.toggle('show-all');
            const isShowingAll = grid.classList.contains('show-all');
            visibilityToggle.textContent = isShowingAll ? 'Show less' : 'Show all';
        });
        visibilityToggle.textContent = 'Show all';
    }

    // layout toggle grid / list view
    const layoutToggle = document.getElementById('layoutToggle');
    if (layoutToggle && grid) {
        layoutToggle.addEventListener('click', () => {
            //toggles between grid and list view
            grid.classList.toggle('list-view');
            const isListView = grid.classList.contains('list-view');
            layoutToggle.textContent = isListView ? 'Grid view' : 'List view';
        });
        layoutToggle.textContent = 'List view';
    }
});

