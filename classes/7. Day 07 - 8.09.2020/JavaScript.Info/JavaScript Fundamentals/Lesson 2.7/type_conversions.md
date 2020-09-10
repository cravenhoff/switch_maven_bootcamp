# Type Conversions

Type conversions help convert one type of data to another. The three most common ones are: to string, to number and to number - each suitable for specific operations/functions.

For example: Any type (number, booolean) inputed into a form can be converted into a string using the following string conversion function: **String(value_to_convert)**.

Any of the following conversions can work:

* Number to string
* String to number
* Boolean to string
* Boolean to number

#### Types of Conversions
***

* **String Conversion**

  - The String() Function is used to convert a value into a string.
  - Occurs when we output something, eg: alert(value);
  - **Syntax: String(value_to_convert);**

* **Numeric Conversion**

  - The Number() Function is used to convert a value into a number type. Numeric conversion usually occurs in mathematical operations.
  - **Syntax: Number(value_to_convert);**
  - Numeric conversion rules: undefined => NaN | null => 0 | true and false => 1 and 0 | string => whitespace are removed from the start and end. An empty string is equal to zero, and an error will spit out NaN.
***

* **Boolean Conversion**

  - The Boolean() Function is used to convert a value into a boolean (1 or 0).
  - Occurs in logical operations.
  - **Syntax: Boolean(value_to_convert);**
  - Boolean conversion rules: 0, undefined, null, NaN => false and anything else => true.

#### Notes
***

* IMPORTANT!: null and undefined behave differently in **to string** type conversion. _Null_ becomes _0 (zero)_ and _Undefined_ becomes _NaN_.
