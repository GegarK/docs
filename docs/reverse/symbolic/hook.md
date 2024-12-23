# HOOK

<DocsAD/>

```py
import angr
import claripy

base = 0x400000
main = base + 0x00000b2f

find = base + 0x38ec
avoid = base + 0x38ff

def nothing(state):
    pass

def set_eax(state):
    state.regs.eax = 1


project = angr.Project("./REme-a28b7273a8e6671e6f0a361addbba87e")
input = claripy.BVS("input", 8*8)
state = project.factory.entry_state(addr=main)
project.hook(base + 0x431f, nothing)

patch = [0x00000b4e, 0x00001340, 0x00001805, 0x00001dd3, 0x000026ff, 0x0000302e]
patch = map(lambda x: base + x, patch)

for addr in patch:
    project.hook(addr, set_eax)

sm = project.factory.simulation_manager(state)
sm.explore(find=find, avoid=avoid)

try:
    result = sm.found[0]
    for i in range(10):
        print(result.posix.dumps(i))
except:
    pass

```