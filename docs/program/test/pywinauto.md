# PYwinauto

## 安装使用

* [安装](https://github.com/pywinauto/pywinauto)
* pip install pywinauto

<DocsAD/>

```py
from pywinauto import Desktop, Application
app = Application(backend="uia").start('calc.exe')
dlg = Desktop(backend="uia").计算器
dlg.type_keys('2*3=')
dlg.print_control_identifiers()
```

```py
from pywinauto import Application, Desktop
import time

# 使用 Win32 backend 连接任务栏窗口
app = Application(backend="win32").connect(class_name="Shell_TrayWnd")

# 获取系统托盘区域
taskbar = app.window(class_name="Shell_TrayWnd")

# 获取托盘通知区
tray_notify = taskbar.child_window(class_name="TrayNotifyWnd")

# 查找所有的 ToolbarWindow32 控件
toolbars = tray_notify.children(class_name="ToolbarWindow32")

# 右键单击网络图标
toolbars[0].click_input(button='right')
```