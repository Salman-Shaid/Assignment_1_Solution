<h1>📝 TypeScript Blog Post</h1>
<p>A beginner-friendly guide to Interfaces, Types, and the keyof keyword in TypeScript.</p>

<hr>

<h2>Differences Between Interfaces and Types in TypeScript</h2>

<p>If you are learning TypeScript, you might notice that there are <strong>interfaces</strong> and <strong>types</strong>. At first glance, they look very similar—they both let you define the structure of objects. But there are some key differences that make each of them better for certain situations.</p>

<h3>What is an Interface?</h3>
<p>An <strong>interface</strong> is like a blueprint for an object. It tells TypeScript what properties an object should have and their types. Interfaces are very useful when working with <strong>classes</strong> or when you want to clearly define the shape of an object.</p>

<pre><code>interface User {
  name: string;
  age: number;
}
</code></pre>

<p>You can also <strong>extend</strong> an interface:</p>

<pre><code>interface Employee extends User {
  salary: number;
}
</code></pre>

<p>Interfaces support <strong>declaration merging</strong>, meaning you can declare the same interface multiple times and TypeScript will merge them automatically:</p>

<pre><code>interface User {
  email: string;
}
// Now User → { name: string; age: number; email: string; }
</code></pre>

<h3>What is a Type?</h3>
<p>A <strong>type</strong> is similar to an interface but more flexible. You can define objects, unions, intersections, tuples, or even primitive types.</p>

<pre><code>type ID = string | number;

type Person = {
  name: string;
  age: number;
}
</code></pre>

<p>Types can also be combined using an <strong>intersection</strong>:</p>

<pre><code>type Employee = Person & { salary: number };
</code></pre>

<p>Unlike interfaces, types cannot be merged once declared.</p>

<h3>Key Differences</h3>

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

<h3>When to Use Which?</h3>
<ul>
  <li>Use <strong>interfaces</strong> for clear object blueprints, classes, and APIs.</li>
  <li>Use <strong>types</strong> for unions, tuples, primitives, or complex type combinations.</li>
</ul>

<hr>

<h2>The <code>keyof</code> Keyword in TypeScript</h2>

<p>The <code>keyof</code> keyword allows you to get all property names of a type as a <strong>union of strings</strong>. This is useful for creating <strong>type-safe functions</strong>.</p>

<h3>Example</h3>

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

<h3>Why Use <code>keyof</code>?</h3>
<ul>
  <li>Ensures only valid keys are used.</li>
  <li>Prevents runtime errors from misspelled property names.</li>
  <li>Helps create reusable and type-safe utility functions.</li>
</ul>

<p>In short, <code>keyof</code> allows you to safely work with object keys, making your code more reliable and less error-prone.</p>

<hr>

<p>By understanding interfaces, types, and the <code>keyof</code> keyword, you can write <strong>cleaner, safer TypeScript code</strong> and avoid common pitfalls.</p>
