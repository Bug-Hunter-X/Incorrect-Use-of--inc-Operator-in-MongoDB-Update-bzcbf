```javascript
// Incorrect use of $inc operator in MongoDB update
db.collection('myCollection').updateOne({name: 'John'}, {$inc: {age: '1'}});
```