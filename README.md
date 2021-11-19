<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# itercusum

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative sum.

<section class="intro">

The cumulative sum is defined as

<!-- <equation class="equation" label="eq:cumulative_sum" align="center" raw="\begin{align*} s_0 &= x_0 \\ s_1 &= x_1 + s_0 \\ s_2 &= x_2 + s_1 \\ s_n &= x_n + s_{n-1} = x_n + \sum_{i=0}^{n-1} x_i \end{align*}" alt="Equation for the cumulative sum."> -->

<div class="equation" align="center" data-raw-text="\begin{align*} s_0 &amp;= x_0 \\ s_1 &amp;= x_1 + s_0 \\ s_2 &amp;= x_2 + s_1 \\ s_n &amp;= x_n + s_{n-1} = x_n + \sum_{i=0}^{n-1} x_i \end{align*}" data-equation="eq:cumulative_sum">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@755a26b39bb6429f6d0b6dd8d13bd0bd1ec5ba35/lib/node_modules/@stdlib/stats/iter/cusum/docs/img/equation_cumulative_sum.svg" alt="Equation for the cumulative sum.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-iter-cusum
```

</section>

<section class="usage">

## Usage

```javascript
var itercusum = require( '@stdlib/stats-iter-cusum' );
```

#### itercusum( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative sum.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itercusum( arr );

var s = it.next().value;
// returns 2.0

s = it.next().value;
// returns 3.0

s = it.next().value;
// returns 6.0

s = it.next().value;
// returns -1.0

s = it.next().value;
// returns -6.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **all** future iterations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random-iter-uniform' );
var itercusum = require( '@stdlib/stats-iter-cusum' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative sum:
var it = itercusum( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'sum: %d', v.value );
    }
    if ( v.done ) {
        break;
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/iter/cumean`][@stdlib/stats/iter/cumean]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative arithmetic mean.</span>
-   <span class="package-name">[`@stdlib/stats/iter/sum`][@stdlib/stats/iter/sum]</span><span class="delimiter">: </span><span class="description">compute the sum of all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats/iter/cuprod`][@stdlib/stats/iter/cuprod]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative product.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-cusum.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-cusum

[test-image]: https://github.com/stdlib-js/stats-iter-cusum/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-iter-cusum/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-cusum/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-cusum?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-cusum.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-cusum/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-cusum/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/cumean]: https://github.com/stdlib-js/stats-iter-cumean

[@stdlib/stats/iter/sum]: https://github.com/stdlib-js/stats-iter-sum

[@stdlib/stats/iter/cuprod]: https://github.com/stdlib-js/stats-iter-cuprod

<!-- </related-links> -->

</section>

<!-- /.links -->
