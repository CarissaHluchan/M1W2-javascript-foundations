function createTape(title, readyToPlay) {
    tape = {
        title: title || "",
        readyToPlay: readyToPlay || false,
    }
    return tape;
}

function reset() {
    if (!tape.readyToPlay) {
        tape.readyToPlay = true;
    }
    return tape;
}

function createCollection() {
    var collection = [];
    for (var i = 0; i < arguments.length; i++) {
        collection.push(arguments[i]);
    }
    if (!collection.length) {
        return `Your collection is empty.`;
    }
    return collection;
}

function previewCollection(collection) {
    var preview = [];
    for (var i = 0; i < collection.length; i++) {
        preview.push(collection[i].title)
    }
    return preview;
}

module.exports = {
    createTape,
    reset,
    createCollection,
    previewCollection,
}