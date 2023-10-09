<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`



<details><summary><b>Answer</b></summary>
<p>

#### Answer: A 

<i>The let keyword is used in the first line to declare the greeting variable. But as of right now, it doesn't have a value; by default, its value is undefined.The greeting variable is given an empty object in the second line. Curly braces are used in JavaScript to build objects. So now a greeting is an item. It will therefore return an empty object if I use console logging.
</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>When the sum function is invoked, it has two parameters, a and b, which when added together provide the result 12, which is of the form 1 + "2".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Firstly info is an object and it has a key called favoriteFood and its value is the 0 index of food. In the 3rd line of it reassign the value of favoriteFood key to a new value. if i console the food it remain same because we don't change any value of food we only change the info key value</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Consequently, if I run the sayHi function, it will just return "Hi there, undefined" because name is not declared or assigned a value.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here, each entry in the nums array will be iterated through using the forEach method. It accepts a num.num input that, when iterating, represents each entry in the nums array.There is an if clause that determines whether num is true. The count variable is raised by 1 if num is truthy. Numbers like 1, 2, and 3 are regarded as truthy in JavaScript, whereas 0 is regarded as false. Consequently, all elements other than 0 will result in the if statement being true.Nothing occurs because the if condition is false for a value of 0.If the if statement is true for 1, 2, and 3, count is subsequently increased by 1 each time.Therefore, since the final member of the array is 3 after the loop, count has that number.</i>

</p>
</details>
