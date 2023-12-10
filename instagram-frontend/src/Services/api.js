import axios from 'axios'; // Importa o módulo 'axios' para fazer requisições HTTP

const api = axios.create({
    baseURL: 'http://localhost:3333' // Cria uma instância do axios com uma configuração de URL base definida como 'http://localhost:3333'
});

export default api; // Exporta a instância do axios como um módulo padrão para ser utilizado em outros arquivos
