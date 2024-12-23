# 计算器

<DocsAD/>

```vue
<script setup>
import { ref } from "vue";

const display = ref("0");  // 显示屏幕内容
const currentOperation = ref(null);  // 当前操作符
const previousValue = ref(null);  // 前一个值

// 清除所有输入
function clear() {
  display.value = "0";
  currentOperation.value = null;
  previousValue.value = null;
}

// 输入数字
function appendNumber(number) {
  if (display.value === "0") {
    display.value = number.toString();
  } else {
    display.value += number;
  }
}

// 设置操作符
function setOperation(operation) {
  if (currentOperation.value) calculate();
  currentOperation.value = operation;
  previousValue.value = parseFloat(display.value);
  display.value = "0";
}

// 计算结果
function calculate() {
  if (currentOperation.value && previousValue.value !== null) {
    const currentValue = parseFloat(display.value);
    switch (currentOperation.value) {
      case "+":
        display.value = (previousValue.value + currentValue).toString();
        break;
      case "-":
        display.value = (previousValue.value - currentValue).toString();
        break;
      case "*":
        display.value = (previousValue.value * currentValue).toString();
        break;
      case "/":
        display.value = currentValue !== 0 ? (previousValue.value / currentValue).toString() : "Error";
        break;
    }
    currentOperation.value = null;
    previousValue.value = null;
  }
}
</script>

<template>
  <main class="calculator-container">
    <div class="display">{{ display }}</div>
    <div class="buttons">
      <button @click="clear">C</button>
      <button @click="setOperation('/')">÷</button>
      <button @click="setOperation('*')">×</button>
      <button @click="setOperation('-')">−</button>
      <button @click="appendNumber(7)">7</button>
      <button @click="appendNumber(8)">8</button>
      <button @click="appendNumber(9)">9</button>
      <button @click="setOperation('+')">+</button>
      <button @click="appendNumber(4)">4</button>
      <button @click="appendNumber(5)">5</button>
      <button @click="appendNumber(6)">6</button>
      <button @click="appendNumber(1)">1</button>
      <button @click="appendNumber(2)">2</button>
      <button @click="appendNumber(3)">3</button>
      <button class="equals" @click="calculate">=</button>
      <button @click="appendNumber(0)">0</button>
    </div>
  </main>
</template>

<style scoped>
.calculator-container {
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.display {
  font-size: 2em;
  padding: 0.5em;
  background-color: #222;
  color: #fff;
  border-radius: 4px;
  margin-bottom: 1em;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5em;
}

button {
  padding: 1em;
  font-size: 1.5em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.equals {
  grid-column: span 2;
  background-color: #4caf50;
  color: white;
}

button:hover {
  background-color: #ddd;
}

button:active {
  background-color: #bbb;
}
</style>
```