# Flexbox Overview:

* Flexbox is CSS Flexible Box Layout.

* Flexbox is a one-dimensional layout model as opposed to a two-dimensional layout model like the CSS Grid Layout. Flexbox is one-dimensional because it can only layouts one dimension at a time - either as a column or as a row.

* Flexbox is structured into two (2) components: **parent element (the flex conatiner)** and **child elements (flex items)**.

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
