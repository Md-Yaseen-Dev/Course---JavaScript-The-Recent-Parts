> # Strings

## Template Strings (Template literals)
 
   ```Template literals are literals deliminited with backtick(``)characters allowing for multi-line Strings, string interpolation with embedded expression, and special constructs called tagged templates1.```

   ``` In other words template are enclosed with backtick(``) instead of single or double quotes.```



```javascript
   `string text`

   `Easy string template`

   `string line 1
    string line 2`

    `string text ${expression} string text `

    tagfunction `string text ${expression} string text`


```


*Note:-* Invalid escape sequences will cause a syntax error, unless a tag function is used.

Escape character is known a character include backslash(\)

Ex \b , \f ,\r \t ,\v  etc.

``In simple words to understands easily ,it is an example like IIFE . and IIFE works when we involed. so same thing  happens with string it is immediately goes and construct built and drop it.``

To escape a backtick in a template literal, put a backslash(\) before the back tick is strictly equal to strings as shown in the example below

*example*

```javascript
`\ ` === " " // ouput : true

`\${name}`=== "${name}" // true  because  dollar signs can be escaped as well to prevent interpolation


`` === ""  // true
```

### To know more about click below :- 

  &#8594; [*strings*](../js/Strings/Template%20Strings.js)


## Tagged Templates 

Tagged templates is nothing but  fully control that pre-processing with template strings is called ad tagged literals or tagged templates.

In other words it is more advanced form of template literals. and tags allows you to prase template literals with a function.

```javascript
const name = "ben stokes"
const age = 32

function myTag(strings,nameExp, ageExp){
    const str0 = strings[0];
    const stri = strings[1]

    const agestr = ageExp >30 ? "senior" : "junior"

    return `${str0}${nameExp}${strl}${agestr}`
}
const output = myTag `This ${name} is a $(age)`
```

## string.padding()
 The padding is used to add from left to right (or) start to end until it reaches to the length.

 Padding are consist of two types
    1. padstart()
    2. padEnd()


####   1.padStart() :- 

  The padstaart() methods pads the current string to another string until the resulting string reaches the given length. and it is applied from the from left side.of a string /start of the string.

  **for Example** 

  ``` javascript
   var str = "hello readme "
   console.log(str.padStart(15, "-"))//output: --"hello readme 
  ```
        

####   2.padEnd():-
The padEnd() method pads the current string with a given string so that the resulting string reaches a given length. The padding is applied from the end of the current string.


**for Example** 

  ``` javascript
   var str = " hello readme "
   console.log(str.padEnd(15, "-"))//output: "hello readme --"
  ```



## String.protoype.trim()

The trim() method removes whitespace from both ends of a string and returns a new string, without modifiying the original string.

*example*
  
  ```javascript
  var str = "     johnsonberg     "

     console.log(str.trim()) // output : "johnsonberg"

  ```

  Note:-in the middle of the string spaces it will not do trim.


  >### To know more about click the link below :- 

 * > `trim` &#8594;[Click-Here](../js/Strings/Padding%20and%20trimming.js)

 * > `padding`&#8594;[Click-Here](../js/Strings/Padding%20and%20trimming.js)