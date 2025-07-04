function myScope() {

    /* quando o user clicar nesse botão ele será encaminhado até a sessão específica.*/
    function seeMore() {
        const seeMore = document.querySelector('.see-more').addEventListener('click', () => {
            const aboutMe = document.querySelector('.main-four');
            if (aboutMe) {
                aboutMe.scrollIntoView({ behavior: 'smooth' });
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

    // Menu responsivo
    function menuToggle() {
        const menuBtn = document.querySelector('.menu-toggle');
        const navList = document.querySelector('.nav-list');
        if (menuBtn && navList) {
            menuBtn.addEventListener('click', () => {
                navList.classList.toggle('open');
            });
            navList.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navList.classList.remove('open');
                });
            });
        }
    }
    menuToggle();

}
myScope();
