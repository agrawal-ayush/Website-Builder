(function(){
	angular
		.module("WebAppMaker")
		.factory("UserService", UserService);

	var users = [
        { _id: "123",username: "alice", password: "alice"},
        { _id: "234",username: "bob", password: "bob"},
        { _id: "345",username: "charly", password: "charly"},
        { _id: "456",username: "jannunzi", password: "jannunzi"}
        ];

	function UserService(){
		var api = {
			createUser : createUser,
			findUserByUsernameAndPassword: findUserByUsernameAndPassword,
			findUserById: findUserById,
			updateUser: updateUser,
			deleteUser: deleteUser
		};

		return api;

		function createUser(newUser){

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
			for(var i in users){
                if(users[i]._id === id){
                    return users[i];  
                }
                }
       
            return null;      
        };


		function findUserByUsernameAndPassword(username,password){
			for(var i in users){
                if(users[i].username === username && users[i].password === password){
                    return users[i];
                    
                }
            }
              
            return null;
		};
	};
})();