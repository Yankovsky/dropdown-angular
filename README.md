dropdown-angular
================

Demo: http://yankovsky.github.io/dropdown-angular/

You should add dropdown module to your application:

```javascript
angular.module('sampleApp', ['ya.dropdown'])
```

And then you can use it like:

```html
<div ya-dropdown='open'>
    I am simple one level dropdown
    <button ng-click='open = !open'>click me</button>
    <div ng-if='open' ng-click='$event.stopPropagation()'>
        <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        </ul>
    </div>
</div>
```

Here ya-dropdown='open' means that on mouse click or Esc key pressed ```open``` will be set to false.
