# rmc-steps

---

React steps component.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rmc-steps.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rmc-steps
[download-image]: https://img.shields.io/npm/dm/rmc-steps.svg?style=flat-square
[download-url]: https://npmjs.org/package/rmc-steps
[travis-image]: https://img.shields.io/travis/react-component/m-steps.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/m-steps
[coveralls-image]: https://img.shields.io/coveralls/react-component/m-steps.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/m-steps?branch=master

## Usage

```bash
npm install rmc-steps
```

```jsx
<Steps current={1}>
  <Steps.Step title="first" />
  <Steps.Step title="second" />
  <Steps.Step title="third" />
</Steps>
```

## Example

http://localhost:8002/examples

online example: http://react-component.github.io/m-steps/examples/

## API

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>direction</td>
      <td>string</td>
      <td>horizontal</td>
      <td>direction of Steps, enum: `horizontal` or `vertical`</td>
    </tr>
    <tr>
      <td>current</td>
      <td>number</td>
      <td>0</td>
      <td>index of current step</td>
    </tr>
    <tr>
      <td>size</td>
      <td>string</td>
      <td></td>
      <td>size of Steps, could be `small`</td>
    </tr>
    <tr>
      <td>labelPlacement</td>
      <td>string</td>
      <td></td>
      <td>placement of step title, could be `vertical`</td>
    </tr>
    <tr>
      <td>status</td>
      <td>string</td>
      <td>wait</td>
      <td>status of current Steps, could be `error` `process` `finish` `wait`</td>
    </tr>
  </tbody>
</table>

### Steps.Step

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>ReactNode</td>
      <td></td>
      <td>title of step item</td>
    </tr>
    <tr>
      <td>description</td>
      <td>ReactNode</td>
      <td></td>
      <td>description of step item</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>ReactNode or string</td>
      <td></td>
      <td>set icon of step item</td>
    </tr>
    <tr>
      <td>status</td>
      <td>string</td>
      <td></td>
      <td>status of current Steps, could be `error` `process` `finish` `wait`</td>
    </tr>
  </tbody>
</table>

## Development

```
npm install
npm start
```

## License

rmc-steps is released under the MIT license.
