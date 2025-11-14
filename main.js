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

    // form validation
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        //grab inputs by name
        const name = form.elements['name'];
        const email = form.elements['email'];
        let valid = true;

        // clear previous errors
        [name, email].forEach(el => el.classList.remove('is-invalid'));

        // validate name must not be empty
        if (!name.value.trim()) {
            name.classList.add('is-invalid');
            valid = false;
        }
        // validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            valid = false;
        }
        // if not valid, show error message
        if (!valid) {
            formStatus.textContent = 'Please correct the errors in the form.';
            formStatus.style.color = 'orange';
            return;
        }
        // simulated success
        formStatus.textContent = 'Thank you for your feedback!';
        formStatus.style.color = 'lightgreen';
        form.reset();
    });

    // keyboard accessibility for horizontal scroll
    document.querySelectorAll('.horizontal-scroll').forEach(container => {
        container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') { container.scrollBy({ left: 240, behavior: 'smooth' }); }
            if (e.key === 'ArrowLeft') { container.scrollBy({ left: -240, behavior: 'smooth' }); }
        });
        container.tabIndex = 0; // make focusable
    });
});

