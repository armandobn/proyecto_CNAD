<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ejemplo de nueva página para GOB.mx</title>

  <!-- CSS -->
  <link href="/favicon.ico" rel="shortcut icon">
  <link href="https://framework-gb.cdn.gob.mx/assets/styles/main.css" rel="stylesheet">

  <!-- Respond.js soporte de media queries para Internet Explorer 8 -->
  <!-- ie8.js EventTarget para cada nodo en Internet Explorer 8 -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ie8/0.2.2/ie8.js"></script>
    <![endif]-->

</head>

<body>

  <!-- Contenido -->
  <main class="page">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <br>
          <br>
          <h1 style="text-align:center;" class="lead">Bienvenido</h1>
          <br>
          <form id="frmlogin" method="POST" class="form-horizontal" role="form" onsubmit="return logear()">
            <div class="form-group">
              <label class="col-sm-3 control-label" for="usuario">Usuario</label>
              <div class="col-sm-9">
                <input class="form-control" id="usuario" placeholder="Ingresa tu usuario" type="text">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label" for="password">Contraseña:</label>
              <div class="col-sm-9">
                <input class="form-control" id="password" placeholder="Contraseña" type="password">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-3 col-sm-9">
                <div class="checkbox">
                  <label>
                    <input type="checkbox">
                    Recordarme
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-3 col-sm-9">
                <button class="btn btn-primary pull-right" type="submit">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>

  <!-- JS -->
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ie8/0.2.2/ie8.js"></script>
  <script src="https://framework-gb.cdn.gob.mx/gobmx.js"></script>
  <script src="js/validar_index.js"></script>

</body>

</html>