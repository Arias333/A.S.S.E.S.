// CONTROLADOR DE LA VENTANA MODAL DE BIOGRAFÍA
const bioBtn = document.getElementById('bio-btn');
const bioModal = document.getElementById('bio-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

// Abrir modal al hacer clic en tu nombre
bioBtn.addEventListener('click', () => {
  bioModal.style.display = 'flex';
});

// Cerrar modal al hacer clic en la "X"
closeModalBtn.addEventListener('click', () => {
  bioModal.style.display = 'none';
});

// Cerrar modal si hacen clic fuera de la caja blanca
bioModal.addEventListener('click', (e) => {
  if (e.target === bioModal) {
    bioModal.style.display = 'none';
  }
});