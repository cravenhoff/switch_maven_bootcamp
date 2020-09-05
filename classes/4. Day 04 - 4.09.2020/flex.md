# Flexbox Basics:

### Overview:

* Flexbox is CSS Flexible Box Layout.

* Flexbox is a one-dimensional layout model as opposed to a two-dimensional layout model like the CSS Grid Layout. Flexbox is one-dimensional because it can only layouts one dimension at a time - either as a column or as a row.


### History:
***

* Before the Flexbox Layout module, there were four layout modes:
    - Block: for sections in a webpage
    - Inline: for text
    - Table: for two-dimensional table data
    - Positioned: for explicit position of an element

* The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.


### Key Concepts:
***

* Flexbox is structured into two (2) components: **parent element (the flex conatiner)** and **child elements (flex items)**.

* The Flex Container Properties:
    - flex-direction
    - flex-wrap: shorthand for both flex-direction and flex-wrap (eg: flex-flow: row wrap;)
    - flex-flow
    - justify-content
    - align-items
    - align-content

* Two axes of flexbox: **Main Axis (Horizontal)** and **Cross Axis (Vertical)**.

* Main Axis: Defined by "flex-direction"
    - row
    - row-reverse
    - column
    - column-reverse

* Cross Axis: Runs perpendicular to the Main Axis. Hence, if flex-direction is set to row/row-reverse, cross axis runs down the columns. If flex-direction is column/column-reverse, cross axis runs across/along the rows.

* Justifying and Aligning Flex Container Contents using "justify-content" and "align-items".

* **justify-content**: Aligns the contents (child-elements) in a flexbox horizontal and include the following values:
    - flex-start: aligns content to the left of the container.
    - flex-end: aligns content to the right of the container.
    - center: aligns content at the center of the container.
    - space-between: items display with equal spacing between them.
    - space-around: items display with equal spacing around them.

* **align-items**: Aligns items vertically and accepts the following values:
    - flex-start: items align to the top of the container.
    - flex-end: items align to the bottom of the container.
    - center: items align at the vertical center of the container.
    - baseline: items display at the baseline of the container.
    - stretch: items are stretched to fit the container.


### Notes:
***

* Flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based).

* Highly flexible: Support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).

* Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts.


##### Cheat Sheet: Flexbox Properties:

* display: flex
* flex-direction: row, row-reverse, column, column-reverse
* flex-flow
* flex-wrap: wrap, nowrap, wrap-reverse
* justify-content: flex-start, flex-end, center, space-between, space-around
* align-items: flex-start, flex-end, center, baseline, stretch
* align-content: space-between, space-around, stretch, center, flex-start, flex-end
* order: positive or negative integer values
* flex-grow: positive or negative integer values
* flex-shrink: positive or negative integer values
* flex-basis: pixel value (initial length of a flex item)
* flex: (shorthand for flex-grow, flex-shrink and flex-basis)
* align-self: flex-start, flex-end, center, space-between, space-around (specifies the alignment for the selected item inside the flexible container)

##### References:

* CSS Tricks: A Complete Guide to Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/.
* MDN: Basic Concepts of Flexbox: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox.
* W3C Schools: CSS Flexbox: https://www.w3schools.com/css/css3_flexbox.asp.
* Flexbox Froggy: https://flexboxfroggy.com/.
