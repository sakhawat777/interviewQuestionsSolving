Following are frequently asked CSS and CSS3 interview questions for freshers as well as experienced Web developers.

1. What is CSS ?
   The full form of CSS is Cascading Style Sheets. It is a styling language which is simple enough for HTML elements. It is popular in web designing, and its application is common in XHTML also.
2. What is the origin of CSS ?
   Standard Generalized Markup Language marked the beginning of style sheets in 1980s.
3. What are the different variations of CSS ?
   The variations for CSS are:
   • CSS 1
   • CSS 2
   • CSS 2.1
   • CSS 3
   • CSS 4
4. What are the limitations of CSS ?
   Limitations are:
   • Ascending by selectors is not possible
   • Limitations of vertical control
   • No expressions
   • No column declaration
   • Pseudo-class not controlled by dynamic behavior
   • Rules, styles, targeting specific text not possible
5. What are the advantages of CSS ?
   Advantages are:
   • Bandwidth
   • Site-wide consistency
   • Page reformatting
   • Accessibility
   • Content separated from presentation
   CSS
6. What are CSS frameworks?
   It is a pre-planned libraries, which allows easier and more standards-compliant webpage styling, using CSS language.
7. How block elements can be centered with CSS1?
   Block level elements can be centered by:
   The margin-left and margin-right properties can be set to some explicit value:
   BODY {

width: 40em;

background: fluorescent;

}

P {

width: 30em;

margin-right: auto;

margin-left: auto

}

In this case, the left and right margins will be each, five ems wide since they split up the ten ems left over from (40em-30em). It was unnecessary for setting up an explicit width for the BODY element; it was done here for simplicity. 8. Who maintains the CSS specifications?
World Wide Web Consortium maintains the CSS specifications. 9. In how many ways can a CSS be integrated as a web page?
CSS can be integrated in three ways:
• Inline: Style attribute can be used to have CSS applied HTML elements.
• Embedded: The Head element can have a Style element within which the code can be placed.
• Linked/ Imported: CSS can be placed in an external file and linked via link element. 10. What benefits and demerits do External Style Sheets have?
Benefits:
• One file can be used to control multiple documents having different styles.
• Multiple HTML elements can have many documents, which can have classes.
• To group styles in composite situations, methods as selector and grouping are used.
Demerits:
• Extra download is needed to import documents having style information.
• To render the document, the external style sheet should be loaded.
• Not practical for small style definitions. 11. Discuss the merits and demerits of Embedded Style Sheets?
Merits of Embedded Style Sheets:
• Multiple tag types can be created in a single document.
• Styles, in complex situations, can be applied by using Selector and Grouping methods.
• Extra download is unnecessary.
Demerits of Embedded Style Sheets:
• Multiple documents cannot be controlled. 12. What does CSS selector mean?
A string equivalent of HTML elements by which declarations or a set of it, is declared and is a link that can be referred for linking HTML and Style sheet is CSS selector. 13. Enlist the media types CSS allows?
The design and customization of documents are rendered by media. By applying media control over the external style sheets, they can be retrieved and used by loading it from the network. 14. Differentiate logical tags from physical tags?
• While physical tags are also referred to as presentational mark-up, logical tags are useless for appearances.
• Physical tags are newer versions while logical tags are old and concentrate on content. 15. Differentiate Style Sheet concept from HTML?
While HTML provides easy structure method, it lacks styling, unlike Style sheets. Moreover, style sheets have better browser capabilities and formatting options. 16. Describe ‘ruleset’?
Ruleset : Selectors can be attached to other selectors to be identified by ruleset.
It has two parts:
• Selector, e.g. R and
• declaration {text-indent: 11pt} 17. Comment on the Case-sensitivity of CSS ?
Although, there are no case-sensitivity of CSS, nevertheless font families, URL’s of images, etc is. Only when XML declarations along with XHTML DOCTYPE are being used on the page, CSS is case -sensitive. 18. Define Declaration block?
A catalog of directions within braces consisting of property, colon and value is called declaration block.
e.g.: [property 1: value 3] 19. Enlist the various fonts’ attributes?
They are:
• Font-style
• Font-variant
• Font-weight
• Font-size/line-height
• Font-family
• Caption
• Icon

20. Why is it easy to insert a file by importing it?
    Importing enables combining external sheets to be inserted in many sheets. Different files and sheets can be used to have different functions. Syntax:
    @import notation, used with <Style> tag.
21. What is the usage of Class selector?
Selectors that are unique to a specific style, are called CLASS selectors. Declaration of style and association with HTML can be made through this. Syntax:
Classname
it can be A-Z, a-z or digits.
.top {font: 14em ;}, class selector
<Body class= “top”> this class is associated with element </body>
22. Differentiate Class selector from ID selector?
    While an overall block is given to class selector, ID selector prefers only a single element differing from other elements. In other words, ID are uniques while classes are not. Its possible that an element has both class and ID.
23. Can more than one declaration be added in CSS?
    Yes, it can be achieved by using a semicolon.
24. What is Pseudo-elements ?
    Pseudo-elements are used to add special effects to some selectors. CSS in used to apply styles in HTML mark-up. In some cases when extra mark-up or styling is not possible for the document, then there is a feature available in CSS known as pseudo-elements. It will allow extra mark-up to the document without disturbing the actual document.
25. How to overrule underlining Hyperlinks?
    Control statements and external style sheets are used to overrule underlining Hyperlinks.
    E.g.:
    B {

text-decoration: none;

}

<B href="career.html" style="text-decoration: none">link text</B>

26. What happens if 100% width is used along with floats all across the page?
    While making the float declaration, 1 pixel is added every time it is used in the form of the border, and even more float is allowed thereafter.
27. Can default property value be restored through CSS? If yes, how?
    In CSS, you cannot revert back to old values due to lack of default values. The property can be re- declared to get the default property.
28. Enlist the various Media types used?
    Different media has different properties as they are case insensitive.
    They are:
    • Aural – for sound synthesizers and speech
    • Print – gives a preview of the content when printed
    • Projection- projects the CSS on projectors.
    • Handheld- uses handheld devices.
    • Screen- computers and laptop screens.
29. What is CSS Box Model and what are its elements?
    This box defines design and layout of elements of CSS. The elements are:
    Margin: the top most layer, the overall structure is shown
    Border: the padding and content option with a border around it is shown. Background color affects the border.
    Padding: Space is shown. Background colour affects the border.
    Content: Actual content is shown.
30. What is contextual selector?
    Selector used to select special occurrences of an element is called contextual selector. A space separates the individual selectors. Only the last element of the pattern is addressed in this kind of selector. For e.g.: TD P TEXT {color: blue}
31. Compare RGB values with Hexadecimal color codes ?
    A color can be specified in two ways:
    • A color is represented by 6 characters i.e. hexadecimal color coding. It is a combination of numbers and letters and is preceded by #. e.g.: g {color: #00cjfi}
    • A color is represented by a mixture of red, green and blue. The value of a color can also be specified. e.g.: rgb(r,g,b): In this type the values can be in between the integers 0 and 255. rgb(r%,g%,b%): red, green and blue percentage is shown.
32. Define Image sprites with context to CSS ?
    When a set of images is collaborated into one image, it is known as ‘Image Sprites’. As the loading every image on a webpage consumes time, using image sprites lessens the time taken and gives information quickly.
    CSS coding:
    img.add { width: 60px; height: 55px; background: url (image.god) 0 0; }

In this case, only the part needed is used. The user can save substantial margin and time through this. 33. Compare Grouping and Nesting in CSS ?
Grouping: Selectors can be grouped having the same values of property and the code be reduced.
E.g. :
h1 {

color: blue;

}

h2 {

color: blue;

}

p {

color: blue;

}

It can be seen from the code that every element shares the same property. Rewriting can be avoided by writing each selector separated by a comma.
Nesting: Specifying a selector within a selector is called nesting.
P

{

color: red;

text-align: left;

}

.marked

{

background-color: blue;

}

.marked p

{

color: green;

}

34. How can the dimension be defined of an element ?
    Dimension properties can be defined by:
    • Height
    • Max-height
    • Max-width
    • Min-height
    • Min-width
    • Width
35. Define float property of CSS?
    By float property, the image can be moved to the right or the left along with the text to be wrapped around it. Elements before this property is applied do not change their properties.
36. How does Z index function?
    Overlapping may occur while using CSS for positioning HTML elements. Z index helps in specifying the overlapping element. It is a number which can be positive or negative, the default value being zero.
37. What is graceful degradation?
    In case the component fails, it will continue to work properly in the presence of a graceful degradation. The latest browser application is used when a webpage is designed. As it is not available to everyone, there is a basic functionality, which enables its use to a wider audience. In case the image is unavailable for viewing, text is shown with the alt tag.
38. What is progressive enhancement?
    It’s an alternative to graceful degradation, which concentrates on the matter of the web. The functionality is same, but it provides an extra edge to users having the latest bandwidth. It has been into prominent use recently with mobile internet connections expanding their base.
39. How can backward compatibility be designed in CSS?
    HTML sheet methods is collaborated with CSS and used accordingly.
40. How can the gap under the image be removed?
    As images being inline elements are treated same as texts, so there is a gap left, which can be removed by:
    CSS
    img { display: block ; }

41. Why is @import only at the top?
    @import is preferred only at the top, to avoid any overriding rules. Generally, ranking order is followed in most programming languages such as Java, Modula, etc. In C, the # is a prominent example of a @import being at the top.
42. Which among the following is more precedent: CSS properties or HTML procedures?
    CSS is more precedent over HTML procedures. Browsers, which do not have CSS support, display HTML attributes.
43. What is Inline style?
    The Inline style in a CSS is used to add up styling to individual HTML elements.
44. How comments can be added in CSS?
    The comments in CSS can be added with /_ and _/.
45. Define Attribute Selector ?
    It is defined by a set of elements, value and its parts.
46. Define property?
    A style, that helps in influencing CSS. E.g. FONT. They have corresponding values or properties within them, like FONT has different style like bold, italic etc.
47. What is Alternate Style Sheet?
    Alternate Style Sheets allows the user to select the style in which the page is displayed using the view>page style menu. Through Alternate Style Sheet, user can see a multiple version of the page on their needs and preferences.
48. Are quotes mandatory in URL’s?
    Quotes are optional in URL’s, and it can be single or double.
49. What is at-rule?
    Rule, which is applicable in the entire sheet and not partly, is known as at-rule. It is preceded by @ followed by A-Z, a-z or 0-9.
50. How can CSS be cascaded to mix with user’s personal sheet?
    Properties can be a set in recommended places and the document modified for CSS to mix with user’s personal sheet.
