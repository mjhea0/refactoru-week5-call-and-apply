$(function() {

	//** supplant helper function */
  if (!String.prototype.supplant) {
	  String.prototype.supplant = function (o) {
      return this.replace(
        /\{([^{}]*)\}/g,
        function (a, b) {
          var r = o[b];
          return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
      );
	  };
  }

	//** globals */
	var person1 = {firstName: 'Marvin', age: 42, color: 'green'};
	var person2 = {firstName: 'Zaphod', age: 42000000000, color: 'peachpuff'};
	var person3 = {firstName: 'Gollum', age: 589, color: 'green'};
	var personList = [person1, person3];

	//** logic and functions */
	var sayHello = function() {
	 alert('Hello, ' + this.firstName);
	};
	var greetOneAnother = function(a, b) {
		alert("{0}, meet {1} and {2}".supplant([this.firstName, a.firstName, b.firstName]));
	};
	function clickButtons () {
		var buttonClicked = $(this).text();
		$('#buttontext').text(buttonClicked);
	};

	//** call and apply */

	//sayHello.call(person1)
	//greetOneAnother.apply(person2, personList)

	clickButtons.call($('.btn-primary'));
	$('button').on('click', clickButton);


})




