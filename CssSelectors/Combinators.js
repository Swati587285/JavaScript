/*
Website Used- https://www.flipkart.com/

for navigation between parent and child , we use space and >
1. Descendant combinator — space
Element name- Search box
Syntax- parentTag childTag
Locator- div input

2. Child combinator — >
Element name- Search box
Syntax- parentTag>childTag
Locator- div>input

for navigation between childs , we use + and ~
3. Adjacent sibling — + when following sibling of same parent
Website Used- https://www.amazon.in/
Element name- Search box
Syntax- child+child of same parent
Locator- label[for='twotabsearchtextbox']+input

4. General sibling — ~ when following sibling of different parent
Element name- Search box
Syntax- child~child of different parent 
Locator- 

*/