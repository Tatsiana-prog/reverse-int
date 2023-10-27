
const assert = require('assert');

const reverse = require('../src/main');

it('Should return 341 when 143 given', () => {
    const reversed = reverse(143);  
    assert.equal(reversed, 341);
  }
);

  it('Should return 185 when 581 given', () => {
    const reversed = reverse(581);  
    assert.equal(reversed, 185);
  }
);
  it('Should return 205 when 502 given', () => {
    const reversed = reverse(502);  
    assert.equal(reversed, 205);
  }
);
  it('Should return 129 when 921 given', () => {
    const reversed = reverse(921);  
    assert.equal(reversed, 129);
  }
);
  it('Should return 188 when 881 given', () => {
    const reversed = reverse(881);  
    assert.equal(reversed, 188);
  }
);