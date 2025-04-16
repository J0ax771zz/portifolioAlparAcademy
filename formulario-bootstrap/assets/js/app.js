const form = document.getElementById('formulario');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        successMessage.style.display = 'flex';
      } else {
        successMessage.style.display = 'none';
      }

      form.classList.add('was-validated');
    });