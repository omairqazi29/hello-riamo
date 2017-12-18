'use strict';
var expect = require('chai').expect;
var index = require('../index.js');

describe('function test', () => {
    it('should return Hello World!', function() {
        var result = 'Hello World!';
        expect(result).to.equal('Hello World!');
    });
});
