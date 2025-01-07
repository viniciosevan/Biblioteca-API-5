import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Substitua pelo URL da sua API

const apiService = {
    async getBooks() {
        try {
            const response = await axios.get(`${API_URL}/books`);
            return response.data; // Retorna os dados dos livros
        } catch (error) {
            console.error('Erro ao buscar livros', error);
            throw error; // Lança o erro para que possa ser tratado nas views
        }
    },

    async addBook(bookData) {
        try {
            const response = await axios.post(`${API_URL}/books`, bookData);
            return response.data; // Retorna os dados do livro adicionado
        } catch (error) {
            console.error('Erro ao adicionar livro', error);
            throw error;
        }
    },

    // Adicione mais métodos para outras funcionalidades da sua API
};

export default apiService;