# ais3_crackme

<DocsAD/>

```py
#!/usr/bin/env python

'''
b"ais3{I_tak3_g00d_n0t3s}"
'''

import angr
import claripy


def main():
    project = angr.Project("./ais3_crackme")

    argv = claripy.BVS("argv",100*6)

    initial_state = project.factory.entry_state(args=["self",argv])

    sm = project.factory.simulation_manager(initial_state)

    sm.explore(find=0x400602)

    found = sm.found[0]

    solution = found.solver.eval(argv, cast_to=bytes)

    return solution


if __name__ == '__main__':
    print(main())
```