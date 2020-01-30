function getName (node) {
    return node.name
}

function headNode (list, collection) {
    return collection[list]
}

function next(head, collection){
    return collection[head.next]
}
function nodeAt(num, list, collection){
   let currentNode = headNode(list, collection)
   for (let i=0; i < num; i++){
       currentNode = next(currentNode, collection)
   }
   return currentNode
}

function addressAt(num, list, collection){
    if (num === 0){
        return list
    } else {
        let currentNode = nodeAt(num-1, list, collection)
        return currentNode.next
    }
}

function indexAt(node, collection, list){
    let currentNode = headNode(list, collection)
    let i = 0
    while(currentNode !== node){
        i++
        currentNode = next(currentNode, collection)
    }
    return i
}

function insertNodeAt(num, newLocation, list, collection){
    let previous = nodeAt(num-1, list, collection)
    let successor = nodeAt(num, list, collection)

    let previousIndex = indexAt(previous, collection, list)
    let successorIndex = indexAt(successor, collection, list)
    let previousAddress = addressAt(previous, list, collection)
    let successorAddress = addressAt(successor, list, collection)

    previous.next = newLocation
    let newNode = collection[newLocation]
    newNode.next = successorAddress
}

function deleteNodeAt(num, list, collection){
    let previous
    let current = headNode(list, collection)

    for (let i = 0; i < num; i++){
        previous = current
        current = next(current, collection)
    }
    previous.next = current.next
}