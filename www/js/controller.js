        // create and register the controller at the same time using the module() method
        
        // 1. create a model using the angular objects module() method
        // note the []denoting an empty array, if you want your module to include other modules you can list them here [module1, module2] etc
       var myToDoApp = angular.module('myToDoListModule', []);

        
        // 2. create and register out controller with this module
        myToDoApp.controller('myToDoListController', function($scope) {
            
           
            //set up our data
            var toDoList = [];
            
            // add it to the scope
            $scope.toDoList = toDoList;
            
            // Add some logic to the controller to take user input and add as a new item to the array
            // note: we do not need to add the parameters to the function as they are already in the scope
            $scope.addtoList = function () {
                 
                $scope.toDoList.push(
                    {
                        name: $scope.newToDoItem.name,
                        description: $scope.newToDoItem.description, done:false
                    }
                   
                );
                
                /* clear the values in the input boxes */
                $scope.newToDoItem.name = '';
                $scope.newToDoItem.description = '';
            };
            
            
            $scope.deleteFromList = function ($index) {
                
                var itemToDelete = $scope.toDoList.$index;
                
                $scope.toDoList.splice($index, 1);
            };
            
            /* NOT WORKING Source for counting remaining items left to do : https://angularjs.org/ 
             $scope.remaining = function() {
              var count = 0;
              angular.forEach(toDoList.toDoItem, function(toDoItem) {
                count += toDoItem.done ? 0 : 1;
              });
              return count;
                 console.log(count);
            }; */
            
            /* NOT WORKING 
            
            $scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
			$scope.completedCount = todos.length - $scope.remainingCount; */

            
            /* Modified from source: https://codepen.io/Russbrown/pen/IgBuh */
            
            /*$scope.markAsComplete = function () {
                $scope.toDoList = _.filter($scope.toDoList, function(toDoList){
                    return !toDoList.done;
                });
            };*/
            
            /****NEED TO GET THIS WORKING **/
            
            /*$scope.noOfToDos = function () {
              if $scope.toDoList.length == "0" (
                $scope.$listMessage = "Nothing To Do Yet!"
              )
                else if $scope.toDoList.length == "1" (
                $scope.$listMessage = "Nothing To Do Yet!"
              )
                else if $scope.toDoList.length > "1" (
                $scope.$listMessage = "Lots of things to do!"
              );
            };*/
            
            
                
            
            
        });
        