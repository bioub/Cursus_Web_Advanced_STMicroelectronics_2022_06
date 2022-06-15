import '../css/index.scss';

document.addEventListener('click', async () => {
  const { Horloge } = await import('./horloge');

  const divElt = document.querySelector('.horloge');
  const clock = new Horloge(divElt);
  clock.start();
});
