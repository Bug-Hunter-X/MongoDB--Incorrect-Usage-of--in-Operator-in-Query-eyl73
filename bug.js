```javascript
const query = { field: 'value' };

// Incorrect use of $in operator, leading to unexpected results.
db.collection.find( { field: { $in: [ 'value1', 'value2' ] } } );

// Correct way to use $in operator with multiple criteria
db.collection.find( { $or: [ { field: 'value1' }, { field: 'value2' } ] } );
```