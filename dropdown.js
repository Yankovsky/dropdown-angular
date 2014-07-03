angular.module('ya.dropdown', []).directive('yaDropdown',function($document, $animate, $timeout) {
  var ESCAPE_KEY_CODE = 27
  return {
    restrict: 'C',
    scope: true,
    require: '^yaDropdown',
    controller: function($scope) {
      var that = this
      that.dropdownElement = null
      that.dropdownContentElement = null
      that.isOpen = false

      that.toggle = function() {
        that.isOpen = !that.isOpen
      }

      $scope.$watch(function() {
        return that.isOpen
      }, function(isOpen) {
        console.log(that.dropdownContentElement.offset())

        $animate[isOpen ? 'addClass' : 'removeClass'](that.dropdownElement, 'ya-dropdown-open')
        $animate[isOpen ? 'addClass' : 'removeClass'](that.dropdownContentElement, 'ya-content-open')

        if (isOpen) {
          subscribe()
        } else {
          unsubscribe()
        }
      })

      function subscribe() {
        $timeout(function() {
          $document.on('click', onClickOutside).on('keydown', onKeydown)
          that.dropdownContentElement.on('click', stopPropagation)
          $scope.$on('$destroy', unsubscribe)
        })
      }

      function unsubscribe() {
        $document.off('click', onClickOutside).off('keydown', onKeydown)
        that.dropdownContentElement.off('click', stopPropagation)
      }

      function stopPropagation(e) {
        return false
      }

      function onClickOutside(e) {
        that.isOpen = false
        $scope.$apply()
      }

      function onKeydown(e) {
        if (e.keyCode === ESCAPE_KEY_CODE) {
          that.isOpen = false
          $scope.$apply()
        }
      }
    },
    link: function(scope, element, attrs, yaDropdownCtrl) {
      yaDropdownCtrl.dropdownElement = element
    }
  }
}).directive('yaDropdownToggle',function() {
    return {
      restrict: 'C',
      require: '^yaDropdown',
      link: function(scope, element, attrs, yaDropdownCtrl) {
        function toggle(event) {
          event.preventDefault()
          yaDropdownCtrl.toggle()
          scope.$apply()
        }

        element.on('click', toggle)

        scope.$on('$destroy', function() {
          element.off('click', toggle)
        })
      }
    }
  }).directive('yaDropdownContent', function() {
    return {
      restrict: 'C',
      require: '^yaDropdown',
      link: function(scope, element, attrs, yaDropdownCtrl) {
        yaDropdownCtrl.dropdownContentElement = element
      }
    }
  })