angular.module('scrollLoad', []).
  directive('scrollLoad', function($compile) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var to = scope[attrs.scrollLoadTo]; //$scope.loadedSections
        var from = scope[attrs.scrollLoadFrom]; //$scope.sections

        $window = angular.element(window);
        $window.bind('scroll', function(event) {
          var scrollPos = document.body.scrollTop + document.documentElement.clientHeight;
          var elemBottom = element[0].offsetTop + element.height();
          if(scrollPos >= elemBottom) { //scrolled to bottom of scrollLoad element
            $window.unbind(event); //this listener is no longer needed.
            if(to.length < from.length) { //if there are still elements to load
              //use $apply because we're in the window event context
              scope.$apply(to.push(from[to.length])); //add next section
            }
          }
        });
      }
    };
});