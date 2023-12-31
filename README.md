# Weather-widget

Проект представляет собой виджет погоды, который позволяет пользователю получать актуальную информацию о погоде в различных городах.

Посмотреть работу - [weather-widget](https://sivchenko-anna.github.io/weather-widget/)


## Стек
- JavaScript
- HTML (БЭМ)
- SCSS

### Описание

Проект разработан на чистом JavaScript с использованием асинхронных запросов (fetch) к серверу. Код разделен на модули, что обеспечивает лучшую организацию и поддерживаемость. Бизнес-логика и работа с пользовательским интерфейсом также разделены для повышения читабельности и модульности.

Приложение имеет адаптивную и кроссбраузерную вёрстку, которая корректно отображается на различных устройствах и в разных браузерах. Макет создан с использованием HTML и SCSS, с использованием методологии БЭМ для именования классов.

Вместо иконок, поставляемых сервером, используются пользовательские иконки, которые имеют такое же название и находятся в папке weather-icons. Это придает приложению уникальный и персонализированный вид.

### Функциональность приложения

- Ввод названия города и поиск: Пользователь может ввести название города, после чего нажать на кнопку поиска, чтобы получить данные о погоде
- Три вкладки с информацией: После поиска, пользователь может просмотреть краткую информацию о текущей погоде, подробную информацию о текущей погоде и прогноз погоды на ближайшие 24 часа с интервалом в 3 часа
- Список избранных городов: Пользователь может добавлять города в список избранного путем нажатия на кнопку сердечка. Города могут быть добавлены и удалены из списка. При выборе города из списка избранного, информация на вкладках автоматически обновляется для выбранного города

### Примеры использования 
![1](https://github.com/Sivchenko-Anna/weather-widget/assets/103916590/cd81841d-feda-4a82-8df2-34884e5da14d)
![2](https://github.com/Sivchenko-Anna/weather-widget/assets/103916590/d47833ea-aefc-4ff5-873e-c08567a3ff16)
![3](https://github.com/Sivchenko-Anna/weather-widget/assets/103916590/20afbf24-1777-4516-a8d1-067a33651d99)
![4](https://github.com/Sivchenko-Anna/weather-widget/assets/103916590/539e1022-840c-47cb-8384-28bbba4ee3ae)



