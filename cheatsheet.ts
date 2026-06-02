/*

// Дубликаты → HashSet
const nums = [1, 2, 3, 4, 5, 2];

const seen = new Set<number>();

for (const num of nums) {
    if (seen.has(num)) {
        console.log(`Дубль найден: ${num}`);
        break;
    }

    seen.add(num);
}

// Подсчёт частот → HashMap

const nums = [1, 1, 2, 3, 3, 3];

const map = new Map<number, number>();

for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
}

console.log(map);

// Ключ → Значение → HashMap

const ages = new Map<string, number>();

ages.set("Ivan", 25);
ages.set("Anna", 30);

console.log(ages.get("Anna"));

// Пара элементов → Two Pointers, Найти сумму = 10

const nums = [1, 2, 3, 4, 6, 8];

let left = 0;
let right = nums.length - 1;

while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === 10) {
        console.log(nums[left], nums[right]);
        break;
    }

    if (sum < 10) {
        left++;
    } else {
        right--;
    }
}

// Подмассив → Sliding Window. Максимальная сумма 3 подряд идущих элементов. Окно = 3

const nums = [2, 1, 5, 1, 3, 2];
const k = 3;

let windowSum = 0;

for (let i = 0; i < k; i++) {
    windowSum += nums[i];
}

let maxSum = windowSum;

for (let right = k; right < nums.length; right++) {
    windowSum =
        windowSum
        - nums[right - k]
        + nums[right];

    maxSum = Math.max(maxSum, windowSum);
}

console.log(maxSum);

// Середина Linked List → Fast & Slow Pointer

let slow = head;
let fast = head;

while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
}

console.log(slow);

// Цикл в Linked List → Fast & Slow Pointer

let slow = head;
let fast = head;

while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
        return true;
    }
}

return false;

// Отсортированный массив → Binary Search. Ищем число 12
const nums = [2, 4, 6, 8, 10, 12, 14];

let left = 0;
let right = nums.length - 1;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === 12) {
        console.log("Найдено");
        break;
    }

    if (nums[mid] < 12) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

// История / Undo → Stack

const stack: number[] = [];

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());

// Очередь задач → Queue

const queue: number[] = [];

queue.push(10);
queue.push(20);
queue.push(30);

console.log(queue.shift());

// Array - Нужен быстрый доступ по индексу?
const nums = [10, 20, 30, 40];

console.log(nums[2]);

// 






*/