### JS Array Methods Practice

<br>

**Section 3 of 3**

In your Week 5 Homework folder, create the following files:

- User.js
- Todo.js
- Post.js

In the User.js file, use the [placeholder User data](https://jsonplaceholder.typicode.com/users) at [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) to:

- create and print a list of phone numbers
- create and print a list of website and email pairs (pair them in a string, array, or object)

<br>

In the Todo.js file, use the [placeholder To-Do data](https://jsonplaceholder.typicode.com/todos?_limit=50) at [https://jsonplaceholder.typicode.com/todos?_limit=50](https://jsonplaceholder.typicode.com/todos?_limit=50) to:

- create a list of user 3's to-dos
- then find the number of user 3's incomplete tasks

<br>

In the Post.js file, use the [placeholder Post data](https://jsonplaceholder.typicode.com/posts?_limit=50) at [https://jsonplaceholder.typicode.com/posts?_limit=50](https://jsonplaceholder.typicode.com/posts?_limit=50) to:

- create a list of user 5's posts
- then, create a list of title and body pairs

<br>

<b>An example of the output you want is:</b>

```javascript
["1-770-736-8031 x56442", "010-692-6593 x09125"],
  [
    "hildegard.org, Sincere@april.biz",
    "anastasia.net, Shanna@melissa.tv",
    "ramiro.info, Nathan@yesenia.net",
  ][
    {
      userId: 9,
      id: 161,
      title: "ex hic consequuntur earum omnis alias ut occaecati culpa",
      completed: true,
    }
  ],
  [
    {
      userId: 5,
      id: 41,
      title: "non est facere",
      body:
        "molestias id nostrum\n" +
        "excepturi molestiae dolore omnis repellendus quaerat saepe\n" +
        "consectetur iste quaerat tenetur asperiores accusamus ex ut\n" +
        "nam quidem est ducimus sunt debitis saepe",
    },
  ],
  [
    {
      title: "non est facere",
      body:
        "molestias id nostrum\n" +
        "excepturi molestiae dolore omnis repellendus quaerat saepe\n" +
        "consectetur iste quaerat tenetur asperiores accusamus ex ut\n" +
        "nam quidem est ducimus sunt debitis saepe",
    },
  ];
```

---

## _Bonus Challenge_

Using the [placeholder To-Do data](https://jsonplaceholder.typicode.com/todos?_limit=50) at [https://jsonplaceholder.typicode.com/todos?_limit=50](https://jsonplaceholder.typicode.com/todos?_limit=50) :

- create an object that summarizes the incomplete tasks of users 1, 2, & 3

  - ex:

  ```javascript
  {
    user3: {
      totalTasks: x,
      totalIncomplete: y,
      incompleteTasks: [title1, title2, title3, ...]
    },
    user7: ...
  }
  ```
