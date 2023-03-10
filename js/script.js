< !DOCTYPE html >
< !--ICS2O - Unit1 - 05 - HTML - Favicon-- >
  <html lang="en-ca">
    <head>
      <meta charset="utf-8" />
      <meta name="description" content="area" />
      <meta name="keywords" content="area finder" />
      <meta name="author" content="Dominik Armatys" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./css/style.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.yellow-lime.min.css" />
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href=".jpg" />
      <link rel="icon" type="image/png" sizes="16x16" href=".jpg" />
      <link rel="manifest" href="site.webmanifest" />
      <title>area caculator</title>
    </head>
    <body>
      <link rel="stylesheet" href="./css/style.css" />
    </head>
    <body>
      <script defer src="https://code.getmdl.io/7.0/material.min.js"></script>
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">Area caculator</span>
          </div>
        </header>
        <main class="mdl-layout__content">
          <div class="page-content">
            Enter the length of a square.
          </div>
          <!-- Simple Textfield for integers-->
          <form action="#">
            <div class="mdl-textfield mdl-js-textfield">
              <!-- input pattern attribute -->
              <input class="mdl-textfield__input" type="text" pattern="[0-9]*" id="demo-input" />
              <!-- mdl-textfield__label -->
              <label class="mdl-textfield__label" for="demo-input">Length of square (mm)</label>
              <!-- class "mdl-textfield__error" -->
              <span class="mdl-textfield__error">Input is not a number</span>
            </div>
          </form>
          <!-- Raised button with ripple -->
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Calculate area
          </button>
          <br>
            <br>
            </main>
          </div>
        </body>
      </html>
      <!-- Colored raised button -->
      <script>
        function myButtonClicked() {
          alert("")
        }
      </script>
      <p>
      </p>
    </main>
  </div>
</body >
</html >