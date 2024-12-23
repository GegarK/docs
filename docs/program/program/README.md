# 编程开发

::: warning 極客方舟 资料
懂进攻，知防守；先正向，后逆向；编程开发是所有安全的积淀。
:::

[YouTube系列教程](https://www.youtube.com/watch?v=DUcAMiICvf0&list=PLgZqc0esdeS8OX7etO9tUp8wIqHx-6uGj)
<iframe width="720px" height="480px" src="https://www.youtube.com/embed/DUcAMiICvf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[B站系列教程](https://www.bilibili.com/medialist/play/282616786?from=space&business=space_series&business_id=2623496&desc=1&spm_id_from=333.999.0.0)
<iframe src="//player.bilibili.com/player.html?aid=387918339&bvid=BV1Ad4y197mY&cid=831089110&page=1"  frameborder="no"  allowfullscreen="true" style="width:720px;height:480px"> 
</iframe>

## 什么是开发编程

编程就是人类告诉硬件设备，让它帮你完成你想完成的事情。

## 什么是编程语言

编程语言就是把人类想法告诉硬件设备的方式。

<DocsAD/>

## 人类语言
* 主语
* 谓语
* 宾语
* 定语
* 状语
* 补语

## 编程语言
* 顺序执行
* 循环执行
* 条件执行

```JS
int main()
{
    printf("output\n");

    printf("------------------\n");

    int loop = 5;
    for (int i = 0; i < loop; i++)
    {
        printf("output%d\n", i);
    }

    printf("------------------\n");

    int a = 3;
    for (int i = 0; i < loop; i++)
    {
        if (i == a)
        {
            printf("output%d\n", i);
        }
        printf("%d\n", i);
    }
}
```