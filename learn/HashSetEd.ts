
/*
HashSet — 
Дубликаты
Уникальные значения
Проверка существования
*/

const nums = [1, 2, 4, 3, 5, 1];

const seen = new Set<number>();

for (const num of nums) {
    if(seen.has(num)) {
        console.log(`Дубль найден: ${num}`);
    }

    seen.add(num);
}

// Возврат массива без дублей
export const distinct = (a: number[]): number[] => {
  return [... new Set(a)];
}