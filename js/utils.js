function findElement(selector, node = document) {
    return node.querySelector(selector);
}

const creatElement = document.createElement