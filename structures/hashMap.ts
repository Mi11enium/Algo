
/*
o(1)

ключ: значение

hashMap отвечает на вопросы:
1. поиска дублей
2. подсчета количества
3. поиск повторяющегося элемента
4. проверка существования
5. группировки данных

Основные методы:
set
get
has
delete

*/

const map = new Map();


map.set('Anna', 1);
map.set('Boris', 3);
map.set('John', 5);

console.log(map.has('John'));