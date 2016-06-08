# Unit Testing with QUnit

QUnit is a no frills test harness. It provides an object QUnit with a method .test. This method receives a string and a function. The string is the name of the test, the function is the tests.

You run tests against an assert object which has an API here: <http://api.qunitjs.com/category/assert/>. If any of the tests fail, the user is alerted.

If you wanted to check that a number had a particular value for example, you might do this:

    assert.true(someNumber == 12)

## Reading

Read up on QUnit Asserts statements here: <http://api.qunitjs.com/category/assert/>

## Exercise

Use QUnit to test your sort function from the collections exercise. Create a collection, sort it, and test the result is as expected.

## Further reading

Writing testable code: <http://qunitjs.com/intro/>


# Jasmine

Jasmine is a common alternative to QUnit. It provides a syntax which is similar to RSpec, which you might prefer.

|QUnit        |Jasmine     |
|-------------|------------|
|QUnit.module |describe    |
|QUnit.test   |it          |
|assert       |expect      |

Jasmine also has matchers, like RSpec. The QUnit example above could be rewritten:

    expect(someNumber).toBe(12)


## Reading

Read up on Jasmine here: <http://jasmine.github.io/2.0/introduction.html>


## Exercise

Modify the QUnit test you wrote previously to use Jasmine.
