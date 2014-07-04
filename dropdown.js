angular.module('ya.dropdown', []).directive('yaDropdown', function($document, $timeout) {
  var ESCAPE_KEY_CODE = 27
  return {
    restrict: 'A',
    scope: {
      yaDropdown: '='
    },
    link: function(scope, element, attrs) {
      scope.$watch(function() {
        return !!scope.yaDropdown
      }, function() {
        if (scope.yaDropdown) {
          subscribe()
        } else {
          unsubscribe()
        }
      }, true)

      function hideDropdown() {
        scope.yaDropdown = false
        scope.$apply()
      }

      function subscribe() {
        $timeout(function() {
          $document.on('click', onClickOutside).on('keydown', onKeydown)
          scope.$on('$destroy', unsubscribe)
        })
      }

      function unsubscribe() {
        $document.off('click', onClickOutside).off('keydown', onKeydown)
      }

      function onClickOutside() {
        hideDropdown()
        unsubscribe()
      }

      function onKeydown(e) {
        if (e.keyCode === ESCAPE_KEY_CODE) {
          hideDropdown()
          unsubscribe()
        }
      }
    }
  }
})