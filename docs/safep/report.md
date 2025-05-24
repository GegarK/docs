# 端口复用

端口复用是指多个应用或服务共享一个网络端口的机制。常用于负载均衡、协议复用或安全研究（如旁路检测、防火墙绕过等）。

<DocsAD/>


| 风险类型           | 描述 |
|--------------------|------|
| 安全攻击           | 端口复用可能被用于 IDS/防火墙绕过、数据隐藏通道、端口欺骗等攻击场景。 |
| 调试困难           | 多个进程或线程绑定相同端口，可能导致日志和连接追踪复杂，排查问题困难。 |
| 配置易误           | 未正确设置 `SO_REUSEPORT` 或 `SO_REUSEADDR`，可能导致绑定失败或冲突行为。 |
| 跨平台差异         | 不同操作系统（如 Windows、Linux、macOS）对端口复用的支持和行为存在差异。 |
| 性能影响           | 大量复用监听 socket 时，系统需做额外的调度判断，可能引入开销。 |

## Socket

```rust

```

```rust
use socket2::{Domain, Protocol, Socket, Type};
use std::net::{SocketAddr, TcpListener};
use std::thread;

fn main() -> std::io::Result<()> {
    let addr: SocketAddr = "127.0.0.1:9000".parse().unwrap();

    for i in 0..2 {
        let addr = addr.clone();
        thread::spawn(move || {
            // 创建 socket
            let socket = Socket::new(Domain::IPV4, Type::STREAM, Some(Protocol::TCP)).unwrap();

            // 设置 SO_REUSEADDR
            socket.set_reuse_address(true).unwrap();

            // 绑定地址
            socket.bind(&addr.into()).unwrap();

            // 开始监听
            socket.listen(128).unwrap();

            // 转为 std::net::TcpListener
            let listener: TcpListener = socket.into();

            println!("Listener {} started on {}", i, addr);
            for stream in listener.incoming() {
                match stream {
                    Ok(_) => println!("Connection on listener {}", i),
                    Err(e) => eprintln!("Error: {}", e),
                }
            }
        });
    }

    // 保持主线程存活
    loop {
        std::thread::park();
    }
}
```

## EBPF

* sudo apt install clang llvm bpftool
* clang -O2 -g -target bpf -I/usr/include/$(uname -m)-linux-gnu -c ./ebpf.c -o reuse.o

```c

```

```rust

```