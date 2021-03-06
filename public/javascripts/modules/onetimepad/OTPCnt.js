/**
 * Created by Nathan.Lynch on 6/19/2017.
 */
var otp = angular.module("OTP", ['sharedServices']);

otp.controller("OTPEncryptCnt",['$scope', 'ajaxService', function($scope, ajaxService) {
   $scope.plainText;
   $scope.key;
   $scope.cipherText;

   $scope.submitEncryptionRequest = function() {
       var resultAndKey = ajaxService.postRequest("/users/test", {data:$scope.plainText});
       resultAndKey.then(function(response) {
           $scope.plainText = "";
           $scope.key = response.data.key;
           $scope.cipherText = response.data.cipherText.join(",");
       });
   }
}]);

otp.controller("OTPDecryptCnt",['$scope', 'ajaxService', function($scope, ajaxService) {
   $scope.plainText = "test";
   $scope.key;
   $scope.cipherText;

   $scope.submitDecryptionRequest = function() {
       var resultAndKey = ajaxService.postRequest("/users/dec", {data:$scope.cipherText, msg:$scope.key});
       resultAndKey.then(function(response) {
           $scope.plainText = response.data.plainText;
       });
   }
}]);