import api from './api';

// Fetch all todos for the logged-in user
export const fetchTodos = async () => {
    const response = await api.get('/todo');
    return response.data.todos;
};

// Create a new todo
export const createTodo = async (title, description) => {
    const response = await api.post('/todo', {
        title,
        description,
        completed: false,
    });
    return response.data.todo;
};

// Update an existing todo
export const updateTodo = async (id, updates) => {
    const response = await api.put(`/todo/${id}`, updates);
    return response.data.todo;
};

// Delete a todo
export const deleteTodo = async (id) => {
    const response = await api.delete(`/todo/${id}`);
    return response.data;
};
