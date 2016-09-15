


function Observer() {
    //stores updated data -- don't want to depend on DOM for state
  this.observerArray = [];
  // target the observers
  this.listenersArray = [];
  //where is the data comming from
  this.inputItem = document.querySelector(".subject");
}

Observer.prototype.register = function () {
        //lets create of listeners that will update when subject event changes
      this.listenersArray = document.querySelectorAll(".listener");
      //reate array that matches the length of observers
      this.observerArray.length = this.listenersArray.length;
};

Observer.prototype.update = function () {
//subject tells the listener of state change and updates
  for (var i = 0; i < this.observerArray.length; i++) {
          //index with data updates the matching listener element
        if(this.observerArray[i] != 'undefined'){
                // make sure we don't populate empty listeners
            this.listenersArray[i].innerHTML = this.observerArray[i] || "";
        }
  }
};

Observer.prototype.add = function (index) {
        this.observerArray[index] = this.inputItem.value;
        this.update();
};

var observe = new Observer();
observe.register();

observe.inputItem.addEventListener("keyup", function(){
  //adds listeners based on index
    observe.add(0)
    observe.add(1)
})


