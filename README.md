# Mesto Russia #

## 1.  Вступление ##

Этот проект выполнен в рамках обучения на курсе ЯндексПрактикума по специальности "Веб-разработчик". Он шестой по счёту и заканчивает третий курс обучения - "Базовый JavaScript и работа с браузером".

В процессе выполнения проекта нужно было использовать готовый макет в Figma. Минимальное разрешение для адаптивной верстки - 320px, максимальное - 1280px. Ориентироваться на данные по шрифтам, отступам и размерам элементов также надо по Figma. Нужно не только сверстать страницу, но и задать логику поведения страницы при нажатии на кнопки при вызове разных сервисов с помощью JS. Это позволяют сделать пройденные материалы по DOM классам CSS. Также работе пригодились все накопленные навыки из предыдущих спринтов.

Вся работа выполнялась на сверстанной странице, доработанной в пятом спринте.

## 2.  О представленном проекте ##

Проект верстался в Visual Code Studio. Также дополнительным помощником при верстке служило расширение PerfectPixel, в которое загружались скачанные из Figma изображения макетов в контрольных точках в разных разрешениях.

Что было сделано в шестом проекте?:

* Добавлен новый файл validate.js, в котором находится код с валидацией 2-х форм нашей страницы.

* Сделана валидация полей ввода в форме редактирования профиля. Кнопка submit теперь зависит от полей валидации и меняет свой вид и свойство при наличии ошибок в полях ввода. При открытии модального окна кнопка submit    активна, так как поля формы ввода наполнены валидными данными. Полям ввода добавлены свойства, по сопоставлению с которыми производится валидация формы - здесь это длина текста, а именно минимальное и максимальное значение.

* Сделана валидация полей ввода в форме создания новой карточки. Кнопка submit теперь зависит от полей валидации и меняет свой вид и свойство при наличии ошибок в полях ввода. При открытии модального окна кнопка submit    неактивна, так как поля формы ввода пустые, т.е. не валидны. Кроме текстового поля ввода в этой формк присутствует поле с URL.

* Закрытие модальных окон теперь можно произвести нажатием на крестик формы, ЛКМ или клавишей ESCAPE.

* Для валидации форм создавался массив из необходимых классов и использовался в нужных местах при написании методов и функции валидации.

* Код валидации универсален и при добавлении новых форм можно будет лишь передать новый массив с классами методам и функции.

## 3. Заключение ##

Данный проект можно запустить с помощью основных браузеров: Google Chrome, FireFox, Yandex, Safari, Edge. Для правильного отображения информации на экране на компьютере должны быть установлены следующие шрифты: 'Inter', 'Arial', 'sans-serif'. Можно запускать на мобильных и десктопных устройствах.

https://andreinovikov2022.github.io/mesto/