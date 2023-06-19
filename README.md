# REACT BLOG

## Использованные технологии:

- React
- React-Bootstrap
- React-Router
- Axios
- Redux
- Redux-saga

Базовые функции блог платформы на ReactJS. Сделана на основе create-react-app. Dev сервер запускается командой `npm run start`.

Стремился разбивать приложение на независимые переиспользуемые компоненты.
Интерфейс построен в основном на React-Bootstrap. Верстка адаптирована для устройств с маленькими экранами.

Данные полчуены с фейкового API. Работа с сервером рализована через Redux Saga. Реализована обработка ошибок на случай прихода ошибки от сервера, с отображением сообщения об ошибке пользователю. При загрузке данных с сервера отображается анимированный лоадер(создана искусственная задеркжа в 0.5 секунды).

Присутствует хэдер с «меню-бургером». При нажатии на него слева всплывает сайдбар, где будет присутствует навигационное меню, а также отображаются аватар, имя и почтовый адрес. Хэдер находится в Root роуте, и виден на всех страницах.
 
## Роуты:
1. Список постов(главная страница)
2. Страница пользователя

### Список постов:
- Содержит список всех постов
- Каждый пост состоит из заголовка, текста, аватара и списка комментариев
- При клике на аватар просиходит переход на страницу пользователя. Аватар одинаковый для всех пользователей
- Список комментариев изначально скрыт, доступна кнопка "Комментарии". При нажатии на кнопку грузится список комментариев к данному посту. При повторном нажатии список скрывается. Комментарий состоит из заголовка(email) и текста
- Присутствует возможность поиска/фильтра по заголовку поста(+ кнопка очистки поля фильтра)
- Присутствует возможность сортировки по заголовку
- Присутствует пагинация, с возможностью выбрать количество постов на странице

### Страница пользователя:
- Выводятся данные о пользовател
- Список постов этого пользователя
- Кнопка назад для перехода на главную страницу 
- Загружается по ссылке типа "/user/5", данные подгружаются даже после обновления страницы
