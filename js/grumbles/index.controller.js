"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction(){
    console.log("I'm in the index controller!");
      this.grumbles = [
        {
          title: "Cat",
          author_name: "Abby Abberson",
          content: "Cats are great. Look at this cat shaking its butt.",
          photo_url: "https://i.ytimg.com/vi/GEB0pUnfpeU/maxresdefault.jpg"
        },
        {
          title: "Shakeology",
          author_name: "Ly Nguyen",
          content: "Shakeology is a great way to get protein and nutrients and stay slim.",
          photo_url: "http://thebodyelectric.us/wp-content/uploads/2015/05/shakeo.png"
        },
        {
          title: "Spider Push-ups",
          author_name: "Spiderman",
          content: "I can do 100 spider push-ups.",
          photo_url: "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/1005-knockout-bod-pushup.jpg"
        },
        {
          title: "T25",
          author_name: "Shaun T",
          content: "Everyone has 25 minutes a day. Do my T25 workout.",
          photo_url: "http://videoworkoutreviewcom.c.presscdn.com/wp-content/uploads/2013/06/Focus-T25-Banner.jpg"
        },
        {
          title: "P90X3",
          author_name: "Tony Horton",
          content: "Don't listen to Shaun T. Look at this buff guy in the picture and do my workout, P90X3.",
          photo_url: "https://img1.beachbodyimages.com/beachbody/image/upload/bbweb/p90x3/p90x3-v2-video-thumb.jpg"
        }
      ];
    this.formIsVisible = false
    this.toggleForm = function(){
      if(this.formIsVisible){
        this.formIsVisible = false;
      } else {
        this.formIsVisible = true;
      }
    }; // ends toggleForm function;
  }
})();
