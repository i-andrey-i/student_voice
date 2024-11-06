
// Базовый URL для API
const BASE_URL = 'https://studentvoice.slavagm.ru/api'

export const authUser  = async({ username, password }) => {
    const url = `${BASE_URL}/auth/login`;
    try{
        // Выполняем fetch запрос
        const response = await fetch(url, {
            ...createRequestConfig("POST"), // Получаем конфигурацию запроса
            body: JSON.stringify({ username, password }) // Преобразуем данные в JSON
        })

        // Проверяем, успешен ли ответ
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`); // Генерируем ошибку, если ответ не успешен
        }
        return await response.json(); // Возвращаем ответ в формате JSON
    }
    catch(error) {console.error(error)};
};

export const getMe = async() => {
    const url = `${BASE_URL}/ тут что-то будет`
    try{
        const response = await fetch(url,{
            ...createRequestConfig('GET')
        })
        return await response.json()
    }
    catch(error) {console.error(error)}
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