'use strict';

var assert = require('chai').assert;
var barenode = require('../lib/barenode');

describe('barenode', function () {

    it('is object', function () {

        assert.isObject(barenode);
    });

    it('has 0 properties', function () {

        assert.lengthOf(Object.keys(barenode), 0);
    });
});
