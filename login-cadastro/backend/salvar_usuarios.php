<?php
require 'conexao.php';

$matricula = $_POST['matricula'];
$nome = $_POST['nome'];
$curso = $_POST['curso'];
$polo = $_POST['polo'];
$email = $_POST['email'];
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
$aceite = isset($_POST['aceite']) ? true : false;
$data = date(format: 'Y-m-d H:i:s');

$sql = "INSERT INTO usuarios (matricula, nome, curso, polo, email, senha, aceite, data_cadastro)
        VALUES (:matricula, :nome, :curso, :polo, : email, :senha, :aceite, :data)";

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
    
    header('Location: sucesso.html');
    exit;

}
catch(PDOException $e) {
    echo 'Erro a cadastrar'. $e->getMessage();
}
?>