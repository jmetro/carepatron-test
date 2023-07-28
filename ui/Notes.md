* [react-hook-form](./package.json)
* Added react-hook-form for more scalable and efficient forms.

* [added theme customization](./src/themes/customTheme.tsx)
* added customization theme to change the app typography to system typography. it is to closely match the design spec

* I noticed that there is an update client API. And adding client update function, opening the client data in the modal make sense.
* We can add email and phone validation as well. 

* I made the add client modal stateful thinking that it should be able to work when puting into different parts of the page. ie: when other page will use it. or if needed to be used for client edit

Blockers
* had some issues in extending material-ui's component interfaces to custom components. had to do some research on how to extend it gracefully
* Had some thoughts if I should put the style overrides of inputs in themes or style for the component
* Had some thoughts if I should use sx, styled or useTheme. decided to implement all
* Had to do steppers manually, not sure why the stepicon is not automatically added compared to docs.

Overall experience and thoughts
* it took me around 20 hours to finish the test. I feel like I've been refreshed on how to use Material UI. Overall, the test is great! 