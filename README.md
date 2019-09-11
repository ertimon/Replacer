# Replacer
## Требования:

### - Платформа node.js

### - Операционная система на выбор соискателя, главное указать какая

## Тип приложения:

### - Консольное приложение

## Входные данные:

### Приложение должно принимать на вход два параметра:

#### - Рабочую директорию

#### - Файл-объект в формате JSON. Наполнение вида: {“find”: “replace”,..}

## Результат:

### - Программа должна выполнить рекурсивный поиск и замену подстрок во всех файлах из рабочей директории.

### - Рекурсивный означает, что необходимо включать поддиректории, поддиректории поддиректорий, и т. д.

### - Программа должна пропускать файлы-изображения (jpg, png, …).

### - Поиск осуществлять по ключам, полученных из файла с объектом JSON, заменять на значение, которое соответствует ключу.

## Пример использования из командной строки:

`$ node index.js ./dir search.json`
