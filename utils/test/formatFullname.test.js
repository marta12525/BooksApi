const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return the correct record when format is wrong', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('jOhN dOe')).to.equal('John Doe');
  });

});