# Mesto Russia #

## 1.  Вступление ##

Этот проект выполнен в рамках обучения на курсе ЯндексПрактикума по специальности "Веб-разработчик". Он пятый по счёту и продолжает третий курс обучения - "Базовый JavaScript и работа с браузером".

В процессе выполнения проекта нужно было использовать готовый макет в Figma. Минимальное разрешение для адаптивной верстки - 320px, максимальное - 1280px. Ориентироваться на данные по шрифтам, отступам и размерам элементов также надо по Figma. Нужно не только сверстать страницу, но и задать логику поведения страницы при нажатии на кнопки при вызове разных сервисов с помощью JS. Это позволяют сделать пройденные материалы по DOM и классам CSS. Также работе пригодились все накопленные навыки из предыдущих спринтов.

Вся работа выполнялась на сверстанной странице, подготовленной в четвертом спринте.

## 2.  О представленном проекте ##

Проект верстался в Visual Code Studio. Также дополнительным помощником при верстке служило расширение PerfectPixel, в которое загружались скачанные из Figma изображения макетов в контрольных точках в разных разрешениях.

Что было сделано в пятом проекте?:

* Начальные 6 карточек теперь появляются при загрузке страницы не из html-файла, а из js-файла, в котором с помощью template-тега (один из способов добавления разметки на страницу)   добавляется готовый массив. Кстати, самого безопасного.

* Кнопка открытия новой формы стала рабочей и создает на странице карточки с новыми фотографиями и названиями, добавляя их в начало списка. Функционал для неё прописан в JS-файле.

* Сверстана кнопка для удаления карточек.

* Добавлен новое модальное окно, появляющееся при клике на фотографию карточки. Открывается окно с увеличенной фотографией карточки и её назвванием.

* Логика открытия и закрытия модальных окон велась посредством задания переменных методом querySelector и введением функции, занимающейся открытием и закрытием окна.

* Так же в работе посредством js была введены функции, занимающаяся обработкой события после ввода информации в поля ввода и ее дальнейшим сохранением в полях на веб-странице.

* Написан код, который позволяет выставлять на странице лайки. Для обработки клика на лайк была введена функция и написан цикл для клика по любому из лайков.

* После этого проект снова проверялся и выложился на GitHub, ссылку на него можно посмотреть в конце страницы.

## 3. Заключение ##

Данный проект можно запустить с помощью основных браузеров: Google Chrome, FireFox, Yandex, Safari, Edge. Для правильного отображения информации на экране на компьютере должны быть установлены следующие шрифты: 'Inter', 'Arial', 'sans-serif'. Можно запускать на мобильных и десктопных устройствах.

https://andreinovikov2022.github.io/mesto/index.html