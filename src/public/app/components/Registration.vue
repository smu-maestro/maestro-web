<template>
  <div class="registration-form">
	  <form name="registration-form" action="">
		  <div>
			  <label for="user_email">
				  Email
			  </label>
			  <input type="text" name="user_email" placeholder="email@example.com" v-model="userEmail">
		  </div>
		  <div>
			  <label for="user_password">
				  Password
			  </label>
			  <input type="password" name="user_password" placeholder="password" v-model="userPassword">
		  </div>
		  <button type="submit" @click="register">
			  Create Account
		  </button>
	  </form>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data () {
	  return {
		  userEmail: "",
		  userPassword: ""
	  }
  },
  methods: {
	register () {
		console.log("registering user");
		var user = new Parse.User();
		user.set('username', this.userEmail);
		user.set('password', this.userPassword);
		user.signUp(null)
		.then((user) => {
			this.$router.push('lesson2/title');
		})
		.catch((err) => {
			console.error(err);
		});
	}
  }
}
</script>