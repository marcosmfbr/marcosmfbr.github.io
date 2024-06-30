// Script JavaScript opcional para validação de formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado antes da validação
    
    // Implemente sua lógica de validação aqui (exemplo básico)
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensagem = document.getElementById('mensagem').value.trim();
    
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }
    
    // Se a validação passar, você pode enviar o formulário para o servidor aqui
    alert('Formulário enviado com sucesso!');
    document.getElementById('contact-form').reset(); // Limpa o formulário após o envio
});
