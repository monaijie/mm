<?php
header('Content-type:text/html;charset=utf-8');

$filename = 'user.json';

$arr = array();


//读取原始数据

$data=file_get_contents($filename);

//转换成数组

$temp=json_decode($data,true);


$arr['id'] = sizeof($temp)+1;

$arr['username'] = $_POST['username'];

$arr['password'] = $_POST['password'];


//判断用户名是否存在

if(isset($temp[$arr['username']])){

echo $arr['username'];exit;

}

//插入传过来的值

$temp[$arr['username']]=$arr;

file_put_contents($filename,json_encode($temp)); //替换原文件


$new_data=file_get_contents($filename);//读取文件
?>