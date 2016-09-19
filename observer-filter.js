var data = [

	{name:"one setting", url: "http://google.ca"},
    {name:"two setting", url: "http://likedin.com"},
    {name:"three setting alpha", url: "http://facebook.com"},
    {name:"three setting", url: "http://facebook.com"}
    
];

function Observer() {
 
  this.observerArray = [];
  this.listenersArray = [];
  this.inputItem = document.querySelector(".subject");
}


Observer.prototype.register = function () {
       
      this.listenersArray = document.querySelectorAll(".listener");
      this.observerArray.length = this.listenersArray.length;
};

Observer.prototype.update = function (index, callback) {

  	if(callback){
    			
    			var elem = this.listenersArray[index];
          var input = this.observerArray[index];
    			callback(elem, input);
          } else {
            for (var i = 0; i < this.observerArray.length; i++) {
        					if(this.observerArray[i] != 'undefined'){
           this.listenersArray[i].innerHTML = this.observerArray[i] || "";
        		}
  				}
        }
};

Observer.prototype.add = function (index, callback) {
        this.observerArray[index] = this.inputItem.value;
        this.update(index, callback);
};

Observer.prototype.filter = function(item, index){	
    //initial state of the element
    index.innerHTML = "";
     var d = data.map(function(i){
      						return {name: i.name.match(item), url: i.url}
      } ).reduce(function(total, next){  
      							if(next.name){
                   		 total.push({name: next.name['input'], url: next.url });
                  	 }
										return total;                
      },[]);
     
  d.forEach(function(e){
  	{
    index.innerHTML +="<a href=' " + e['url'] + " '>" +  e['name'] + "</a>" + "<br />";
  }
  })
  
  //statr with speciffic input character count
  if(item.length < 2 ){
       index.innerHTML = "";
     }
};


var observe = new Observer();
observe.register();


observe.inputItem.addEventListener("keyup", function(){

    observe.add(0, function(index, input){
    				observe.filter(input, index);
    })
   
})