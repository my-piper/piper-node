
const { NextNode, RepeatNode } = require('../types/node-outputs');

test('should next node', () => {
  const plain = {
    outputs: { foo: 42, bar: 'hello' },
    delay: 5,
    costs: 10,
  };

  const node = NextNode.from(plain);
  expect(node).toBeInstanceOf(NextNode);

  expect(node.outputs['foo']).toEqual(42);
  expect(node.outputs['bar']).toEqual('hello');
  expect(node.delay).toBe(5);
  expect(node.costs).toBe(10);
});

test('should repeat node', () => {
  const plain = {
    state: { foo: 99 },
    delay: 500
  };

  const node = RepeatNode.from(plain);
  expect(node).toBeInstanceOf(RepeatNode);

  expect(node.state['foo']).toEqual(99);
  expect(node.delay).toBe(500);
});