window.alert("アラートの設定！！")

function inputChange(event){
    console.log(event.data);
}


let name = document.getElementById('name');
Name.addEventListener('input', inputChange);


  function check(){
    if (mail_form.mail.value == ""){  //条件に一致する場合(メールアドレスが空の場合)
      alert("メールアドレスを入力してください");    //エラーメッセージを出力
        return false;    //送信ボタン本来の動作をキャンセルします
    }else{              //条件に一致しない場合(メールアドレスが入力されている場合)
        return true;    //送信ボタン本来の動作を実行します
    }
      }

//       var img = new Image();
// window.onload = function() {
//   img.src = 'background.jpeg';
// };



window.addEventListener('load', check)


// 要素.addEventListener('イベント名', 関数)


