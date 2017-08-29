const TestObject = require('../../backend/TestObject');

describe('test TestObject', () => {
	it('should be true', () => {
		expect(true==true).toBe(true);
	});
	it('get TestObject.a', () => {
		var obj = new TestObject(1,2);
		expect(obj.getA()).toBe(1);
	});
	it('get TestObject.b', () => {
		var obj = new TestObject(1,2);
		expect(obj.getB()).toBe(2);
	});
});
