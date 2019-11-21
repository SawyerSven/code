class Node {
  constructor(data) {
    this.node = data;
    this.prent = null;
    this.children = [];
  }
}

class Tree {
  constructor(data) {
    this._root = new Node(data);
  }
  traverseDF(callback) {
    (function recurse(currentNode) {
      for (let i = 0; i < currentNode.children.length; i++) {
        recurse(currentNode.children[i]);
      }
      callback(currentNode);
    })(this._root);
  }
  traverseBF(callback) {
    let queue = [];
    queue.push(this._root);
    let currentNode = queue.shift();
    while (currentNode) {
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.push(currentNode.children[i]);
      }
      callback(currentNode);
      currentNode = queue.shift();
    }
  }
  contains(callback, traversal) {
    traversal.call(this, callback);
  }
  add(child, parent) {
    //实例一个node
    var child = new Node(data),
      parent = null,
      //找爹函数
      callback = function(node) {
        if (node.data === toData) {
          parent = node;
        }
      };
    //按某种方式执行找爹函数
    this.contains(callback, traversal);
    //找到了吗
    if (parent) {
      //找到了，领走，认爹
      parent.children.push(child);
      child.parent = parent;
    } else {
      //没找到，报错：没这个爹
      throw new Error('Cannot add node to a non-existent parent.');
    }
  }
  remove(node, parent, traversal) {
    var tree = this,
      parent = null,
      childToRemove = null,
      index;
    //因为是删除某个数据下的某个值，所以先定义找爹
    var callback = function(node) {
      if (node.data === fromData) {
        parent = node;
      }
    };
    //按某种方式找爹
    this.contains(callback, traversal);
    //爹存在吗
    if (parent) {
      //存在，找娃的排行
      index = findIndex(parent.children, data);
      //找着了吗
      if (index === undefined) {
        //妹找着
        throw new Error('Node to remove does not exist.');
      } else {
        //找着了，干掉，提头
        childToRemove = parent.children.splice(index, 1);
      }
    } else {
      //爹不存在，报错
      throw new Error('Parent does not exist.');
    }
    //拿头交差
    return childToRemove;
  }
}

//  --one deep:0 <root>
var tree = new Tree('one');

/*  --one deep:0 <root>
      --two deep:1 */
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

/*  --one deep:0 <root>
      --two   deep:1
      --three deep:1 */
tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

/*  --one deep:0 <root>
      --two   deep:1
      --three deep:1 
      --four  deep:1*/
tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

/*  --one deep:0 <root>
      --two   deep:1
        --five deep:2
      --three deep:1
      --four  deep:1*/
tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

/*  --one deep:0 <root>
      --two   deep:1
        --five deep:2
        --six  deep:2
      --three deep:1
      --four  deep:1*/
tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

/*  --one deep:0 <root>
      --two   deep:1
        --five deep:2
        --six  deep:2
      --three deep:1
      --four  deep:1
        --seven deep:2*/
tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

tree.traverseBF(data => {
  console.log(data);
});
