
class NextNode {
  static from(obj) {
    const instance = new NextNode();
    Object.assign(instance, obj);
    return instance;
  }
}

class RepeatNode {
  static from(obj) {
    const instance = new RepeatNode();
    Object.assign(instance, obj);
    return instance;
  }
}

module.exports = {
  NextNode,
  RepeatNode
};
