function getNode(){
	//maybe pass a node ID
	return "Some node will be returned";
}

function addNode(nodeLat, nodeLong){
	//do database logic here

	return "You are trying to save a node with lat: "+ nodeLat +
	" and long: " + nodeLong;
}

function removeNode(nodeId){
	//remove logic perhaps
}

module.exports = {
	getNode: getNode,
	addNode: addNode,
	removeNode: removeNode
};