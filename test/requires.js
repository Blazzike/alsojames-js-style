/* eslint strict: 0, global-require: 0 */

'use strict';

const test = require('tape');

test('all entry points parse', (tape) => {
  tape.doesNotThrow(() => require('../index'), 'index does not throw');
  tape.doesNotThrow(() => require('../legacy'), 'legacy does not throw');
  tape.doesNotThrow(() => require('../whitespace'), 'whitespace does not throw');

  tape.end();
});
