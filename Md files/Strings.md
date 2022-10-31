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