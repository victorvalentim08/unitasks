<?php
session_start();
if (!isset($_SESSION['nome'])) {
    header('Location: login.html');
    exit;
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Dashboard - Unitasks</title>
</head>
<body>
    <h1>Bem-vindo, <?php echo htmlspecialchars($_SESSION['nome']); ?>!</h1>
    <p><strong>Matrícula:</strong> <?php echo htmlspecialchars($_SESSION['matricula']); ?></p>
    <p><strong>Curso:</strong> <?php echo htmlspecialchars($_SESSION['curso']); ?></p>
    <p><strong>Polo:</strong> <?php echo htmlspecialchars($_SESSION['polo']); ?></p>

    <a href="logout.php">Sair</a>
</body>
</html>