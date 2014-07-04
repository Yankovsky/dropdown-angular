dropdown-angular
================

Demo: http://yankovsky.github.io/dropdown-angular/

You should add dropdown module to your application:

```javascript
angular.module('sampleApp', ['ya.dropdown'])
```

And then you can use it like:

```html
<div class='ya-dropdown'>
    I am simple one level dropdown
    <button class='ya-dropdown-toggle'>click me</button>
    <div class='ya-dropdown-content'>
        <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        </ul>
    </div>
</div>
```
