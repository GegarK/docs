# hackcon2016_angry-reverser

<DocsAD/>

```py
import angr
import claripy


# b"HACKCON{VVhYS04ngrY}"

def main():
    flag = claripy.BVS('flag', 20 * 8)
    buf = 0x606000
    hereEntry = 0x400646
    find = 0x405a6e

    avoids = [0x402c3c, 0x402eaf, 0x40311c, 0x40338b, 0x4035f8, 0x403868,
              0x403ad5, 0x403d47, 0x403fb9, 0x404227, 0x404496, 0x40470a,
              0x404978, 0x404bec, 0x404e59, 0x4050c7, 0x405338, 0x4055a9,
              0x4057f4, 0x405a2b]

    proj = angr.Project('./yolomolo')

    state = proj.factory.blank_state(addr=hereEntry, add_options={angr.options.LAZY_SOLVES})
    state.memory.store(buf, flag, endness='Iend_BE')
    state.regs.rdi = buf

    for i in range(19):
        state.solver.add(flag.get_byte(i) >= 0x30)
        state.solver.add(flag.get_byte(i) <= 0x7f)

    simgr = proj.factory.simulation_manager(state)

    simgr.explore(find=find, avoid=avoids)
    found = simgr.found[0]
    return found.solver.eval(flag, cast_to=bytes)


if __name__ in '__main__':
    print(main())
```