var nestBy = require('../index')

describe('nest by', function () {
  it('works for arrays', function () {
    var list =
      [ { name: 'Marge', gender: 'f' },
        { name: 'Homer', gender: 'm' },
        { name: 'Bart', gender: 'm' } ]

    var result = nestBy(list, 'gender')

    expect(result).toEqual(
      { f: [ { name: 'Marge', gender: 'f' } ],
        m: [ { name: 'Homer', gender: 'm' },
             { name: 'Bart', gender: 'm' } ] })
  })

  it('works for objects', function () {
    var list =
      { marge: { name: 'Marge', gender: 'f' },
        homer: { name: 'Homer', gender: 'm' },
        bart: { name: 'Bart', gender: 'm' } }

    var result = nestBy(list, 'gender')

    expect(result).toEqual(
      { f: { marge: { name: 'Marge', gender: 'f' } },
        m: { homer: { name: 'Homer', gender: 'm' },
             bart: { name: 'Bart', gender: 'm' } } })
  })

  it('works for arrays, recursively', function () {
    var list =
      [ { name: 'Marge', gender: 'f' },
        { name: 'Homer', gender: 'm' },
        { name: 'Bart', gender: 'm' } ]

    var result = nestBy(list, 'gender', 'name')

    expect(result).toEqual(
      { f: { Marge: [ { name: 'Marge', gender: 'f' } ] },
        m: { Homer: [ { name: 'Homer', gender: 'm' } ],
             Bart: [ { name: 'Bart', gender: 'm' } ] } })
  })
})
