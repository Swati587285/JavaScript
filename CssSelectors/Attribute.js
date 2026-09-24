/*
Website used: https://www.booking.com/

Element name- Signin page
1. tagname[attribute] — Attribute exists
Locator- input[type]

2. tagname[attribute="value"] — Exact match
Locator- input[type='email']

3.tagname[attribute~="value"] — Contains a word
Matches when the attribute contains the specified whole word in a space-separated list
Locator- input[placeholder~='email']

4.tagname[attribute|="value"] — Starts with value or value followed by -
Website used: https://www.amazon.in/
Element name- Langauge page
Locator- input[value="en_IN"]

5. [attr^="value"] — Starts with. Matches attributes whose value starts with the specified text
Website Used: https://www.amazon.in/
Element name - Search box
Locator- input[class^="nav"][placeholder="Search Amazon.in"]

6.[attr$="value"] — Ends with
Matches attributes whose value ends with the specified text
Locator- input[class$="progressive-attribute"][placeholder="Search Amazon.in"]

7.[attr*="value"] — Contains text
Matches when the attribute value contains the specified text anywhere
Locator- input[class*="input "][placeholder="Search Amazon.in"]















*/