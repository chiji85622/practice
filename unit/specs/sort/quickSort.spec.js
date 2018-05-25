import createSortTest from '../../helpers/createSortTest'
import sort from '../../../src/sort/quickSort'

createSortTest({
  method:sort,
  test:3,
  initSize:1000,
  incrementing:1000,
})

/**
  sort,多次相同序列长度
    √ 第1次,序列长度为：1000 (38ms)
    √ 第2次,序列长度为：1000 (27ms)
    √ 第3次,序列长度为：1000 (22ms)
  sort,不同长度的序列
    √ 第1次,序列长度为：1000 (18ms)
    √ 第2次,序列长度为：2000 (44ms)
    √ 第3次,序列长度为：3000 (67ms)

  console.log console.js:328
    ┌─────────┬──────┬────────┬─────────┬──────────┐
    │ (index) │ size │ native │ compare │ exchange │
    ├─────────┼──────┼────────┼─────────┼──────────┤
    │    0    │ 1000 │ 10116  │  11849  │   2372   │
    │    1    │ 1000 │  9620  │  14268  │   2330   │
    │    2    │ 1000 │  9446  │  13029  │   2370   │
    └─────────┴──────┴────────┴─────────┴──────────┘

  console.log console.js:328
    ┌─────────┬──────┬────────┬─────────┬──────────┐
    │ (index) │ size │ native │ compare │ exchange │
    ├─────────┼──────┼────────┼─────────┼──────────┤
    │    0    │ 1000 │  9523  │  11834  │   2376   │
    │    1    │ 2000 │ 21338  │  26072  │   5326   │
    │    2    │ 3000 │ 34658  │  41880  │   8265   │
    └─────────┴──────┴────────┴─────────┴──────────┘
 */