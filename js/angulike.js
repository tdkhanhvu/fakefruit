/**
 * AngularJS directives for social sharing buttons - Facebook Like, Google+, Twitter and Pinterest
 * @author Jason Watmore <jason@pointblankdevelopment.com.au> (http://jasonwatmore.com)
 * @version 1.2.0
 */
(function () {
    angular.module('angulike', [])

        .directive('fbLike', [
            '$window', '$rootScope', function ($window, $rootScope) {
                return {
                    restrict: 'A',
//                    scope: {
//                        fbLike: '@'
//                    },
                    link: function (scope, element, attrs) {
                        console.log('link');
                        if (!$window.FB) {
                            // Load Facebook SDK if not already loaded
                            $.getScript('//connect.facebook.net/en_US/sdk.js', function () {
                                $window.FB.init({
                                    appId: $rootScope.facebookAppId,
                                    xfbml: true,
                                    version: 'v2.0'
                                });
                                renderLikeButton();
                            });
                        } else {
                            renderLikeButton();
                        }

                        var watchAdded = false;
                        function renderLikeButton() {
                            console.log('render like button');
                            if (!!attrs.fbLike && !scope.fbLike && !watchAdded) {
                                // wait for data if it hasn't loaded yet
                                watchAdded = true;
                                var unbindWatch = scope.$watch('fbLike', function (newValue, oldValue) {
                                    console.log('new value:' + newValue);
                                    if (newValue) {
                                        renderLikeButton();

                                        // only need to run once
                                        //unbindWatch();
                                    }

                                });
                                return;
                            } else {
                                element.html('<div class="fb-like"' + (!!scope.fbLike ? ' data-href="' + scope.fbLike + '"' : '') + ' data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>');
                                $window.FB.XFBML.parse(element.parent()[0]);
                            }
                        }
                    }
                };
            }
        ]);
})();
