(function(){

var app= angular.module("7minWorkout",["ngRoute"]);

app.config(function ($routeProvider,$sceDelegateProvider) 
{

   $routeProvider.when("/start", {
                       templateUrl: 'partials/start.html'
                         });
   $routeProvider.when("/workout", {
                       templateUrl: 'partials/workout.html',
                       controller: "WorkoutController"
                       });
   $routeProvider.when("/finish", {
                       templateUrl: 'partials/finish.html'
                        });
   $routeProvider.otherwise({ redirectTo: "/start"});

  
  $sceDelegateProvider.resourceUrlWhitelist(['self','https://*.youtube.com/**']);
   //replace("watch?v=", "embed/") in youtube urls

});

 	            
app.controller("WorkoutController",function($scope,$interval,$location)
{
var restExercise;

function Exercise(args) {
this.name = args.name;
this.title = args.title;
this.description = args.description;
this.image = args.image;
this.related = {};
this.related.videos = args.videos;
this.nameSound = args.nameSound;
this.procedure=args.procedure;
}

function WorkoutPlan(args) {
this.exercises = [];
this.name = args.name;
this.title = args.title;
this.restBetweenExercise = args.restBetweenExercise;

this.totalWorkoutDuration = function ()
 {
 if(this.exercises.length == 0) 
   return 0;
 var total = 0;
 angular.forEach(this.exercises, function (exercise) {
 total = total + exercise.duration;
 });

 return this.restBetweenExercise * (this.exercises.length - 1) + total;
};


}

var startWorkout = function () 
{
  $scope.workoutPlan = createWorkout();

  $scope.workoutTimeRemaining = $scope.workoutPlan.totalWorkoutDuration();

  restExercise = {
  details: new Exercise({name: "rest",title: " Relax!",
                         description: " Relax a bit!",image: "img/rest.png"}),
  duration: $scope.workoutPlan.restBetweenExercise
          };

  $interval(function () {
       $scope.workoutTimeRemaining = $scope.workoutTimeRemaining- 1;
       }, 1000, $scope.workoutTimeRemaining);
  startExercise($scope.workoutPlan.exercises.shift());

};

//ng-src="{{currentExercise.details.image}}" />

var createWorkout = function () 
{
 var workout = new WorkoutPlan({
 name: "7minWorkout",
 title: "7 Minute Workout",
 restBetweenExercise: 10
  });

workout.exercises.push({

 details: new Exercise({
 name: "jumpingJacks",
 title: "Jumping Jacks",
 description: "Jumping on the Jacks.",
 image: "img/JumpingJacks.png",
 videos: ["https://www.youtube.com/embed/UpH7rm0cYbM"],
 variations: [],
 procedure: "jump continuously on jack"
  }),
duration: 30
}); //end of workout.exercises.push

workout.exercises.push({
              details: new Exercise({
                  name: "wallSit",
                  title: "Wall Sit",
                  description: "Wall and Sit.",
                  image: "img/wallsit.png",
                  videos: [],
                  variations: [],
                  procedure: "sit on the wall straight"
              }),
              duration: 30
});


workout.exercises.push({
    details: new Exercise({
                  name: "pushUp",
                  title: "Push Up",
                  description: "Discription about pushup.",
                  image: "img/Pushup.png",
                  videos: ["https://www.youtube.com/embed/Eh00_rniF8E",
                          "https://www.youtube.com/embed/ZWdBqFLNljc",
                          "https://www.youtube.com/embed/UwRLWMcOdwI",
                           "https://www.youtube.com/embed/ynPwl6qyUNM",
                           "https://www.youtube.com/embed/OicNTT2xzMI"],
                  variations: ["Planche push-ups", "Knuckle push-ups", "Maltese push-ups", "One arm versions"],
                  procedure: "make 50 pushups"
              }),
              duration: 30
});


workout.exercises.push({
              details: new Exercise({
                  name: "crunches",
                  title: "Abdominal Crunches",
                  description: "Abdominal hard Crunches.",
                  image: "img/crunches.png",
                  videos: [],
                  variations: [],
                  procedure: "hard muscle crunching"
              }),
              duration: 30
 });

workout.exercises.push({
              details: new Exercise({
                  name: "stepUpOntoChair",
                  title: "Step Up Onto Chair",
                  description: "Step Up Onto Chaircfor 15 mins.",
                  image: "img/stepUpOntoChair.jpeg",
                  videos: [],
                  variations: [],
                  procedure: "stand still on the chairs"
              }),
              duration: 30
});

workout.exercises.push({
              details: new Exercise({
                  name: "squat",
                  title: "Squat",
                  description: "do the Squat.",
                  image: "img/squat.png",
                  videos: [],
                  variations: [],
                  procedure: "Continuously squat"
              }),
              duration: 30
});


workout.exercises.push({
              details: new Exercise({
                  name: "tricepdips",
                  title: "Tricep Dips On Chair",
                  description: "Tricep Dips with Chair ll make u strong.",
                  image: "img/tricepdips.jpg",
                  videos: [],
                  variations: [],
                  procedure: "Exercise on the triceps"
              }),
              duration: 30
});

workout.exercises.push({
              details: new Exercise({
                  name: "plank",
                  title: "Plank",
                  description: "Plank ll make u super strong.",
                  image: "img/plank.png",
                  videos: [],
                  variations: [],
                  procedure: "lay down like plank for 45mins"
              }),
              duration: 30
});

workout.exercises.push({
              details: new Exercise({
                  name: "highKnees",
                  title: "High Knees",
                  description: "High on the Knees.",
                  image: "img/highknees.png",
                  videos: [],
                  variations: [],
                  procedure: "move ur knee continuously"
              }),
              duration: 30
});

workout.exercises.push({
              details: new Exercise({
                  name: "lunges",
                  title: "Lunges",
                  description: "Lunges one two threee.",
                  image: "img/lunges.png",
                  videos: [],
                  variations: [],
                  procedure: "make Lunges 1-2-3"
              }),
              duration: 30
});

workout.exercises.push({
              details: new Exercise({
                  name: "pushupNRotate",
                  title: "Pushup And Rotate",
                  description: "Pushup And Rotate like a wheel.",
                  image: "img/pushupNRotate.jpg",
                  videos: [],
                  variations: [],
                  procedure: "rotate the body like a wheel"
              }),
              duration: 30
});

workout.exercises.push({
              details: new Exercise({
                  name: "sidePlank",
                  title: "Side Plank",
                  description: "Side on the Plank.",
                  image: "img/sideplank.png",
                  videos: [ ],
                  variations: [ ],
                  procedure: "Side Plank1-2-3-4-5-6"
              }),
              duration: 30
});


return workout;
}

var startExercise = function (exercisePlan) 
{

$scope.currentExercise = exercisePlan;
$scope.currentExerciseDuration = 0;
$interval(function () 
{
++$scope.currentExerciseDuration;
},1000 , $scope.currentExercise.duration)
.then(function () 
 {
  var next = getNextExercise(exercisePlan);
   if(next) 
    {
       startExercise(next);
    } 
    else
     {
       $location.path("/finish");
     }
 });





};



var init = function () {
startWorkout();
};
init();



var getNextExercise = function (currentExercisePlan) {
var nextExercise = null;

if(currentExercisePlan === restExercise) 
{
nextExercise = $scope.workoutPlan.exercises.shift();
} 
else
{
   if($scope.workoutPlan.exercises.length != 0)
   {
    nextExercise = restExercise;
   }
}

return nextExercise;
};




  

});





})();