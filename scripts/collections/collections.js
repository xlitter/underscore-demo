
var _ = require('underscore');

//each
var list = [1, 2, 3, 4, 5],
	obj = { one: 1, two: 2, three: 3 };

_.each(list, function (v) {
	console.log('list args', arguments);
}, { a: 'test' });


_.each(obj, function (arg) {
	console.log('obj args', arguments);
});

//find 
var result = _.find(list, function (v) {
	console.log('find list ', arguments);
	return v % 3 === 0;
});

console.log(result);

result = _.find(obj, function (v) {
	console.log('find obj ', arguments);
	return v % 2 === 0;
});
console.log(result);

//where

console.log('where obj list', _.where([obj], { one: 1 }));

console.log('where obj object', _.where({ a: obj, b: { one: 2 } }, { one: 2 }));


//invoke 支持调用前面列表中元素自带方法的调用 
 
console.log('sort list', _.invoke([[1, 2, 3], [5, 7, 3]], 'sort', function (a, b) { return a < b; }));
console.log('sort list', _.invoke([Math], 'max', 1, 15, 8));

//pluck 
console.log('pluck', _.pluck([{ a: 2, b: 5 }, { a: 3 }], 'a'));

//max
console.log('max list is empty', _.max([]));
console.log('max obj is empty', _.max({}));

//indexBy
console.log('list', _.indexBy([{ name: 'a', age: 20 }, { name: 'b', age: 30 }, { name: 'c', age: 20 }], 'age'));

//countBy
console.log('list', _.countBy([1, 2, 3, 4, 5, 6], function (v) { return v % 3 === 0 ? 'e3' : 'en3' }));
console.log('list', _.countBy([{ name: 'a', age: 20 }, { name: 'b', age: 30 }, { name: 'c', age: 20 }], function (v) { return v.age; }));

//sample 
console.log('sample Object list', _.sample([{ name: 'a', age: 20 }, { name: 'b', age: 30 }, { name: 'c', age: 20 }], 2));

//without
console.log('without list', _.without([1, 2, 3, 4], 2));

//different
console.log('different list', _.difference([1, 2, 3, 4, 5], [2, 3, 4]));

//union
console.log('union list', _.union([1, obj, 3, 2], [3, 2, obj]));
console.log('union not all array list', _.union(5, 6, [1, obj, 3, 2], [3, 2, obj]));

//intersection
console.log('intersection list', _.intersection([4, 5, 6], [5, 1, 2]));

//zip
console.log('zip list', _.zip([1, 2, 3, 4], [5, 6, 7]));
console.log('zip list', _.unzip(_.zip([1, 2, 3, 4], [5, 6, 7])));

//object
console.log('object list', _.object(['a', 'b', 'c'], [1, 2]));
console.log('object list', _.object([['a', 1], ['b', 2]]));

//range
console.log('range 10', _.range(10, 20, 3));

//memoize
var fibonacci = _.memoize(function (n) {
	return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
console.log('memoize', fibonacci(10));
console.log('memoize cache', fibonacci.cache);

//defer
_.defer(function () {
	console.log('this is defer');
});
console.log('defer end');

//before
var beforeFunc = _.before(3, function(obj){
	
	return 'beforeFunc'+(obj.cnt++);
}.bind(null, {cnt:0}));

console.log('1', beforeFunc());
console.log('2', beforeFunc());
console.log('3', beforeFunc());
console.log('4', beforeFunc());
console.log('5', beforeFunc());

//allkeys 
function Func(name){
	this.name = name;
	this.constructor = 'a';
}

Func.prototype.say  = function(){return this.name};
var func = new Func('Jum');
console.log(_.allKeys(func));
console.log(_.allKeys(func.constructor.prototype));
console.log()
console.log(Object.getOwnPropertyNames(func))

//isEqual
console.log('isEqual', _.isEqual(['a','b'], ['a', 'b']));
console.log('isEqual Object', _.isEqual({'a':1,'b':2}, {'a':1,'b':2}));

//times
console.log('times', _.times(3, function(n){ return n*2}));