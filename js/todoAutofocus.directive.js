angular
  .module('app')
  .directive('todoAutofocus', todoAutofocus);

  function todoAutofocus() {
    return {
      restrict: 'A',
      scope: false,
      link: function($scope, $element, $attrs) {
        $scope.$watch($attrs.todoAutofocus, (newValue, oldValue) => {
          if (!newValue) return;
          setTimeout(() => $element[0].focus(), 0);
        });
      }
    }
  }