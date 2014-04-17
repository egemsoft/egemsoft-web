angular.module('scrollSection', []).
  directive('scrollSection', function($compile) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var loadedSections = scope[attrs.loadedSections];
        var sections = scope[attrs.sections]; //$scope.sections
        // Check if section is proportional for scrolling. If it is not, add sections recursively.
        var scrollPos = (document.body.scrollTop || document.documentElement.scrollTop) + document.documentElement.clientHeight;
        var elemBottom = element[0].offsetTop + element[0].offsetHeight;
        if(scrollPos >= elemBottom)
         loadedSections.push(sections[loadedSections.length]); //add next section
        else { // If section height is enough to scroll bind scroll event.
          $window = angular.element(window);
          $window.bind('scroll', function(event) {
            var scrollPos = (document.body.scrollTop || document.documentElement.scrollTop) + document.documentElement.clientHeight;
            var elemBottom = element[0].offsetTop + element[0].offsetHeight;
            if(scrollPos >= elemBottom) { //scrolled to bottom of scrollSection element
              $window.unbind(event); //this listener is no longer needed.
              if(loadedSections.length < sections.length) { //if there are still elements to load
                //use $apply because we're in the window event context
                scope.$apply(loadedSections.push(sections[loadedSections.length])); //add next section
              }
            }
          });
        }
      }
    };
});