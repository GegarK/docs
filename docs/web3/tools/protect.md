# 安全防御

::: warning DeeLMind 提示
安全防御，和传统安全一样，没有区别
:::

## 安全防御

### 代码方向（静态）

* 代码审计
* 模糊测试
* 形式化检验 (Formal Verification) TAL+ & Coq

<DocsAD/>

### 行为方向（动态）

* 调用流程监控

## 虚拟化保护

* OLLVM
* 混淆加密
* 虚拟化保护

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract A {
    enum B {
        C,  // 0x00
        D,  // 0x01
        E,  // 0x02
        F,  // 0x03
        G   // 0x04, 新增 PUSH 操作码用于压入操作数
    }

    uint256[] private H;
    uint8[] private I;

    function J(uint8[] memory K) public {
        delete I;
        I = K;
    }

    function L() public {
        delete H;

        for (uint256 M = 0; M < I.length; M++) {
            B N = B(I[M]);

            if (N == B.G) {
                M++;
                O(uint256(uint8(I[M])));
            } else if (N == B.C) {
                O(P() + P());
            } else if (N == B.D) {
                uint256 Q = P();
                uint256 R = P();
                O(R - Q);
            } else if (N == B.E) {
                O(P() * P());
            } else if (N == B.F) {
                uint256 Q = P();
                uint256 R = P();
                require(Q != 0, "S");
                O(R / Q);
            } else {
                revert("T");
            }
        }
    }

    function P() internal returns (uint256) {
        uint256 U = H[H.length - 1];
        H.pop();
        return U;
    }

    function O(uint256 V) internal {
        H.push(V);
    }

    function W() public view returns (uint256) {
        return H[H.length - 1];
    }
}

contract SimpleVM {
    enum Opcode {
        ADD,    // 0x00
        SUB,    // 0x01
        MUL,    // 0x02
        DIV,    // 0x03
        PUSH    // 0x04, 新增 PUSH 操作码用于压入操作数
    }

    uint256[] public stack;
    uint8[] public program;

    function loadProgram(uint8[] memory _program) public {
        delete program;
        program = _program;
    }

    function execute() public {
        delete stack;

        for (uint256 i = 0; i < program.length; i++) {
            Opcode opcode = Opcode(program[i]);

            if (opcode == Opcode.PUSH) {
                i++;
                stackPush(uint256(uint8(program[i])));
            } else if (opcode == Opcode.ADD) {
                stackPush(stackPop() + stackPop());
            } else if (opcode == Opcode.SUB) {
                uint256 b = stackPop();
                uint256 a = stackPop();
                stackPush(a - b);
            } else if (opcode == Opcode.MUL) {
                stackPush(stackPop() * stackPop());
            } else if (opcode == Opcode.DIV) {
                uint256 b = stackPop();
                uint256 a = stackPop();
                require(b != 0, "Division by zero");
                stackPush(a / b);
            } else {
                revert("Invalid opcode");
            }
        }
    }

    function stackPop() internal returns (uint256) {
        uint256 value = stack[stack.length - 1];
        stack.pop();
        return value;
    }

    function stackPush(uint256 value) internal {
        stack.push(value);
    }

    function top() public view returns (uint256) {
        return stack[stack.length - 1];
    }
}

contract SimpleCompiler {
    SimpleVM public vm;

    constructor(address vmAddress) {
        vm = SimpleVM(vmAddress);
    }

    // 编译器将加减乘除表达式转换为操作码
    function compile(string memory expression) public pure returns (uint8[] memory) {
        bytes memory expr = bytes(expression);
        uint8[] memory opcodes = new uint8[](expr.length * 2); // 操作码和操作数

        uint256 idx = 0;
        for (uint256 i = 0; i < expr.length; i++) {
            if (expr[i] >= '0' && expr[i] <= '9') {
                uint256 value = uint256(uint8(expr[i])) - 48;
                opcodes[idx++] = uint8(SimpleVM.Opcode.PUSH); // 先生成 PUSH 操作码
                opcodes[idx++] = uint8(value);                // 再生成数字本身
            } else if (expr[i] == '+') {
                opcodes[idx++] = uint8(SimpleVM.Opcode.ADD);
            } else if (expr[i] == '-') {
                opcodes[idx++] = uint8(SimpleVM.Opcode.SUB);
            } else if (expr[i] == '*') {
                opcodes[idx++] = uint8(SimpleVM.Opcode.MUL);
            } else if (expr[i] == '/') {
                opcodes[idx++] = uint8(SimpleVM.Opcode.DIV);
            }
        }

        // 将操作码数组截取到正确的长度
        assembly { mstore(opcodes, idx) }

        return opcodes;
    }
    
    // 编译并执行
    function compileAndExecute(string memory expression) public returns (uint256) {
        uint8[] memory opcodes = compile(expression);
        vm.loadProgram(opcodes);
        vm.execute();
        return vm.top();
    }

    function compile2Opcode(string memory expression) public pure returns (uint8[] memory){
        return compile(expression);
    }
}

contract Test{
    function test() public returns (uint256){
        SimpleVM vm = new SimpleVM();
        SimpleCompiler compiler = new SimpleCompiler(address(vm));

        uint256 result = compiler.compileAndExecute("35+2*");
        return result;
    }

    function getOpcode() public returns (uint8[] memory){
        SimpleVM vm = new SimpleVM();
        SimpleCompiler compiler = new SimpleCompiler(address(vm));
        return compiler.compile2Opcode("34+2*");
    }
}
```