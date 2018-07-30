document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1

})


document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2

})


document.querySelector("#calculate-items button").addEventListener('click',function(e){
  // TASK #3
    var tops = document.querySelectorAll('.cars-list input');
	var count = 0;
	tops.forEach(function(item){
		if (item.checked) {
			count += parseInt(item.value);
		};
	})
	document.querySelector('.sum-total').innerText = "$ " + count;
})


document.querySelector("#select-to-show-more button").addEventListener('click',function(){
  // TASK #4

})
