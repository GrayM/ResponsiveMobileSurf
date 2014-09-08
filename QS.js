window.onload = app;

function qs(selector){
	return document.querySelector(selector);
}

function qsa(selector){
	return document.querySelectorAll(selector);
}

// var qs = document.querySelector; //--> NO.

function app(){

	var cell = qs('.cell');
 	console.log(cell);

 	var quotes = ["You're the man", "WAZZAAAAHHHH", "When life gives you lemons, you paint that shit gold."];
	var list = qs('.picText'); //--> single element, returns the first one it finds, null if nothing found
	console.log(list);
	var p = cell.querySelector('p');
	
	quotes.forEach(function(quote){
        var li = document.createElement('li');
        li.innerText = quote;
        p.appendChild(li);
    })



    var headers = qsa('h1, h2, h3, h4');
   	for (var i = 0; i < headers.length; i++) {
   		// headers[i].style.opacity = .5;
   		headers[i].style.color = 'crimson';
   	}

   	// ... same as
 //   	[].slice.call(headers).forEach(function(h){
	//    		h.style.color = 'green';
	// })


	var quotes = [{text:'THIS IS DYNAMIC', class:'backgroundImage1'}, {text:'JavaScript', class:'backgroundImage2'}, {text:'THAT IS CHANGING', class:'backgroundImage3'}, {text:'MY PICS', class:'backgroundImage4'}];

 	// method 1

 
	var li_html = '';


	quotes.forEach(function(quote){
		quote.class;///
		li_html += '<div class="'+quote.class+'"><a>'+quote.text+'</a><a href src="#" class="blue"></a></div>';
	});

	list.innerHTML = li_html;
}