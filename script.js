
// =====================================
// MENU NAVIGASI MOBILE
// =====================================

const naufal_menuToggle = document.getElementById('naufal_menu_toggle');
const naufal_menu = document.getElementById('naufal_menu');

if (naufal_menuToggle && naufal_menu) {
    naufal_menuToggle.addEventListener('click', () => {
        const naufal_isOpen = naufal_menu.classList.toggle('naufal_menu_open');

        naufal_menuToggle.setAttribute(
            'aria-expanded',
            String(naufal_isOpen)
        );

        naufal_menuToggle.textContent = naufal_isOpen ? '✕' : '☰';
    });

    // Menutup menu setelah salah satu link diklik
    document.querySelectorAll('.naufal_nav_link').forEach((naufal_link) => {
        naufal_link.addEventListener('click', () => {
            naufal_menu.classList.remove('naufal_menu_open');

            naufal_menuToggle.setAttribute('aria-expanded', 'false');
            naufal_menuToggle.textContent = '☰';

            // Mengubah link navigasi yang aktif
            document.querySelectorAll('.naufal_nav_link').forEach((naufal_item) => {
                naufal_item.classList.remove('naufal_active');
            });

            naufal_link.classList.add('naufal_active');
        });
    });
}

// =====================================
// TAHUN OTOMATIS PADA FOOTER
// =====================================

const naufal_year = document.getElementById('naufal_year');

if (naufal_year) {
    naufal_year.textContent = new Date().getFullYear();
}
    