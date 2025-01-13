# JavaScript Output-Based Questions

## Table of Contents

1. **Basic Output Questions**
   - What is the output of simple expressions and operations?
2. **Type Coercion and Comparison**
   - How JavaScript handles type coercion and strict equality.
3. **Destructuring and Object Manipulation**
   - Handling nested objects and destructuring.
4. **Array Manipulations**
   - Working with arrays and their methods.

---

## Questions and Explanations

### 1. **Basic Output Questions**

```javascript
console.log(1 + "2" + "2");
```

### 2. **Comparison of Expressions**

```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

### 3. **Unary Plus with Strings**

```javascript
console.log(+"1" + "1");
```

### 4. **Boolean Arithmetic**

```javascript
console.log(true + false);
```

### 5. **NaN Comparisons**

```javascript
console.log(NaN == false);
console.log(NaN == NaN);
```

### 6. **Null and Undefined**

```javascript
console.log(null == undefined);
console.log(null === undefined);
```

### 7. **String Comparison**

```javascript
console.log("2" > "12");
```

### 8. **Strict Equality**

```javascript
console.log(0 === false);
```

### 9. **Type Checking**

```javascript
console.log(typeof false);
console.log(typeof typeof false);
```

### 10. **Array and Object Comparison**

```javascript
console.log([1, 2, 3] == [1, 2, 3]);
console.log({} == {});
```

### 11. **Arithmetic with Strings**

```javascript
console.log("2" + 4 * 3);
```

### 12. **Mixed Arithmetic**

```javascript
console.log(4 + 3 + 2 + "1");
```

### 13. **Subtraction with Strings**

```javascript
console.log(1 - "1");
```

### 14. **Type of NaN**

```javascript
console.log(typeof NaN);
console.log(typeof typeof NaN);
```

### 15. **Variable Scope**

```javascript
function foo() {
    var x = 10;
    console.log(x);
}
foo();
console.log(x);
```

### 16. **Object Destructuring**

```javascript
let userData = {
    name: "Lokesh",
    age: 30,
    "user-name" : "Lokesh@7695"
};

// Destructure user-name property
const { "user-name": userName } = userData;
console.log(userName);
```

### 17. **Deep Copy Objects**

```javascript
const user = {
    name: "Lokesh",
    age: 30,
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
};

const userCopy = JSON.parse(JSON.stringify(user));
userCopy.address.city = "Delhi";
console.log(user.address.city);
```

### 18. **String and Arithmetic Operations**

```javascript
console.log(typeof "5" + 3);
console.log(typeof "5" - 3);
```

### 19. **Floating Point Arithmetic**

```javascript
let x = 0.1 + 0.2;
let y = 0.3;
console.log(x == y);
```

### 20. **Loose Equality Comparisons**

```javascript
let x1 = false;
let y1 = "0";
let z = 0;

console.log(x1 == y1);
console.log(x1 == z);
```

### 21. **Type of Infinity**

```javascript
let data = Infinity;
console.log(typeof data);
```

### 22. **Boolean of Array**

```javascript
let arr = [];
console.log(Boolean(arr));
```

### 23. **Logical Operators**

```javascript
let x = true;
let y = false;
let z = x + y && x * y;
console.log(z);
```

### 24. **Pre-Increment with Strings**

```javascript
let x = 1;
let y = "1";

console.log(++x, ++y);
```

### 25. **Boolean Arithmetic**

```javascript
let x = true + true;
let y = x + false;

console.log(y);
```

### 26. **Length of Type String**

```javascript
let x = 7;
let y = (typeof x).length;

console.log(y);
```

### 27. **Type of Comparison Result**

```javascript
let x = 6;
let y = typeof (x == 6);
console.log(y);
```

### 28. **Array Copying**

```javascript
let x = [1, 2, 3];
let y = x.slice();

console.log(y, x === y);
```

### 29. **Spread Operator with Arrays**

```javascript
const a = [1, 2, 3];
const b = [...a];
b.push(4);

console.log(a);
```

### 30. **Array Sorting**

```javascript
let x = [31, 2, 8];
x.sort();

console.log(x);
```

### 31. **Boolean Comparisons**

```javascript
let x = 0;
let y = "0";

console.log(false == x);
console.log(false == y);
```

### 32. **Array Destructuring with Reverse**

```javascript
let x = [1, 2, 3, 4];
let [a, ...b] = x.reverse();

console.log(b);
```

### 33. **Boolean and Number Comparison**

```javascript
const x = true;
const y = 1;

console.log(x == y, x === y);
```
