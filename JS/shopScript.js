// JavaScript Document

//this controls the fade in and out of the pop up
$( document ).ready(function()
{
	"use strict";
	
	$('.myBtn').click(function(){
		$('.overlay').fadeIn(300);
	});
	
	$('.close').click(function(){
		$('.overlay').fadeOut(300);
	});
	
});
var data = {"total":0,"rows":[]};//initializes array for the data of the store
		var totalCost = 0;//initilizes total cost
		
		$(function(){//takes in data from the items selected
			
			//grid
			$('#cartcontent').datagrid({
				singleSelect:true
			});
			
			// items to drag
			$('.item').draggable({
				revert:true,
				proxy:'clone',
				onStartDrag:function(){
					$(this).draggable('proxy').css('z-index',10);
				}
				
			});
			
			//item to drop
			$('.cart').droppable({
				onDrop:function(e,source){
					var name = $(source).find('p.title').text();
					var price = $(source).find('p.title').attr("data");
					addProduct(name, parseFloat(price));
				}
			});
			
			$('.mobilebutton').click(
				function(name,price){
					alert("running");
					var name = "";
					var price = "";
					name = document.getElementById("u").innerHTML;
					price = document.getElementById("w").innerHTML;
					addProduct(name,price);
			});
			
		
			
		});
		var tempName = [];//initializing an array
		var tempPrice = [];
		function addProduct(name,price){//adds an item to the list of data
			function add(){//adds to toal cost
				for(var i=0; i<data.total; i++){
					var row = data.rows[i];
					if (row.name == name){
						row.quantity += 1;
						return;
					}
					
				}
				tempName.push(name);//adds to arrays
				tempPrice.push(price);
				data.total += 1;
				data.rows.push({
					name:name,
					quantity:1,
					price:price
					
				});
			}
			add();
			totalCost += price;
			//load data grid from jquery ui
			$('#cartcontent').datagrid('loadData', data);
			//update totals in the html
			$('div.cart .total').html('Total: £'+totalCost);
			
			
	
		
		$(function() {//saves and displays local data
			localStorage.setItem('one', tempName);
			var value1=localStorage["one"];
			localStorage.setItem('two', tempPrice);
			var value2=localStorage["two"];
			var A = document.getElementById("Y");
			var B = document.getElementById("T");
			A.innerHTML = (localStorage.getItem('one'));
			B.innerHTML = (localStorage.getItem('two'));
		});

		}

//code for the slide show in the gallery		
var slideIndex = 1;//starts at the first picture
showDivs(slideIndex);

function plusDivs(n) {//adds to the to control the place in the slideshow
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");//gets the images
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block"; //controls the photo shown 
}

