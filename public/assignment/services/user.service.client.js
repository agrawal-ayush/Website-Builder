(function(){
	angular
		.module("WebAppMaker")
		.factory("UserService", UserService);

	function UserService($http){
		var api = {
			createUser : createUser,
			findUserByUsernameAndPassword: findUserByUsernameAndPassword,
			findUserById: findUserById,
			updateUser: updateUser,
			deleteUser: deleteUser
		};

		return api;

		function createUser(username, password){
			var user = {
				username: username,
				password: password
			};
			return $http.post("/api/user",user);
		};

		function deleteUser(userId){

		};

		function updateUser(id, newUser){
			var url = "/api/user/"+id;
			return $http.put(url,newUser);

		};

		function findUserById(id){
			var url = "/api/user/"+id;
			return $http.get(url);
        };


		function findUserByUsernameAndPassword(username,password){
			var url = "/api/user?username="+username+"&password="+password;
			return $http.get(url);
		};
	};
})();