# nest-by

> Groups an array/object by property values or callback

Works like [group-by] or [lodash.groupBy], but also:

- can nest recursively
- works with objects as well as arrays

[group-by]: https://www.npmjs.com/package/group-by
[lodash.groupBy]: https://lodash.com/docs#groupBy

## Usage

> `nestBy(object or array, property, [...properties])`

## Arrays

```js
list =
  [ { name: 'Marge', gender: 'f' },
    { name: 'Homer', gender: 'm' },
    { name: 'Bart', gender: 'm' } ]

result = nestBy(list, 'gender')
//  { f: [ { name: 'Marge', gender: 'f' } ],
//    m: [ { name: 'Homer', gender: 'm' },
//         { name: 'Bart', gender: 'm' } ] }
```

## Objects

```js
list =
  { marge: { name: 'Marge', gender: 'f' },
    homer: { name: 'Homer', gender: 'm' },
    bart: { name: 'Bart', gender: 'm' } }

var result = nestBy(list, 'gender')
// f:
//   marge: { name: 'Marge', gender: 'f' }
// m:
//   homer: { name: 'Homer', gender: 'm' }
//   bart: { name: 'Bart', gender: 'm' }
```

## Recursive

```js
list =
  [ { name: 'Marge', gender: 'f' },
    { name: 'Homer', gender: 'm' },
    { name: 'Bart', gender: 'm' } ]

result = nestBy(list, 'gender', 'name')
//  f:
//    'Marge':
//      [ { name: 'Marge', gender: 'f' } ]
//  m:
//    'Homer':
//      [ { name: 'Homer', gender: 'm' } ]
//    'Bart':
//      [ { name: 'Bart', gender: 'm' } ]
```

## Thanks

**nest-by** © 2015+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/nest-by/contributors
