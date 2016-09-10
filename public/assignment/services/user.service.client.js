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
			for(var i in users){
                if(users[i]._id === id){
                    users[i].firstName = newUser.firstName;
                    users[i].lastName = newUser.lastName; 
                    return true;
                }
            }

            return false;

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