/**
 * This file contains all necessary Angular model definitions for 'frontend.examples.book' module.
 *
 * Note that this file should only contain models and nothing else. Also note that these "models" are just basically
 * services that wraps all things together.
 */
(function() {
    'use strict';

    /**
     * Model for Book API, this is used to wrap all Book objects specified actions and data change actions.
     */
    angular.module('frontend.examples.book')
        .factory('BookModel',
            [
                'ModelFactory',
                function(ModelFactory) {
                    // Endpoint definition for model
                    var endpoint = 'book';

                    // Get model
                    var model = angular.copy(ModelFactory);

                    // Initialize model
                    model.setEndpoint(endpoint);

                    // Custom handler for 'updated' socket event
                    model.handlerUpdated = function handlerUpdated(message) {
                        if (parseInt(message.id, 10) === parseInt(model.object.id, 10)) {
                            model.fetch(model.cache.fetch.identifier, model.cache.fetch.parameters);
                        }
                    };

                    return model;
                }
            ]
        );
}());
