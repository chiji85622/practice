import createSortTest from '../../helpers/createSortTest'
import sort from '../../../src/sort/bubbleSort'

createSortTest({
  method:sort,
  test:3,
  initSize:1000,
  incrementing:1000,
})

/**
  bubbleSort,多次相同序列长度
    √ 第1次,序列长度为：1000 (470ms)
    √ 第2次,序列长度为：1000 (454ms)
    √ 第3次,序列长度为：1000 (426ms)
  bubbleSort,不同长度的序列
    √ 第1次,序列长度为：1000 (456ms)
    √ 第2次,序列长度为：2000 (1823ms)
    √ 第3次,序列长度为：3000 (4459ms)

  console.log console.js:328
    ┌─────────┬──────┬────────┬─────────┬──────────┐
    │ (index) │ size │ native │ compare │ exchange │
    ├─────────┼──────┼────────┼─────────┼──────────┤
    │    0    │ 1000 │  9397  │ 499500  │  253320  │
    │    1    │ 1000 │  9569  │ 499500  │  263269  │
    │    2    │ 1000 │  9985  │ 499500  │  252691  │
    └─────────┴──────┴────────┴─────────┴──────────┘

  console.log console.js:328
    ┌─────────┬──────┬────────┬─────────┬──────────┐
    │ (index) │ size │ native │ compare │ exchange │
    ├─────────┼──────┼────────┼─────────┼──────────┤
    │    0    │ 1000 │ 10277  │ 499500  │  246138  │
    │    1    │ 2000 │ 21313  │ 1999000 │ 1016930  │
    │    2    │ 3000 │ 33882  │ 4498500 │ 2241851  │
    └─────────┴──────┴────────┴─────────┴──────────┘
 */