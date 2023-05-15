<template>
    <div class='login'>
        <h1>Login</h1>
        <form @submit.prevent='Login'>
            <label>
                <input type='text' placeholder='Email' v-model='email' />
            </label>
            <label>
                <input type='password' placeholder='Password' v-model='password' />
            </label>
            <input type='submit' value='Login' />
            <p>Need an account?
                <router-link to='/register'>Register Here</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase';


export default {
    name: 'GoogleLogin',

  methods: {
    login() {
      firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            alert('Successfully logged in');
            this.$router.push('/home');
          })
          .catch(error => {
            alert(error.message);
          });
    },
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(() => {
        alert('Successfully logged in');
        this.$router.push('/home');
      })
          .catch(error => {
            alert(error.message);
          });
    }
  },
};
</script>

<style scoped>

</style>
