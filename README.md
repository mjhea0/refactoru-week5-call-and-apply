## CLIENT10: Call &amp; Apply

### Objective

Get familiar with the call and apply methods available in Javascript.

### Resources

*   [call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) - MDN
*   [apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) - MDN
*   [Understanding JavaScript Function Invocation and “this”](http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/)
*   [useful js: call &amp; apply](http://phuu.net/2012/11/02/javascript-function-call-and-function-apply.html)

### Requirements

#### Part I

1.  Copy the following code into a new Javascript file. Create an html file that includes
script so you can run it in the browser.
    
    ```
    var person1 = {firstName: 'Marvin', age: 42, color: 'green'};
    var person2 = {firstName: 'Zaphod', age: 42000000000, color: 'peachpuff'};
    var person3 = {firstName: 'Gollum', age: 589, color: 'green'};
    var personList = [person1, person3];
    var sayHello = function() {
     alert('Hello, ' + this.firstName);
    };
    var greetOneAnother = function(a, b) {
     alert("{0}, meet {1} and {2}".supplant([this.firstName, a.firstName, b.firstName]);
    };
    ```

2.  Include [supplant](https://github.com/RefactorU/student-sample-code/blob/master/supplant.js).
3.  Call sayHello using the normal style of calling functions. What's wrong with this output?
4.  Use `call` to invoke sayHello in the correct _execution context_ (thecorrect value of this).
5.  Use `apply` to invoke greetOneAnother . Use personList for the list of arguments. The
output should read "Zaphod, meet Marvin and Gollum"

#### Part II

1.  Create a page with a three buttons.
2.  Add a single event handler such that clicking on any button displays a message that says which
button was clicked (print the text of the button).
3.  Now, what if we wanted to simulate the message of the first button being clicked, withoutthe user actually clicking it? Let's look for a way to reuse our event handler.There are a couple ways we could do this, but one way is to invoke our event handler manually.
First, if the event handler you wrote in the last step was an anonymous function, refactor it into
a named function.
4.  Next, call the event handler directly (in the normal way of calling a function) when the page loads.What gets reported for the button text?
5.  Use `call` to invoke the event handler. Select the first button and pass it as`this` so that the user sees the correct message with the first button's text.
