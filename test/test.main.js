
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
it('Should return 688 when 886 given', () => {
  const reversed = reverse(886);  
  assert.equal(reversed, 688);
}
);
it('Should return 21 when 12 given', () => {
  const reversed = reverse(12);  
  assert.equal(reversed, 21);
}
);

it('Should return 138 when 831 given', () => {
  const reversed = reverse(831);  
  assert.equal(reversed, 138);
}
);
it('Should return 102 when 201 given', () => {
  const reversed = reverse(201);  
  assert.equal(reversed, 102);
}
);
it('Should return 247 when 742 given', () => {
  const reversed = reverse(742);  
  assert.equal(reversed, 247);
}
);