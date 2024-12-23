# 内存操作

<DocsAD/>

```py
# codegate_2017-angrybird

import angr

# b'Im_so_cute&pretty_:)'

START_ADDR = 0x4007c2
FIND_ADDR = 0x404fab

def main():
    proj = angr.Project('angrybird')
    state = proj.factory.entry_state(addr=START_ADDR, add_options={angr.options.LAZY_SOLVES})
    state.regs.rbp = state.regs.rsp
    state.mem[state.regs.rbp - 0x74].int = 0x16

    sm = proj.factory.simulation_manager(state)
    sm.explore(find=FIND_ADDR)
    found = sm.found[-1]
    flag = found.posix.dumps(0)

    return flag[:20]

if __name__ == '__main__':
    print(main())

```