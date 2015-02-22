var app = angular.module("cadApp", ["ngRoute", "ngAnimate"]);

app.run(function($rootScope, $location, $timeout){
	$rootScope.tabState = {
		about: false,
		web: false,
		logo: false,
		print: false,
		clothing: false,
		skills: false,
		resume: false
	};
	$rootScope.page = null;
	$rootScope.pages = [
		"about",
		"web/colorado",
		"web/ruffnstuff",
		"web/proboarder",
		"web/coffeehouse",
		"web/portfolio",
		"web/banners",
		"web/franksinatra",
		"logo/daisy",
		"logo/kite",
		"logo/music",
		"print/tictac",
		"print/jamba",
		"print/vector",
		"print/state",
		"print/book",
		"print/sierra",
		"print/highlight",
		"clothing/chase",
		"clothing/bash",
		"clothing/hu14",
		"clothing/hu13",
		"skills",
		"resume",
		"thankyou",
		"boss"
	];
	// ///////////////////////////////////////////
	//  Helper methods
	// ///////////////////////////////////////////
	$rootScope.focusOn = function(selector){
		$timeout(function(){$(selector).focus();}, 1);
	};
	$rootScope.setActiveTab = function(tab){
		for (var key in $rootScope.tabState){
			$rootScope.tabState[key] = (key === tab);
		}
	};
	$rootScope.getActiveTab = function(){
		for (var key in $rootScope.tabState){
			if ($rootScope.tabState[key]){
				return key;
			}
		}
		return null;
	};
	$rootScope.setCurrentPage = function(templateUrl){
		if (templateUrl){
			var r = templateUrl.split("html/")[1].split(".html")[0];
			$rootScope.page = r;
		}
	};
	$rootScope.nextPage = function(){
		for (var i = 0; i < $rootScope.pages.length; i++){
			if ($rootScope.pages[i] === $rootScope.page){
				return $rootScope.pages[i + 1];
			}
		}
		return null;
	};
	$rootScope.previousPage = function(){
		for (var i = 0; i < $rootScope.pages.length; i++){
			if ($rootScope.pages[i] === $rootScope.page){
				return $rootScope.pages[i - 1];
			}
		}
		return null;
	};
	// ///////////////////////////////////////////
	//  Routing
	// ///////////////////////////////////////////
	$rootScope.go = function(path){
		if (path){
			$location.path(path);
		}
	};

	$rootScope.path = function(){
		var temp = $location.path();
		return temp;
	};
	$rootScope.$on('$routeChangeStart', function(scope, next, current){
		var p = next.templateUrl;
		if (p){
			if (p.indexOf("about") >= 0){
				$rootScope.setActiveTab("about");
			} else if (p.indexOf("web") >= 0){
				$rootScope.setActiveTab("web");
			} else if (p.indexOf("logo") >= 0){
				$rootScope.setActiveTab("logo");
			} else if (p.indexOf("print") >= 0){
				$rootScope.setActiveTab("print");
			} else if (p.indexOf("clothing") >= 0){
				$rootScope.setActiveTab("clothing");
			} else if (p.indexOf("skills") >= 0){
				$rootScope.setActiveTab("skills");
			} else if (p.indexOf("resume") >= 0){
				$rootScope.setActiveTab("resume");
			} else {
				$rootScope.setActiveTab(null);
			}
			$rootScope.setCurrentPage(p);
		}
		//console.log("\n\nActive Tab: %s\nActive Page: %s\nNext Page: %s\nPrev Page: %s", $rootScope.getActiveTab(), $rootScope.page, $rootScope.nextPage(), $rootScope.previousPage());
	});
	// ///////////////////////////////////////////
	//  Do once
	// ///////////////////////////////////////////
	$rootScope.splash = true;
	console.log("Splash: ", $rootScope.splash);
	$timeout(function(){
		$rootScope.splash = false;
		console.log("Splash: ", $rootScope.splash);
		$timeout(function(){
			$("#splash").remove();
		}, 1000);
	}, 2000);
});