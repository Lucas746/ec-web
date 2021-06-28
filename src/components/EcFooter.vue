<template>
  <footer>
    <div class="container is-fluid">
      <div class="has-text-centered ec--footer">
        <img src="@/assets/icon-ec.png" alt="" class="ec--footer-logo">
        <p>
          © Copyright 2021 | <strong>Estudio Clio</strong> | Todos los derechos reservados | Diseño web: <a href="https://www.linkedin.com/in/lmhick/" target="_blank">Lucas Martín Hick</a>.
        </p>
        <p class="ec--follow">
          <a href="https://www.facebook.com/estudioclio/" target="_blank" style="text-decoration: none !important; color: inherit; margin: 10px 5px 0 5px;">
            <b-icon
              icon="facebook"
              class="ec--icon ec--icon-fb"
            />
          </a>
          <a href="https://www.instagram.com/estudioclio/" target="_blank" style="text-decoration: none !important; color: inherit; margin: 10px 5px 0 5px;">
            <b-icon
              icon="instagram"
              class="ec--icon ec--icon-ig"
            />
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
 .ec--footer {
     margin: 3vh 0 4vh 0;
 }
 .ec--footer-logo {
     width: 50px;
 }
 .ec--icon-fb:hover {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  color: #fff;
  background: #3b5998;
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  cursor: pointer;
}
.ec--icon-ig:hover {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  color: #fff;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  cursor: pointer;
  }
  .ec--follow {
    margin: 10px;
  }
</style>
