<?php
session_start();

// Verifica se o usuário está logado
if (!isset($_SESSION['matricula']) || !isset($_SESSION['nome'])) {
    header("Location: login.html"); // ou login.php
    exit;
}

$nome = $_SESSION['nome'];
$matricula = $_SESSION['matricula'];
$curso = $_SESSION['curso'] ?? 'Curso não definido'; // caso ainda não tenha na sessão
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Sala Virtual - Unitasks</title>
    <link rel="stylesheet" href="estilo.css"> 
</head>
<body>
    <header>
        <h1>Bem-vindo(a), <?php echo htmlspecialchars($nome); ?>!</h1>
        <p>Matrícula: <?php echo htmlspecialchars($matricula); ?></p>
        <p>Curso: <?php echo htmlspecialchars($curso); ?></p>
        <a href="logout.php">Sair</a>
    </header>

    <main>
        <h2>Sala de Aula Virtual</h2>
        <p>Aqui você encontrará os materiais e tarefas da sua turma.</p>
        <!-- aqui você pode carregar conteúdos específicos do curso no futuro -->
    </main>
</body>
</html>
