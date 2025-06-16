<?php
require 'conexao.php';

$matricula = $_POST['matricula'];
$nome = $_POST['nome'];
$curso = $_POST['curso'];
$polo = $_POST['polo'];
$email = $_POST['email'];
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
$aceite = isset($_POST['aceite']) ? true : false;
$data = date( 'Y-m-d H:i:s');

$verifica = $conexao->prepare('SELECT 1 FROM usuarios WHERE matricula = :matricula OR email = :email');
$verifica->execute([
    ':matricula' => $matricula,
    ':email' => $email
]);

if ($verifica->rowCount() > 0) {
    echo "<p style='color:red;'>⚠️ Matrícula ou e-mail já cadastrados. <a href='../login-cadastro/cadastro.html'>Tentar novamente</a></p>";
    exit;
}


$sql = "INSERT INTO usuarios (matricula, nome, curso, polo, email, senha, aceite, data_cadastro)
        VALUES (:matricula, :nome, :curso, :polo, :email, :senha, :aceite, :data)";

try{
    $stmt = $conexao->prepare($sql);
    $stmt->execute([
            'matricula'=>$matricula, 
            'nome'=>$nome,
            'curso'=>$curso,
            'polo'=>$polo,
            'email'=>$email,
            'senha'=>$senha,
            'aceite'=>$aceite,
            'data'=>$data
        ]);
    
    header('Location: ..login-cadastro/login.html');
    exit;

}
catch(PDOException $e) {
    echo 'Erro ao cadastrar: ' . $e->getMessage();

}
?>