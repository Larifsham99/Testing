self.addEventListener('install', (event) => {
  console.log('Apps sedang di-install...');
});

self.addEventListener('fetch', (event) => {
  // Biarkan kosong untuk simple PWA, memadai untuk lepaskan syarat install
});
