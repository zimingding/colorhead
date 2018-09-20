const convert = require('../convert');
const chai = require('chai');
const expect = chai.expect;

describe('should convert', () => {
  it('unit test 1', () => {
    const input = 'lease walk 10 feet north to the start of the trail.';
    const output = convert(input);
    console.log(output);
    expect(output.length).to.equal(2);
  });
});