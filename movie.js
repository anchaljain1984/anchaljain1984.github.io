
var updateCallback = function(data){
    var value = data.newValue;
    console.log("value : ");
    var line = value[value.length -1];
  var parsedText = JSON.stringify(line);
    console.log("converted Text : "+parsedText);
    var movieName = line.text;
      console.log("line : "+movieName);
    if (line.source.toLowerCase()==="visitor"){
        var url = "https://www.omdbapi.com?t="+movieName+"&apikey=5b89d14e";
        fetch(url)
                .then(function(response){
                    
                    return response.json();
                }
                ).then(function(res){
                    document.getElementById("Title").innerHTML = res.Title;
                    document.getElementById("Year").innerHTML = res.Year;
                    document.getElementById("Genre").innerHTML = res.Genre;
                    document.getElementById("Plot").innerHTML = res.Plot;

 

                }).catch(function(error){
                    console.log("Error Message : "+error);
                })
    }
};

 

var notifyWhenDone = function(error) {
    if (err){
        console.log("Error Occured in notify : "+err);
    }
    
    errorMessage.innerHTML = "Unable to find the movie";
};

var chatText = "chatTranscript.lines"; 

lpTag.agentSDK.init({});
var test1 = function(){
lpTag.agentSDK.bind(chatText, updateCallback, notifyWhenDone);
    console.log("binding");
}
//lpTag.agentSDK.bind(chatText, updateCallback, notifyWhenDone);
var test2 = function(){
 lpTag.agentSDK.unbind(chatText, updateCallback, notifyWhenDone);  
    console.log("unbinding");
}
