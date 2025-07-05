function myScope() {

    function btnNavBAr() {
        const btn = document.querySelector('#btn-mobile');
        const nav = document.querySelector('.nav-bar');

        btn.addEventListener('click', () => nav.classList.toggle('active'));
    }
    btnNavBAr();

    function closeMenuOnNavItemClick() {
        const navItems = document.querySelectorAll('.nav-item');
        const nav = document.querySelector('.nav-bar');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }
    closeMenuOnNavItemClick();

    /* quando o user clicar nesse botão ele será encaminhado até a sessão específica.*/
    function seeMore() {
        const seeMore = document.querySelector('.see-more').addEventListener('click', () => {
            const aboutMe = document.querySelector('.main-four');
            if (aboutMe) {
                aboutMe.scrollIntoView({ behavior: 'auto' });
            }
        });
    }
    seeMore();

    // Faz com que ao clicar na imagem uma nova guia seja aberta.
    function projectImagesLinks() {
        const images = document.querySelectorAll('.box-project .project-img');
        images.forEach(img => {
            img.addEventListener('click', (e) => {
                const link = img.getAttribute('data-link');
                if (link) {
                    window.open(link, '_blank');
                }
            });
        });
    }
    projectImagesLinks();

    // Faz com que ao clicar na logo a página role para o topo sem recarregar.
    function logoReload() {
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
    logoReload();


}
myScope();
