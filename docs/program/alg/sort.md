# 排序算法

```js
let arr = [3, 1, 5, 4, 7, 6, 0, 2];

function bubbleSort(arr) {
    var length = arr.length,i = 0;
    // 遍历次数为length-1次
    for (; i < length - 1; i++) {
        // 当前遍历的比较次数为length - 当前遍历次数
        for (var j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
            };
        };
    };
    return arr;
};

bubbleSort(arr); //[0, 1, 2, 3, 4, 5, 6, 7]
```

<DocsAD/>