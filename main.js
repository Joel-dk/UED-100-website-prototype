// de Kleyn, Joel UED100 User Experience Design ID: A00174772

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const layoutToggle = document.getElementById('layoutToggle');
    const visibilityToggle = document.getElementById('visibilityToggle');

// ==================================================================================================
//                                  SHOW ALL/ SHOW LESS
// ==================================================================================================
//toggles visability of the grid items beyond the 4th by adding/removing the 'show all' class
//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList 

    if (visibilityToggle && grid) {
        visibilityToggle.addEventListener('click', () => {
            //toggles visability of posters 5-8
            grid.classList.toggle('show-all');

            const isShowingAll = grid.classList.contains('show-all');
            visibilityToggle.textContent = isShowingAll ? 'Show less' : 'Show all';
        });
        visibilityToggle.textContent = 'Show all';
    }
// ==================================================================================================
//                                    GRID / LIST VIEW
// ==================================================================================================
// adds/removes 'list-view' class to change layout style between grid and list
    if (layoutToggle && grid) {
        layoutToggle.addEventListener('click', () => {
            //toggles between grid and list view
            grid.classList.toggle('list-view');
            const isListView = grid.classList.contains('list-view');

            layoutToggle.textContent = isListView ? 'Grid view' : 'List view';
        });
        layoutToggle.textContent = 'List view';
    }
// =================================================================================================
//                                  CONTACT FORM VALIDATION
// =================================================================================================
//adds validation to form submit event, prevents default action and provides inline feedback
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event 
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (form && formstatus){
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
    }
// =======================================================================================================
//                                 KEYBOARD SCROLL FOR TRENDING CAROUSEL
// =======================================================================================================
//allows keyboard navigation for carousel. adds a tabindex so containers are focusable by keyboard.
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll 
    document.querySelectorAll('.horizontal-scroll').forEach(container => {
        container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') { container.scrollBy({ left: 240, behavior: 'smooth' }); }
            if (e.key === 'ArrowLeft') { container.scrollBy({ left: -240, behavior: 'smooth' }); }
        });
        container.tabIndex = 0; // make focusable
    });

// ==================================================================================================
//                                  ACCOUNT PAGE - TOGGLE PILL INTERACTIONS
// ==================================================================================================
// toggles active state on pill buttons in account page
    document.querySelectorAll('.toggle-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            const isPressed = btn.getAttribute('aria-pressed') === 'true';
            btn.setAttribute('aria-pressed', String(!isPressed));
            btn.textContent = isPressed ? 'Off' : 'On'; 
        });
    });
});


