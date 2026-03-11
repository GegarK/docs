# 对抗神经网络 GAN

::: warning DeeLMind 提示
[算法学习网站 MathPH](https://mathph.org/)
:::

## 什么是对抗生成网络（Adversarial Generative Adversarial Networks）

对抗神经网络有两部分组成，一个是生成器网络（Generative Networks），一个是判别器网络（Adversarial Networks）；生成网络 G 的目标就是尽量生成真实的数据去欺骗判别网络 D，而 D 的目标就是尽量把 G 生成的数据和真实的数据分别开来。

举例：G 尽量生成一些 D 判断不出的图片；D 尽量判断出这些图片是否真实的图片，还是 G 生成的图片。

![GAN](/imgs/ai/gan/gan.png)

<DocsAD/>
