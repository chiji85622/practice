import createSortTest from '../../helpers/createSortTest'
import sort from '../../../src/sort/shellSort'

createSortTest({
  method:sort,
  test:3,
  initSize:1000,
  incrementing:1000,
})

/**
 sort,多次相同序列长度
    √ 第1次,序列长度为：1000 (47ms)
    √ 第2次,序列长度为：1000 (31ms)
    √ 第3次,序列长度为：1000 (21ms)
  sort,不同长度的序列
    √ 第1次,序列长度为：1000 (21ms)
    √ 第2次,序列长度为：2000 (52ms)
    √ 第3次,序列长度为：3000 (89ms)

  console.log console.js:328
    ┌─────────┬──────┬────────┬─────────┬──────────┐
    │ (index) │ size │ native │ compare │ exchange │
    ├─────────┼──────┼────────┼─────────┼──────────┤
    │    0    │ 1000 │ 10962  │  13570  │   8113   │
    │    1    │ 1000 │ 10241  │  14046  │   8589   │
    │    2    │ 1000 │  9616  │  14058  │   8601   │
    └─────────┴──────┴────────┴─────────┴──────────┘

  console.log console.js:328
    ┌─────────┬──────┬────────┬─────────┬──────────┐
    │ (index) │ size │ native │ compare │ exchange │
    ├─────────┼──────┼────────┼─────────┼──────────┤
    │    0    │ 1000 │  9730  │  14310  │   8853   │
    │    1    │ 2000 │ 21437  │  33536  │  21172   │
    │    2    │ 3000 │ 33894  │  57101  │  37737   │
    └─────────┴──────┴────────┴─────────┴──────────┘

 */