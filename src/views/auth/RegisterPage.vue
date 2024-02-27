<template>
    <link rel="stylesheet" href="css/Register.css">
    <div id="body">

    <div class="body"><h1>VOULEZ VOUS NOUS SUIVRE ?</h1>
    <p>Alors, inscris-toi gratuitement</p>
        <p>Remplis tous les champs avec votre réelle information</p>
        <br>
        <br>
        <br>
            <input type="name" name="name" placeholder="Comment vous-appellez vous ?" required><br>
            <input type="email" name="email" placeholder="Merci d' entrer votre nouvelle e-mail" required><br>
            <input type="password" name="mdp" placeholder="Entrez votre mots de passe" required><br>
            <input type="password" name="cmdp" placeholder="Veuillez ré-entrez votre mots de passe ci-dessus" required>
            <br>
            <div class="check">
            <input type="checkbox" required id="check">
            <p>Je suis d'accords avec la condition et les confidentialité de ce site.</p>
            </div><br>
            <a href="/"><input style="background: blue; color: white;border-radius: 5px;" value="INSCRIPTION" id="envoyer" ></a><br>
            <p>Avez-vous déjà un compte NEW WAVE ?</p>
            <p>Veuillez vous connecter à votre compte en cliquant <a href="/">ici</a></p>
    </div>
    <footer>
    <div class="premier">
    <div class="deuxieme">
    </div>
    </div>
    </footer>
    </div>
</template>