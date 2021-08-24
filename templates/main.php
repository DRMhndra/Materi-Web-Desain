<main class="main">
  <header class="header__main">
    <nav class="main__navbar">
      <ul class="main-navbar__wrapper">
        <li class="main-navbar__item">
          <button class="main-navbar__button">
            <img src="./assets/icons/icon-menu.svg" alt="menu bar" class="main-navbar__menu">
          </button>
        </li>
        <li class="main-navbar__item"><h3>Web Desain</h3></li>
        <li class="main-navbar__item">#</li>
      </ul>
    </nav>
  </header>
  <section class="main__content">
    <?php require_once './controllers/pages.php'; ?>
  </section>
  <?php include_once './templates/footer.php' ?>
</main>