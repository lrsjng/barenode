const {test, assert} = require('scar');
const barenode = require('../../lib/barenode');

test('barenode is object', () => {
    assert.equal(typeof barenode, 'object');
});

test('barenode has one own prop', () => {
    assert.deepEqual(Object.keys(barenode), ['hello']);
});

test('barenode.hello is function', () => {
    assert.equal(typeof barenode.hello, 'function');
});

test('barenode.hello() === \'Hello, undefined!\'', () => {
    assert.equal(barenode.hello(), 'Hello, undefined!');
});
