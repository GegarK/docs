# Docker

## 什么是 [Docker](https://www.docker.com/)

Docker 是一个开源的容器化平台，旨在使开发人员能够轻松地创建、部署和运行应用程序。它使用操作系统级的虚拟化技术来在容器中交付软件包。

## 什么是Docker-Compose
Docker Compose 是一个用于定义和运行多容器 Docker 应用的工具。通过使用 Docker Compose，您可以使用一个 YAML 文件来配置应用的服务，并使用单个命令来创建和启动所有这些服务。Docker Compose 使管理复杂的多容器 Docker 应用变得简单和高效，特别适用于开发、测试和部署环境。

<DocsAD/>

## Docker 的优势

- **便携性**：一次构建，随处运行。由于 Docker 容器包含所有运行所需的组件，因此它们可以在任何环境中运行，而不会出现兼容性问题。
- **一致性**：开发、测试和生产环境中的一致性。确保代码在开发和生产环境中的行为一致。
- **效率**：更快的启动时间和更少的资源消耗。容器共享主机操作系统的内核，避免了运行多个完整操作系统的开销。
- **可扩展性**：容易扩展和管理。Docker 容器可以很容易地进行横向扩展，适合微服务架构和分布式应用程序。

## Docker[安装](https://docs.docker.com/engine/install/)Ubuntu

```sh
sudo apt install docker.io
```

```sh
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## Docker Compose安装

```sh
curl -SL https://github.com/docker/compose/releases/download/v2.27.1/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

## Docker基础命令

### 命令: `docker --version`
**解释**: 显示 Docker 版本信息

### 命令: `docker pull wordpress`
**解释**: 从 [Docker Hub](https://hub.docker.com/) 拉取 wordpress 镜像

### 命令: `docker images`
**解释**: 列出本地存储的 Docker 镜像

### 命令: `docker run -it ubuntu /bin/bash`
**解释**: 使用交互模式运行一个 Ubuntu 容器，并打开 Bash 终端

### 命令: `docker ps`
**解释**: 列出正在运行的容器

### 命令: `docker ps -a`
**解释**: 列出所有容器，包括未运行的

### 命令: `docker stop CONTAINER_ID`
**解释**: 停止一个运行中的容器，替换 CONTAINER_ID 为实际的容器 ID

### 命令: `docker rm CONTAINER_ID`
**解释**: 删除一个已停止的容器，替换 CONTAINER_ID 为实际的容器 ID

### 命令: `docker rmi IMAGE_ID`
**解释**: 删除一个本地存储的镜像，替换 IMAGE_ID 为实际的镜像 ID

### 命令: `docker build -t myimage .`
**解释**: 在当前目录下使用 Dockerfile 构建一个镜像，并命名为 myimage

### 命令: `docker-compose up`
**解释**: 启动使用 docker-compose.yml 文件定义的所有服务

### 命令: `docker-compose down`
**解释**: 停止并删除使用 docker-compose.yml 文件定义的所有服务、网络和卷

### 命令: `docker-compose down --volumes`
**解释**: 停止并删除使用 docker-compose.yml 文件定义的所有服务、网络和卷，并且删除卷