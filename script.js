

  var app=angular.module('myApp', ['ngRoute', 'slickCarousel'])
  
  app.controller('MainCtrl', ['$scope', function($scope){

		$scope.slickConfigLoaded = false;
		$scope.slickCurrentIndex1 = 0;
		$scope.slickCurrentIndex2 = 0;
		$scope.slickDots = true;
		$scope.slickInfinite = true;
		$scope.slickConfig2 = {
				autoplay: true,
				dots: $scope.slickDots,
				enabled: true,
				focusOnSelect: true,
				infinite: $scope.slickInfinite,
				initialSlide: 0,
				slidesToShow: 3,
				slidesToScroll: 2,
				rows:1,
				method: {},
				event: {
			        afterChange: function (event, slick, currentSlide, nextSlide) {
			            $scope.slickCurrentIndex2 = currentSlide;
			        },
			        init: function (event, slick) {
			              slick.slickGoTo($scope.slickCurrentIndex2); // slide to correct index when init
			        }
				}
		};
		 $scope.breakpoints = [
		{
          		    breakpoint: 1080,
          		    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      rows: 3
              }
          }, {
              breakpoint: 680,
              settings: {
								rows: 2,
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  rows: 2
              }             
					},
					 {
              breakpoint: 580,
              settings: {
								rows: 1,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  rows: 1
              }   
          },
					{
						 breakpoint: 480,
						 settings: {
							 rows: 1,
								 slidesToShow: 1,
								 slidesToScroll: 1,
								 rows: 1
						 }   
				 }
        ];
		
		$scope.items = [{
		  label: '1'
		},{
		  label: '2'
		},{
		  label: '3'
		},{
		  label: '4'
		},{
		  label: '5'
		},{
		  label: '6'
		},{
		  label: '7'
		},{
		  label: '8'
		},{
		  label: '9'
		},{
		  label: '10'
		},{
		  label: '11'
		},{
		  label: '12'
		},{
		  label: '13'
		},{
		  label: '14'
		},{
		  label: '15'
		},{
		  label: '16'
		},{
		  label: '17'
		},{
		  label: '18'
		},{
		  label: '19'
		}];
    
		$scope.slickConfigLoaded = true;
  }]);

