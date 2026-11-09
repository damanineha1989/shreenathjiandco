const certificateDialog = document.querySelector('#certificate-dialog');
if (certificateDialog) {
  const fullImage = document.querySelector('#certificate-full-image');
  const title = document.querySelector('#certificate-title');
  document.querySelectorAll('[data-certificate]').forEach(button => {
    button.addEventListener('click', () => {
      const thumbnail = button.querySelector('img');
      fullImage.src = button.dataset.certificate;
      fullImage.alt = thumbnail.alt;
      title.textContent = thumbnail.alt;
      certificateDialog.showModal();
    });
  });
  document.querySelector('#close-certificate').addEventListener('click', () => certificateDialog.close());
  certificateDialog.addEventListener('click', event => {
    if (event.target === certificateDialog) {
      const box = certificateDialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) certificateDialog.close();
    }
  });
}
