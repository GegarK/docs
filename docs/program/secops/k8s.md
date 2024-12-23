# K8S

## 什么是 [Kubernetes](https://kubernetes.io/)

Kubernetes（常简称为 k8s）是一个开源的容器编排平台，最初由 Google 设计并捐赠给云原生计算基金会（CNCF）。它用于自动部署、扩展和管理容器化应用程序。

<DocsAD/>

## Kubernetes 的优势

- **自动化运维**：自动处理容器的部署、扩展和恢复，减轻运维负担。
- **弹性扩展**：根据负载动态调整应用实例数量，保证高可用性和资源利用率。
- **自愈能力**：自动检测和替换失败的容器，确保应用持续运行。
- **服务发现和负载均衡**：自动为 Pod 提供 DNS 名称和 IP 地址，并在 Pod 之间分配流量。
- **滚动更新和回滚**：无中断地发布新版本，并支持快速回滚到之前的版本。

## K8S常用命令

```bash
# 创建一个名为nginx的Deployment
kubectl create deployment nginx --image=nginx

# 检查集群中所有节点的状态
kubectl get nodes

# 查看所有运行中的Pod
kubectl get pods

# 查看特定Namespace中的所有资源
kubectl get all -n <namespace>

# 查看Pod的详细信息，包括IP地址、节点分配等
kubectl describe pod <pod-name>

# 执行一个Shell进入Pod中
kubectl exec -it <pod-name> -- /bin/bash

# 扩展Deployment中的Pod副本数量
kubectl scale deployment <deployment-name> --replicas=3

# 删除一个服务
kubectl delete service <service-name>

# 删除所有Pods和服务
kubectl delete pods,svc --all

# 应用一个YAML文件来创建资源
kubectl apply -f <filename.yaml>

# 查看集群事件记录
kubectl get events

# 查看特定Pod的日志
kubectl logs <pod-name>

# 导出指定Deployment的YAML配置
kubectl get deployment <deployment-name> -o yaml > deployment.yaml

# 查看集群中所有的存储卷
kubectl get pv

# 查看所有的存储卷声明
kubectl get pvc

# 创建一个新的命名空间
kubectl create namespace <namespace-name>

# 查看特定命名空间的资源使用情况
kubectl top namespace <namespace-name>

# 查看Ingress资源
kubectl get ingress

# 设置当前使用的Context
kubectl config use-context <context-name>

# 重启一个Deployment中的所有Pods
kubectl rollout restart deployment <deployment-name>

# 查看集群中所有可用的API资源
kubectl api-resources

# 查看集群中所有的角色（Role）
kubectl get roles

# 查看特定ServiceAccount的详细信息
kubectl describe serviceaccount <serviceaccount-name>
