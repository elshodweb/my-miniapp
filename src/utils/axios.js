import axios from "axios";

// Создаем экземпляр Axios
const axiosInstance = axios.create({
  baseURL: "https://poker247tech.ru/get_horoscope/", // Базовый URL для запросов
  timeout: 10000, // Максимальное время ожидания ответа (в миллисекундах)
  headers: {
    "Content-Type": "application/json",
    // Дополнительные заголовки, если необходимо
  },
});


// Пример использования для отправки POST-запроса
export const getHoroscope = async (
  sign,
  language = "original",
  period = "today"
) => {
  try {
    const response = await axiosInstance.post("/", {
      sign,
      language,
      period,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching horoscope:", error);
    throw error;
  }
};

// Пример вызова функции

export default axiosInstance;
