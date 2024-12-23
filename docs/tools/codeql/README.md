# CodeQL

## 什么是[CodeQL](https://codeql.github.com/)

CodeQL 是一种用于代码分析和漏洞检测的查询语言，主要用于查找软件中的安全漏洞、代码质量问题和性能问题。它最初由 GitHub 开发并开源，成为 GitHub Advanced Security 的一部分。

## CodeQL安装

* [下载二进制](https://github.com/github/codeql-cli-binaries/releases)
* VSCODE安装CodeQL插件

## CodeQL使用

* 创建数据库

```sh
codeql.exe database create testpydb --source-root=./pythonsrc --language=python
```

* 查询数据库

```sh
codeql query run --database testpydb your_query.ql
```

## [CodeQL语法](https://codeql.github.com/docs/ql-language-reference/about-the-ql-language/)