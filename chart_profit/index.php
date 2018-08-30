<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>charts</title>
    <style media="screen">
      .content {
        width: 1200px;
        height: 1500px;
        margin: 0 auto;
      }

      .button {
        position: absolute;
        left: 40px;
        top: 40px;
      }
    </style>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>

    <div class="button">
      <button id="back" type="button" name="button" class="btn btn-primary">Back</button>
    </div>
    <div class="content">
        <canvas id="barwChart"></canvas>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
    <script src="main.js"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        $('#back').click(function(){
          window.location.href = ''
        });
      });
    </script>
    <!-- <script src="chart.js"></script> -->
  </body>
</html>
