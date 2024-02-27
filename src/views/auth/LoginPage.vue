<template>
    <link rel="stylesheet" href="css/Login.css">
    <div id="body">
        <div class="navbar">
        <div class="avion">
            <img src="/image/avion.png" alt="">
        </div>
    </div>

    <div class="body">
                <h1 class="color_text_blue">Bienvenue à nouveau!</h1>
                <h3>Connectez-vous pour continuer</h3>
                <form @submit.prevent="login">
            <input type="email" v-model="email" placeholder="Entrez votre email" id="email"><i class="fa fa-users"></i><br>
            <input type="password" v-model="password" placeholder="Entrez votre mots de passe" id="password"><i class="fa fa-key"></i><br>
            <button type="submit" style="background: #08a2e9; color: white;border:none;border-radius: 5px; padding:5px">CONNEXION</button>
                </form>
            <h2>Nouveau membres ? <a href="/register">Inscris-toi ici</a></h2>
            <div class="icone">
            <h3>Suivez-nous sur :</h3>
                <a href="https://myaccount.google.com/?hl=fr&utm_source=OGB&utm_medium=act&pli=1&nlr=1"><img src="/image/chrome.png" alt=""></a>
                <a href="https://www.facebook.com/"><img src="/image/facebook.png" alt=""></a>
                <a href="https://twitter.com/"><img src="/image/twiter.png" alt=""></a>
            </div>
    </div>
    <footer>
    <div class="premier">
    <div class="deuxieme">
    </div>
    </div>
    </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
        const credentials = [
        { email: 'antsaniainafehizoro@gmail.com', password: 'fehzur' },
        { email: 'tsipongo@gmail.com', password: 'tsipongo' },
        { email: 'india@gmail.com', password: 'india' },
      ];

      const matchedCredential = credentials.find(
        cred => cred.email === this.email );
      if (matchedCredential) {
        if (matchedCredential.password === this.password) {
        const router = this.$router;
        router.push('/accueil');
        this.$router.push('/accueil');
        } else {
          alert('Mot de passe incorrect.');
        }
      }
      else {
        alert('AUCUNE IDENTIFICATION TROUVER');
      }
    },
  },
};
</script>