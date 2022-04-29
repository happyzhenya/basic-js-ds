const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {

  constructor(){
    this.myroot=null;
  }

  root() {
    return this.myroot;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  insertNode(node, newNode){
    if (newNode.data<node.data){
      if (node.left===null){
         node.left=newNode;
      }else {
          this.insertNode(node.left, newNode)}
    } else{
    if (node.right===null){
       node.right=newNode;
    } else {
       this.insertNode(node.right, newNode)
  }
}
}

  add(data) {
    let newNode= new Node(data);
   
    if (this.myroot === null){
      this.myroot=newNode;
      
    } 
    else { 
      this.insertNode(this.myroot, newNode)}

     return 1;

   
  }

  


  has( data ) {
     let value=this.searchData(this.myroot, data);
     if(value){
       return true
     } else   {
       return false;
    }

   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  searchData(node, data){
    if (node==null) {return null;}
    else if (data>node.data){
         return this.searchData(node.right, data);
    }
    else if (data<node.data){
      return this.searchData(node.left, data);
 }
else { return node}
  }

  find(data) {
     let value=this.searchData(this.myroot, data);
     return value;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  removeNode(node, data){
    if(node===null)
    return null;
    else if(data<node.data){
      node.left=this.removeNode(node.left, data);
      return node;
    }
    else if(data>node.data){
      node.right=this.removeNode(node.right, data);
      return node;
    }
    else{
      if(node.left===null && node.right===null){
        node=null;
        return node;
      }
      if(node.left===null){
        node=node.right;
        return node;
      }
      else if(node.right===null){
        node=node.left;
        return node;
      }
      let newNode=this.minNode(node.right);
      node.data=newNode.data;
      node.right=this.removeNode(node.right, newNode.data)
      return node;
  }
  }

  minNode(node){
    let value=node;
    while(value.left){
      value=value.left
    }
    return value;
  }

  remove(data) {
    if (this.myroot===data){
      this.myroot=null;
      this.myroot.left=null;
      this.myroot.right=null;
    } else
    this.myroot=this.removeNode(this.myroot, data)
    return;
      // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let value=this.myroot;
    while(value.left){
      value=value.left
    }
    return value.data

   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    let value=this.myroot;
    while(value.right){
      value=value.right
    }
    return value.data
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};