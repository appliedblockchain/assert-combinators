## Summary

Functional assertion combinators.

Name                      | Type                                            | Runtime
--------------------------|-------------------------------------------------|------------------------------
Primitive                 | `string`                                        | `$.string`
Primitive                 | `number`                                        | `$.number`
Primitive                 | `boolean`                                       | `$.boolean`
Primitive                 | `undefined`                                     | `$.undefined`
Primitive                 | `null`                                          | `$.null`
Undefined or null         | `undefined \| null`                             | `$.nil`
Undefined or A            | `undefined \| A`                                | `$.undefinedOr(a)`
Nullable A                | `null \| A`                                     | `$.nullOr(a)`
Nillable A                | `undefined \| null \| A`                        | `$.nilOr(a)`
Unknown                   | `unknown`                                       | `$.unknown`
Array                     | `A[]`                                           | `$.array(a)`
Object                    | `{ a: A, b: B }`                                | `$.object({ a, b })`
Exact object              | `{ a: A, b: B }`                                | `$.exact({ a, b })`
Record                    | `Record<K, V>`                                  | `$.record(k, v)`
Keyed object              | `Record<string, undefined \| V>`                | `$.keyed(v)`
Intersection              | `A & B`                                         | `$.and(a, b)`
Union                     | `A \| B`                                        | `$.or(a, b)`
Date string `YYYY-MM-DD`  | `string`<sup>[weaker](#not-precise-types)</sup> | `$.dateString`
Defined                   | `Exclude<A, undefined>`                         | `$.defined(a)`
Literal                   | `"foo"`, `42`                                   | `$.eq('foo')`, `$.eq(42)`
Tuple                     | `[number, string]`                              | `$.tuple($.number, $.string)`
Finite number             | `number`<sup>[weaker](#not-precise-types)</sup> | `$.finite`
Positive number           | `number`<sup>[weaker](#not-precise-types)</sup> | `$.positive`
Safe integer              | `number`<sup>[weaker](#not-precise-types)</sup> | `$.safeInteger`
Greater than              | `number`<sup>[weaker](#not-precise-types)</sup> | `$.gt(42)`
Greater than              | `number`<sup>[weaker](#not-precise-types)</sup> | `$.gt(42)`
Greater or equal than     | `number`<sup>[weaker](#not-precise-types)</sup> | `$.gte(42)`
Non blank string          | `string`<sup>[weaker](#not-precise-types)</sup> | `$.nonBlankString`
Regexp                    | `string`<sup>[weaker](#not-precise-types)</sup> | `$.regexp(/^[a-z]+$/i)`
Strftime formatted string | `string`<sup>[weaker](#not-precise-types)</sup> | `$.strftime('%Y-%m-%d')`

## Utility functions

* identity
* if
* implies
* in
* indexer
* predicate
* rethrow

## Examples

```ts
import * as $ from '@appliedblockchain/assert-combinators'

ws.on('message', _ => {

  const { method, agree } = $.object({
    method: $.string,
    agree: $.boolean
  })(JSON.parse(_))

  // Types are correct:
  // method: string
  // agree: boolean

})
```

## Not precise types

In some cases runtime type assertions provide stronger guarantees than static types.

For example `$.finite` asserts that the value is not only a `number` but also that is not `NaN`, `Infinity` or `-Infinity`.

[Opaque types](#opaque-types) section provides solution for some cases.

## Opaque types

Unlike Flow, TypeScript doesn't directly support opaque types.

However, they can be emulated by intersecting with object containing unique property type which exists in static type system only. It does not exist in runtime value.

```ts
type Finite = number & { readonly _tag: 'Finite' }
```

Opaque types allow to design code in such a way that value of the type can be created in one place – as result of runtime type assertion – only. The only possible way of creating values of this type is to create valid values. Those assertions have to happen at construction and I/O boundaries only. Once value is validated, it enters static type system. It doesn't have to be re-validated anywhere else in the code. Usage of the value is safe, guaranteed to conform to this assertion.

Good examples of opaque type candidates are `NonEmptyArray<T>`, `Positive`, `Email`.
`ValidatedEmail` – ie. an email that passed some async validation can be used to annotate function parameter for functions that should be used only for validated emails – without the need for re-validating email in each function's body.

## License

MIT License

Copyright 2019 Applied Blockchain

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
