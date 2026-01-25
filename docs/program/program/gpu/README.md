# GPU开发

## 1. GPU 的核心定位

* **高吞吐并行计算**：以数据并行为核心，适合大规模、规则计算（矩阵、向量、像素、张量）。
* **与 CPU 的分工**：CPU 负责控制流、复杂分支；GPU 负责密集算术与并行内核。
* **典型应用**：图形渲染、科学计算、AI/ML、密码学、视频编解码、金融仿真。

## 2. GPU 架构基础

### 2.1 执行模型

* **SIMT / SIMD**：单指令多线程（NVIDIA SIMT），线程以 **warp / wavefront** 为调度单位。
* **线程层级**：Grid → Block → Thread（CUDA 术语）。
* **分支发散**：同一 warp 内条件分支会串行执行，显著影响性能。

### 2.2 内存层级

* **寄存器（Register）**：最快、最小，线程私有。
* **共享内存（Shared / LDS）**：Block 内共享，低延迟。
* **全局内存（Global / VRAM）**：容量大、延迟高。
* **常量 / 纹理缓存**：只读、针对访问模式优化。

> 关键原则：**计算密集 > 内存密集；合并访问（Coalescing）**。

## 3. 主流 GPU 开发平台

### 3.1 CUDA（Compute Unified Device Architecture）

* **语言**：CUDA C/C++、CUDA Fortran
* **生态**：cuBLAS、cuDNN、TensorRT、Thrust
* **优势**：成熟、文档齐全、性能最优
* **限制**：厂商绑定

### 3.2 OpenCL（跨厂商）

* **语言**：C-like Kernel
* **覆盖**：CPU / GPU / FPGA
* **优缺点**：通用但复杂、生态相对弱

### 3.3 Vulkan Compute / OpenGL Compute

* **定位**：图形 API 中的计算能力
* **优势**：低层、跨平台
* **代价**：工程复杂度高

### 3.4 ROCm / HIP（AMD）

* **定位**：对标 CUDA
* **适用**：AMD GPU + HPC

### 3.5 WebGPU

* **语言**：WGSL
* **场景**：浏览器 / 跨端
* **特点**：安全、现代、潜力大


## 4. 编程模型对比

| 维度  | CUDA  | OpenCL | Vulkan Compute | WebGPU |
| --- | ----- | ------ | -------------- | ------ |
| 性能  | ★★★★★ | ★★★★   | ★★★★           | ★★★    |
| 易用性 | ★★★★  | ★★     | ★★             | ★★★★   |
| 跨平台 | ★     | ★★★★★  | ★★★★★          | ★★★★★  |
| 生态  | ★★★★★ | ★★     | ★★★            | ★★★    |


## 5. 性能优化方法论

### 5.1 算法层

* 提高 **算术强度（FLOPs / Byte）**
* 降低分支、减少同步
* 数据重排以提升局部性

### 5.2 内存层

* 合并全局内存访问
* 使用共享内存缓存热点数据
* 避免 bank conflict

### 5.3 并行度

* 提高 occupancy（寄存器 / block 配置）
* 合理选择 block size（常见 128/256/512）

### 5.4 指令级

* 向量化
* 使用 Tensor Core / 专用指令

## 6. 调试与分析工具

* **NVIDIA**：Nsight Compute / Nsight Systems / cuda-gdb
* **AMD**：rocprof / Radeon GPU Profiler
* **通用**：RenderDoc（图形 + compute）

## 7. 工程化与部署

### 7.1 构建与依赖

* CMake + CUDA
* 多架构编译（sm_70 / sm_80 / sm_90）

### 7.2 与主程序交互

* C/C++ / Rust / Python（FFI / PyCUDA / CuPy）
* 异步流（Stream）与事件（Event）

### 7.3 资源管理

* 显存池化
* Kernel 融合（Fusion）

## 8. GPU 与 Rust / 现代语言

* **Rust + CUDA**：rust-cuda / FFI
* **wgpu + WebGPU**：跨平台计算
* **优势**：内存安全、并发语义清晰
* **挑战**：生态与调试

## 9. AI / 区块链 / 安全方向结合

* **AI**：Tensor Core、低精度（FP16 / BF16 / INT8）
* **区块链**：哈希、ZK 证明（MSM / FFT）
* **安全**：密码学加速、侧信道防护

## 10. 一句话总结

> **GPU 开发的本质是：用并行换时间，用结构化数据换性能。**