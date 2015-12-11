const {test, assert} = require('scar');
const barenode = require('../../lib/barenode');

test('barenode is object', () => {
    assert.equal(typeof barenode, 'object');
    assert.equal(Object.prototype.toString.call(barenode), '[object Object]'); // eslint-disable-line prefer-reflect
});

test('barenode has no own props', () => {
    assert.deepEqual(Object.keys(barenode), []);
});
