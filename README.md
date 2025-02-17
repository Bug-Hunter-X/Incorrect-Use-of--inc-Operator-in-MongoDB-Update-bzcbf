# Incorrect Use of $inc Operator in MongoDB

This example demonstrates an incorrect use of the `$inc` operator in a MongoDB update operation.  The `$inc` operator is used to increment a numeric field by a specified value.  However, in this example, we are attempting to increment the `age` field by the string value '1'. This will not produce the desired result.

## Bug
The bug is in the use of the `$inc` operator. The value provided must be a number. Using a string will result in an error or unexpected behavior.

## Solution
The solution involves providing a numerical value to the `$inc` operator for correct incrementing.

## How to reproduce
1. Set up a MongoDB database.
2. Create a collection named `myCollection`.
3. Insert a document such as `db.myCollection.insertOne({ name: "John", age: 30 })`
4. Run the provided incorrect JavaScript code.
5. Observe the result, which should show the update didn't increment `age` as expected.
6. Run the corrected code to see the correct increment.

