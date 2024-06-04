function issueCard(name, age, numBooksCheckedOut) {
    var card = {
        name: name,
        age: age,
        numBooksCheckedOut: numBooksCheckedOut || 0,
        isChild: false 
    }
    if (age < 12) {
        card.isChild = true;
    }
    return card;
}

function searchByAuthor(collection, author) {
    collectionByAuthor = [];
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].author === author) {
            collectionByAuthor.push(collection[i])
        }
    }
    if (!collectionByAuthor.length) {
        return `No book found for search criteria`;
    }
    return collectionByAuthor
}

module.exports = {
    issueCard,
    searchByAuthor,
 };