var MyClass = require('../lib/stylist').MyClass;

describe('MyClass', function() {
  it('lengthプロパティで配列長を取得する事ができる', function() {
    expect(MyClass.list.length).toEqual(3);
  });
});
