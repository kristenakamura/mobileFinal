var app = angular.module('kiva.controllers', [])

app.controller('homeCtrl', function ($scope, dataService) {
	$scope.navTitle = '<img class="title-image kiva--title-logo" src="img/kiva_logo.png" />';
	$scope.header = "Newest Loans";
    $scope.kivaApi;


	getLoans();

	function getLoans() {
        dataService.getLoans()
            .success(function (data) {
                $scope.kivaApi = data;
                $scope.loans = $scope.kivaApi.loans;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

});

app.controller('blogCtrl', function ($scope, dataService) {
	$scope.navTitle='<img class="title-image kiva--title-logo" src="img/kiva_logo.png" />';
	$scope.header="Blog";
    $scope.posts;

	getPosts();

	console.log($scope.wordpressApi);

	function getPosts() {
        dataService.getPosts()
            .success(function (data) {
                $scope.posts = data.posts;
               	console.log($scope.posts);
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

});

app.controller('twitterCtrl', function ($scope, $ionicPlatform, $cordovaOauth, TwitterREST) {
    $scope.navTitle = '<img class="title-image kiva--title-logo" src="img/kiva_logo.png" />';
    $scope.header = "Twitter";

    TwitterREST.sync().then(function(tweets){
        console.log(tweets);
        $scope.tweets = tweets.statuses;
    });

        $scope.innapBrowser = function (value) {
            window.open(value, '_blank');
        };

});