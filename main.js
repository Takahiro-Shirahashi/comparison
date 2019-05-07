//1〜6までの数値をランダムに作成
var number = Math.floor(Math.random() * 6 + 1);
//入力された数値を整数に変換して、変数answerに代入
var answer = parseInt(window.prompt('数当てゲーム。1〜6の数字を入力して下さい。'));

//変数を宣言
var message;

//入力された値に応じたメッセージをwindowsオブジェクトのalertメソッドで表示
if(answer === number){
  massage = 'あたり！';
}
else if(answer < number){
   massage = 'はずれ！もっと大きな数です。';
 }
else if(answer > number){
  massage = 'はずれ！もっと小さな数です。';
}
else{
  massage = '1〜6の数字を入力して下さい。';
}
window.alert(massage);

//今回の正解を表示する
document.getElementById('result').textContent = '今回の正解は'+number+'でした！';
