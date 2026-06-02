

/*
Частоты
Подсчёт
Ключ → значение
*/
const arr = [1, 2, 3, 3, 5, 6, 7, 6, 9, 7, 7];

const map = new Map<number, number>();

for (const item of arr) {
    map.set(
        item,
        (map.get(item) ?? 0) + 1
    );
}
