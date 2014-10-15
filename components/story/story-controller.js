/* global define */

(function () {

    'use strict';

    var dependencies = ['components/story/story'];

    define(dependencies, function (story) {

        story.controller('StoryCtrl', StoryCtrl);

        function StoryCtrl () {
            var vm = this;

            vm.storyTitle = 'Grimm Brothers';
            vm.storyBody = 'Grimm TV Series tells a totally different story about ' +
                'the Grimm Brothers. According to it, they have actually documented ' +
                'rather than written fairy tales about the things they knew.';
        }

    });

})();
