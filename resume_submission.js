const axios = require('axios');

async function submitResume() {
    try {
        const resumeData = {
            // Здесь указываются данные вашего резюме
            name: 'Your Name',
            email: 'your_email@example.com',
            phone: '1234567890',
            // и другие поля, необходимые для подачи резюме
        };

        // Заголовки запроса с API-ключом
        const headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer YOUR_API_KEY',
        };

        // Отправить запрос на подачу резюме
        const response = await axios.post('https://api.careerbuilder.com/v1/application/submit', resumeData, { headers });

        if (response.status === 200) {
            console.log('Резюме успешно отправлено!');
        } else {
            console.log('Возникла ошибка при отправке резюме.');
        }
    } catch (error) {
        console.error('Произошла ошибка:', error.message);
    }
}

submitResume();


