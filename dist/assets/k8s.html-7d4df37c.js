import{_ as i,K as c,L as o,M as n,N as e,a5 as s,W as r,F as a}from"./framework-edebdfe1.js";const d={},p=n("h1",{id:"k8s",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#k8s","aria-hidden":"true"},"#"),e(" K8S")],-1),m={id:"什么是-kubernetes",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#什么是-kubernetes","aria-hidden":"true"},"#",-1),u={href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"Kubernetes（常简称为 k8s）是一个开源的容器编排平台，最初由 Google 设计并捐赠给云原生计算基金会（CNCF）。它用于自动部署、扩展和管理容器化应用程序。",-1),k=r(`<h2 id="kubernetes-的优势" tabindex="-1"><a class="header-anchor" href="#kubernetes-的优势" aria-hidden="true">#</a> Kubernetes 的优势</h2><ul><li><strong>自动化运维</strong>：自动处理容器的部署、扩展和恢复，减轻运维负担。</li><li><strong>弹性扩展</strong>：根据负载动态调整应用实例数量，保证高可用性和资源利用率。</li><li><strong>自愈能力</strong>：自动检测和替换失败的容器，确保应用持续运行。</li><li><strong>服务发现和负载均衡</strong>：自动为 Pod 提供 DNS 名称和 IP 地址，并在 Pod 之间分配流量。</li><li><strong>滚动更新和回滚</strong>：无中断地发布新版本，并支持快速回滚到之前的版本。</li></ul><h2 id="k8s常用命令" tabindex="-1"><a class="header-anchor" href="#k8s常用命令" aria-hidden="true">#</a> K8S常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个名为nginx的Deployment</span>
kubectl create deployment nginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx

<span class="token comment"># 检查集群中所有节点的状态</span>
kubectl get nodes

<span class="token comment"># 查看所有运行中的Pod</span>
kubectl get pods

<span class="token comment"># 查看特定Namespace中的所有资源</span>
kubectl get all <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespace<span class="token operator">&gt;</span>

<span class="token comment"># 查看Pod的详细信息，包括IP地址、节点分配等</span>
kubectl describe pod <span class="token operator">&lt;</span>pod-name<span class="token operator">&gt;</span>

<span class="token comment"># 执行一个Shell进入Pod中</span>
kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>pod-name<span class="token operator">&gt;</span> -- /bin/bash

<span class="token comment"># 扩展Deployment中的Pod副本数量</span>
kubectl scale deployment <span class="token operator">&lt;</span>deployment-name<span class="token operator">&gt;</span> <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token number">3</span>

<span class="token comment"># 删除一个服务</span>
kubectl delete <span class="token function">service</span> <span class="token operator">&lt;</span>service-name<span class="token operator">&gt;</span>

<span class="token comment"># 删除所有Pods和服务</span>
kubectl delete pods,svc <span class="token parameter variable">--all</span>

<span class="token comment"># 应用一个YAML文件来创建资源</span>
kubectl apply <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>filename.yaml<span class="token operator">&gt;</span>

<span class="token comment"># 查看集群事件记录</span>
kubectl get events

<span class="token comment"># 查看特定Pod的日志</span>
kubectl logs <span class="token operator">&lt;</span>pod-name<span class="token operator">&gt;</span>

<span class="token comment"># 导出指定Deployment的YAML配置</span>
kubectl get deployment <span class="token operator">&lt;</span>deployment-name<span class="token operator">&gt;</span> <span class="token parameter variable">-o</span> yaml <span class="token operator">&gt;</span> deployment.yaml

<span class="token comment"># 查看集群中所有的存储卷</span>
kubectl get <span class="token function">pv</span>

<span class="token comment"># 查看所有的存储卷声明</span>
kubectl get pvc

<span class="token comment"># 创建一个新的命名空间</span>
kubectl create namespace <span class="token operator">&lt;</span>namespace-name<span class="token operator">&gt;</span>

<span class="token comment"># 查看特定命名空间的资源使用情况</span>
kubectl <span class="token function">top</span> namespace <span class="token operator">&lt;</span>namespace-name<span class="token operator">&gt;</span>

<span class="token comment"># 查看Ingress资源</span>
kubectl get ingress

<span class="token comment"># 设置当前使用的Context</span>
kubectl config use-context <span class="token operator">&lt;</span>context-name<span class="token operator">&gt;</span>

<span class="token comment"># 重启一个Deployment中的所有Pods</span>
kubectl rollout restart deployment <span class="token operator">&lt;</span>deployment-name<span class="token operator">&gt;</span>

<span class="token comment"># 查看集群中所有可用的API资源</span>
kubectl api-resources

<span class="token comment"># 查看集群中所有的角色（Role）</span>
kubectl get roles

<span class="token comment"># 查看特定ServiceAccount的详细信息</span>
kubectl describe serviceaccount <span class="token operator">&lt;</span>serviceaccount-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function g(h,_){const l=a("ExternalLinkIcon"),t=a("DocsAD");return c(),o("div",null,[p,n("h2",m,[v,e(" 什么是 "),n("a",u,[e("Kubernetes"),s(l)])]),b,s(t),k])}const x=i(d,[["render",g],["__file","k8s.html.vue"]]);export{x as default};
