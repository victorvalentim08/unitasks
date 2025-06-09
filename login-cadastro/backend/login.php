<?php
require 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';
    $senha = $_POST['senha'] ?? '';

    if (!empty($email) && !empty($senha)) {
        try {
            $stmt = $conexao->prepare("SELECT * FROM usuarios WHERE email = :email");
            $stmt->bindParam(':email', $email);
            $stmt->execute();

            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($usuario && password_verify($senha, $usuario['senha'])) {
                session_start();
                $_SESSION['matricula'] = $usuario['matricula'];
                $_SESSION['nome'] = $usuario['nome'];
                $_SESSION['curso'] = $usuario['curso'];
                $_SESSION['polo'] = $usuario['polo'];
                $_SESSION['email'] = $usuario['email'];
                header("Location: dashboard.php"); // ou página inicial do usuário
                exit;
            }
            else {
                echo "E-mail ou senha incorretos.";
            }
        } catch (PDOException $e) {
            echo "Erro no login: " . $e->getMessage();
        }
    } else {
        echo "Preencha todos os campos.";
    }
}
?>
