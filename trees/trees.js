//Pretty Print



//---Instance Methods of BinarySearchTree---
//Insertion - CHECK
//Search
//Find Min - CHECK
//Find Max - CHECK
//Remove

function BinarySearchTree(root){
  this.root = root;
}

BinarySearchTree.prototype.findMin = function (currentPosition) {
  //check current position
  let currentNode = currentPosition || this.root;
  //base case
    //if no left node
    if(!currentNode.left) {
      return currentNode;
    } else {
      return this.findMin(currentNode.left)
    }

};

BinarySearchTree.prototype.findMax = function (currentPosition) {
  //check current position
  let currentNode = currentPosition || this.root;
  //base case
    //if no right node
    if(!currentNode.right) {
      return currentNode;
    } else {
      return this.findMax(currentNode.right)
    }

};

BinarySearchTree.prototype.findVal = function(val, currentPosition) {
  let currentNode = currentPosition || this.root;
  if (val < currentNode.val){
    if (!currentNode.left){
       return false;
    }
    return this.findVal(val, currentNode.left);
  }else if (val > currentNode.val){
    if (!currentNode.right){
      return false;
    }
    return this.findVal(val, currentNode.right)
   }
  return true;
}

BinarySearchTree.prototype.insert = function(val) {
  // Make root node = newly added node
  if(!this.root) {
    this.root = new Node(val)
  } else {
    //Traverse tree
    let currentNode = this.root;
    while(true){
      //check if val < current node.val
      if (val < currentNode.val){
        //YES? check if left child
        if (!currentNode.left){
          //NO? ADD NODE and break out of loop
          currentNode.left = new Node(val);
          return currentNode.left;
        }
        //YES? currentNode = currentNode.left
        currentNode = currentNode.left;
      }
      if (val > currentNode.val){
        //NO? check if right child
        if (!currentNode.right) {
          //NO? ADD NODE
          currentNode.right = new Node(val);
          return currentNode.right;
        }
        //YES? currentNode = currentNode.right
        currentNode = currentNode.right
      }
    }
  }
}


function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

let newTree = new BinarySearchTree();
let nums = [4,3,7,11,8];

for (var i = 0; i < nums.length; i++) {
  newTree.insert(nums[i]);
}

console.log(newTree.findVal(10, 0));
// console.log(newTree.findMax());
// console.log(newTree.findMin());
// console.log(JSON.stringify(newTree, ' ', 2));
