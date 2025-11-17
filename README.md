<h1>📝 TypeScript Blog Post</h1>
<h2>Exploring Interfaces, Types, and the keyof Keyword</h2>







<h1>Differences Between Interfaces and Types in TypeScript</h1>

<p>If you are learning TypeScript, you might notice that there are <strong>interfaces</strong> and <strong>types</strong>. 
At first glance, they look very similar—they both let you define the structure of objects. 
But there are some key differences that make each of them better for certain situations. Let’s break it down in simple terms.</p>

<h2>What is an Interface?</h2>

<p>An <strong>interface</strong> is like a blueprint for an object. It tells TypeScript what properties an object should have and their types. Interfaces are very useful when working with <strong>classes</strong> or when you want to clearly define the shape of an object.</p>

<pre><code>interface User {
  name: string;
  age: number;
}
</code></pre>

<p>You can also <strong>extend</strong> an interface to create a new one:</p>

<pre><code>interface Employee extends User {
  salary: number;
}
</code></pre>

<p>Another cool feature of interfaces is <strong>declaration merging</strong>. You can define the same interface more than once, and TypeScript will automatically combine them:</p>

<pre><code>interface User {
  email: string;
}

// Now User → { name: string; age: number; email: string; }
</code></pre>

<h2>What is a Type?</h2>

<p>A <strong>type</strong> is similar to an interface but more flexible. You can use a type to define objects, but also <strong>unions, intersections, tuples, or even primitive types</strong>.</p>

<pre><code>type ID = string | number;

type Person = {
  name: string;
  age: number;
}
</code></pre>

<p>Types can also be combined using an <strong>intersection</strong>:</p>

<pre><code>type Employee = Person & { salary: number };
</code></pre>

<p>Unlike interfaces, types <strong>cannot be declared twice</strong>. Once you create a type, you cannot merge it like interfaces.</p>

<h2>Key Differences in Simple Words</h2>

<table>
  <tr>
    <th>Feature</th>
    <th>Interface</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>Can extend</td>
    <td>✔ Yes (extends)</td>
    <td>✔ Yes (&)</td>
  </tr>
  <tr>
    <td>Can merge</td>
    <td>✔ Yes</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <td>Can do unions/tuples</td>
    <td>❌ Limited</td>
    <td>✔ Yes</td>
  </tr>
  <tr>
    <td>Best for</td>
    <td>Objects, Classes, APIs</td>
    <td>Flexible types, unions, tuples</td>
  </tr>
</table>

<h2>When to Use Which?</h2>

<ul>
  <li>Use <strong>interfaces</strong> when you want a clear object blueprint, like for classes or API responses.</li>
  <li>Use <strong>types</strong> when you need more flexibility, like unions or complex type combinations.</li>
</ul>

<h2>Conclusion</h2>

<p>Interfaces and types are both useful, but they have their own strengths:</p>

<ul>
  <li>Interfaces → clean, clear, extendable, mergeable.</li>
  <li>Types → flexible, can do unions and intersections.</li>
</ul>

<p>By knowing the differences, you can write <strong>cleaner, safer TypeScript code</strong> and avoid confusion later.</p>













<h1>The <code>keyof</code> Keyword in TypeScript?</h1>

<p>The <code>keyof</code> keyword is used to get all the keys of a type as a <strong>union of string literals</strong>. 
It is very useful when you want to write <strong>type-safe functions</strong> that only accept valid object property names.</p>

<h2>Example:</h2>

<pre><code>type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User; // "name" | "age" | "email"

function getValue(obj: User, key: UserKeys) {
  return obj[key];
}

const person: User = { name: "Salman", age: 20, email: "test@gmail.com" };

console.log(getValue(person, "name")); // Works
// console.log(getValue(person, "address")); // Error: "address" is not a key of User
</code></pre>

<h2>Why use <code>keyof</code>?</h2>

<ul>
  <li>Ensures only valid keys are used.</li>
  <li>Prevents runtime errors from misspelled property names.</li>
  <li>Helps create reusable and type-safe utility functions.</li>
</ul>

<p>In short, <code>keyof</code> allows you to safely work with object keys without worrying about typos or invalid properties, making your code more reliable.</p>
