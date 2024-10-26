
// Определяем базовый URL для API
const BASE_URL = 'https://example.com/api';

// Функция для аутентификации пользователя
export const authUser  = ({ email, password }) => {
    // Формируем полный URL для запроса
    const url = `${BASE_URL}/auth/login`;

    // Выполняем fetch запрос
    return fetch(url, {
        ...createRequestConfig("POST"), // Получаем конфигурацию запроса
        body: JSON.stringify({ email, password }) // Преобразуем данные в JSON
    })
    .then(response => {
        // Проверяем, успешен ли ответ
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`); // Генерируем ошибку, если ответ не успешен
        }
        return response.json(); // Возвращаем ответ в формате JSON
    })
    .catch(error => console.error(error));
};

export const getMe = () => {
    const url = `${BASE_URL}/auth/me`
    return fetch(url,{
        ...createRequestConfig('GET')
    })
    .then(response => {
        return response.json()
    })
    .catch(error => console.error(error))
}

const createRequestConfig = (method, isFormData = false) => {
	const token = localStorage.getItem('accessToken')
	const config = {
		method: method,
		headers: {},
	}
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	if (!isFormData) {
		config.headers = {
			...config.headers,
			'Content-Type': 'application/json',
		}
	}

	return config
}