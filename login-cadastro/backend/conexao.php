<?php
$host = 'localhost';
$db = 'unitasks';
$user = 'postgres';
$password = 'unit4sk-02';

try {
    $conexao = new PDO("pgsql:host=$host;dbname=$db", $user, $password);
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexão bem-sucedida";
} catch (PDOException $e) {
    echo "Erro na conexão: " . $e->getMessage();
    exit;
}
?>