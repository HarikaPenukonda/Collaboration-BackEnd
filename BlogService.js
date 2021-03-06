/**
 * 
 */
'use strict';

app.factory('BlogService',['$http','$q','$rootScope',function($http,$q,$rootScope){
	
	console.log("BlogService..")
	
	var BASE_URL = '                 '
		return{
		
		fetchAllUsers:function(){
			return $http.get(BASE_URL+'/blogs')
			.then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while fetching Blogs');
						return $q.reject(errResponse);
					}				
	);
},
createBlog:function(blog){
	return $http.post(BASE_URL+'/blog/',blog)
	.then(
			function(response){
				return response.data;
			},
			function(errResponse){
				console.error('Error while creating Blog');
				return $q.reject(errResponse);
			}				
);
	
},	
	}
	}
	]
	);