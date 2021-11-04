<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';
$queryCountry = $_GET['country'];
if (isset($_GET['context'])){
  if($_GET['context'] == 'cities'){
    $queryCities = True;
  }
} else {
  $queryCities = False;
}


$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

if ($queryCities){
  $stmt = $conn->query("SELECT cities.name, cities.district, cities.population FROM cities INNER JOIN countries on cities.country_code = countries.code WHERE countries.name LIKE '%$queryCountry%'");
}else {
  $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$queryCountry%'");
}

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>
<table>
  <?php if ($queryCities): ?>
    <thead>
      <tr>
        <th>Name</th>
        <th>District</th>
        <th>Population</th>
      </tr>
      <tbody>
      <?php foreach ($results as $row): ?>
        <tr>
          <td><?= $row['name']; ?></td>
          <td><?= $row['district']; ?></td>
          <td><?= $row['population']; ?></td>
        </tr>
      <?php endforeach; ?>
      </tbody>
  </thead>
  <?php else: ?>
    <thead>
      <tr>
        <th>Name</th>
        <th>Continent</th>
        <th>Independence</th>
        <th>Head of State</th>
      </tr>
    </thead>
    <tbody>
    <?php foreach ($results as $row): ?>
      <tr>
        <td><?= $row['name']; ?></td>
        <td><?= $row['continent']; ?></td>
        <td><?= $row['independence_year']; ?></td>
        <td><?= $row['head_of_state']; ?></td>
      </tr>
    <?php endforeach; ?>
    </tbody>
  <?php endif ?>
</table>

