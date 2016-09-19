

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
      //create array that matches the length of observers
      this.observerArray.length = this.listenersArray.length;
};

Observer.prototype.update = function (indexMatch, callback) {
//subject tells the listener of state change and updates
  for (var i = 0; i < this.observerArray.length; i++) {
          //index with data updates the matching listener element
        if(this.observerArray[i] != 'undefined'){
                // make sure we don't populate empty listeners
            this.listenersArray[i].innerHTML = this.observerArray[i] || "";
        }
  }
  	if(callback){
    			
    			var elem = this.listenersArray[indexMatch];
    			callback(elem);
          }
    	
};

Observer.prototype.add = function (index, callback) {
        this.observerArray[index] = this.inputItem.value;
        this.update(index, callback);
};

var observe = new Observer();
observe.register();

observe.inputItem.addEventListener("keyup", function(){
  //adds listeners based on index
    observe.add(0)
    observe.add(1, function(index){
    	index.style.backgroundColor = "blue";
    })
    observe.add(2, function(index){
    			index.style.backgroundColor = "red";
    })
})
