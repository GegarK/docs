# Slither

## Slither是什么

Slither 是一个用 Python3 编写的 Solidity & Vyper 静态分析框架。它运行一套漏洞检测器，打印有关合约详细信息的视觉信息，并提供 API 以轻松编写自定义分析。Slither 使开发人员能够发现漏洞，增强他们的代码理解能力，并快速制作自定义分析的原型。

<DocsAD/>

## Slither安装使用

* 安装Slither

```py
python3 -m pip install slither-analyzer


git clone https://github.com/crytic/slither.git && cd slither
python3 -m pip install .

slither test.sol
```

* 安装solidity版本管理

```sh
pip install solc
solc-select install 0.8.0
solc-select use 0.8.0
```

## [Slither开发](https://crytic.github.io/slither/slither.html)类似[CodeQL](../../tools/codeql/)

* 测试Solidity

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Token {
  // uint8 0 - 255
  mapping(address => uint8) balances;

  constructor() {
    balances[msg.sender] = 250;
  }
  
  function deposit(uint8 _value) public returns (bool) {
    unchecked{
        balances[msg.sender] += _value;
    }
    return true;
  }

  function balanceOf(address _owner) public view returns (uint balance) {
    return balances[_owner];
  }
}


```

* Detector开发

```py
https://github.com/crytic/slither/wiki/Adding-a-new-detector

conda\envs\slither\Lib\site-packages\slither\detectors\ 添加detector

from slither.detectors.abstract_detector import AbstractDetector, DetectorClassification
from slither.core.declarations import Function

class Deelmind(AbstractDetector):
    """
    Documentation
    """

    ARGUMENT = 'DeeLMind_Detector' # slither will launch the detector with slither.py --detect mydetector
    HELP = 'Slither Detector Help'
    IMPACT = DetectorClassification.HIGH
    CONFIDENCE = DetectorClassification.HIGH

    WIKI = 'https://deelmind.com/'

    WIKI_TITLE = 'DeeLMind_Detector_Title'
    WIKI_DESCRIPTION = 'DeeLMind_Detector_Desc'
    WIKI_EXPLOIT_SCENARIO = """
  function deposit(uint8 _value) public returns (bool) {
    unchecked{
        balances[msg.sender] += _value;
    }
    return true;
  }
"""
    WIKI_RECOMMENDATION = 'DeeLMind_Detector_Recommendation'

    def _detect(self):
        info = ['This is an example']

        for c in self.contracts:
            for func in c.all_functions_called:
                if not isinstance(func, Function):
                    continue
                for node in func.nodes:
                    for ir in node.irs:
                        print("->>",ir)

        res = self.generate_result(info)

        return [res]
```

* Slither检测

```sh
slither --list-detectors
slither test.sol --detect=DeeLMind_Detector
```