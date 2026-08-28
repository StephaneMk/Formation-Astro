const menu = document.querySelector('.menu');
const navigationLinks = document.querySelectorAll('#main-menu a');

const updateMenu = (expanded) => {
  menu?.setAttribute('aria-expanded', `${expanded}`);
  menu?.setAttribute(
    'aria-label',
    expanded ? 'Fermer le menu principal' : 'Ouvrir le menu principal',
  );
};

menu?.addEventListener('click', () => {
  const isExpanded = menu.getAttribute('aria-expanded') === 'true';
  updateMenu(!isExpanded);
});

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => updateMenu(false));
});
