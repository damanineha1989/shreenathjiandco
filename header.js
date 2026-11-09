const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const updateHeaderHeight = () => {
    document.documentElement.style.setProperty('--site-header-height', `${siteHeader.getBoundingClientRect().height}px`);
  };
  updateHeaderHeight();
  new ResizeObserver(updateHeaderHeight).observe(siteHeader);
}

document.querySelectorAll('[data-copyright-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});
