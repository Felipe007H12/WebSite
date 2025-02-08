document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Validação básica
      if (!name || !email || !message) {
          alert("Por favor, preencha todos os campos.");
          return;
      }

      // Exibir uma mensagem de sucesso
      alert(`Obrigado, ${name}! Sua mensagem foi enviaada com sucesso.`);

      // Limpar os campos após o envio
      form.reset();
  });
});
