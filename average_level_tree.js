class TreeNode {
constructor(data = null) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
	
	addChildren(left, right) {
		this.left = left;
		this.right = right;
	}
}

const root = new TreeNode(4);
const left1 = new TreeNode(2);
const right1 = new TreeNode(9);
root.addChildren(left1, right1);

const left2 = new TreeNode(3);
const right2 = new TreeNode(5);
left1.addChildren(left2, right2);

const right3 = new TreeNode(7);
right1.addChildren(null, right3);

let queue = new Queue();
queue.enqueue(root);

while(!queue.isEmpty()) {
	let sum = count = 0;
	let temp = new Queue();
	while(!queue.isEmpty()) {
		n = queue.peek();
		queue.dequeue();
		sum += n.data;
		count++;
		if(n.left != null) {
			temp.enqueue(n.left);
		}
		if(n.right != null) {
			temp.enqueue(n.right);
		}
	}
	queue = temp;
	console.log(sum/count);
}