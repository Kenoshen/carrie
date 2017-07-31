var app = angular.module("cadApp");

app.config(function($routeProvider) {
	$routeProvider
	// web
	.when('/web', {
		templateUrl : 'html/web/colorado.html'
	})
	.when('/web/colorado', {
		templateUrl : 'html/web/colorado.html'
	})
	.when('/web/ruffnstuff', {
		templateUrl : 'html/web/ruffnstuff.html'
	})
	.when('/web/proboarder', {
		templateUrl : 'html/web/proboarder.html'
	})
	.when('/web/coffeehouse', {
		templateUrl : 'html/web/coffeehouse.html'
	})
	.when('/web/portfolio', {
		templateUrl : 'html/web/portfolio.html'
	})
	.when('/web/banners', {
		templateUrl : 'html/web/banners.html'
	})
	.when('/web/franksinatra', {
		templateUrl : 'html/web/franksinatra.html'
	})
	// logo
	.when('/logo', {
		templateUrl : 'html/logo/daisy.html'
	})
	.when('/logo/daisy', {
		templateUrl : 'html/logo/daisy.html'
	})
	.when('/logo/kite', {
		templateUrl : 'html/logo/kite.html'
	})
	.when('/logo/music', {
		templateUrl : 'html/logo/music.html'
	})
	// print
	.when('/print', {
		templateUrl : 'html/print/tictac.html'
	})
	.when('/print/tictac', {
		templateUrl : 'html/print/tictac.html'
	})
	.when('/print/jamba', {
		templateUrl : 'html/print/jamba.html'
	})
	.when('/print/vector', {
		templateUrl : 'html/print/vector.html'
	})
	.when('/print/state', {
		templateUrl : 'html/print/state.html'
	})
	.when('/print/book', {
		templateUrl : 'html/print/book.html'
	})
	.when('/print/sierra', {
		templateUrl : 'html/print/sierra.html'
	})
	.when('/print/highlight', {
		templateUrl : 'html/print/highlight.html'
	})
	// clothing
	.when('/clothing', {
		templateUrl : 'html/clothing/chase.html'
	})
	.when('/clothing/chase', {
		templateUrl : 'html/clothing/chase.html'
	})
	.when('/clothing/bash', {
		templateUrl : 'html/clothing/bash.html'
	})
	.when('/clothing/hu14', {
		templateUrl : 'html/clothing/hu14.html'
	})
	.when('/clothing/hu13', {
		templateUrl : 'html/clothing/hu13.html'
	})
	// other
	.when('/about', {
		templateUrl : 'html/about.html'
	})
	.when('/skills', {
		templateUrl : 'html/skills.html'
	})
	.when('/resume', {
		templateUrl : 'html/resume.html'
	})
	.when('/thankyou', {
		templateUrl : 'html/thankyou.html'
	})
	.when('/boss', {
		templateUrl : 'html/boss.html'
	})
	.otherwise({
		templateUrl : 'html/about.html'
	});
});

app.animation('.reveal-animation', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      element.fadeIn(500, done);
      return function() {
        element.stop();
      }
    },
    leave: function(element, done) {
      element.fadeOut(10, done)
      return function() {
        element.stop();
      }
    }
  }
})