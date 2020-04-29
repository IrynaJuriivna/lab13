$(document).ready(function () { // Якщо документ загрузився

    var rand_num = Math.floor(Math.random() * 100); // загадуємо число
    console.log(rand_num); // :) робимо сибі підказку
    var count = 0;
    var rezult = "";
    var names = [];
    var scores = [];
    var all = {};



    $("#input_num").click(function () {

        if (count == 0) {

            rezult = "";
            rezult += '<table border=3 width=100%>';
            rezult += '<tr align=center><td><b>Хід';
            rezult += '<td><b>Число';
            rezult += '<td><b>Результат';
            rezult += '<td><b>Підказка</tr>';
        }

        //після нажання кнопки
        var num = $('#you_num').val(); // берем своє введене число
        var name = $('#name').val();
        count++;
        rezult += '<tr align=center><td width=25%>' + count;
        rezult += '<td width=25%>' + num;
        if (num == rand_num) { // і перевіряємо чи вгадали
            rezult += '<td width=25%>' + 'Вірно'; // відповідно вітаємо з перемогою
            rezult += '<td>' + 'Гру закінчено!!' + '</tr>';
            rezult += "</table>";

            document.getElementById("you_num").disabled = true;
            document.getElementById("input_num").disabled = true;
            var rating = "";
            rating += '<table border=3 width=100%>';
            rating += '<tr align=center><td><b>№';
            rating += '<td><b>Ім*я';
            rating += '<td><b>Кількість кроків</tr>';
            names.push(name);
            scores.push(count);

            var i, j;

                for (i = 0; i < names.length - 1; i++) 
                {
                    for (j = 0; j < names.length - i - 1; j++) 
                    {
                        if (scores[j] > scores[j + 1]) 
                        {
                           var temp =scores[j];
                           scores[j] = scores[j + 1];
                           scores[j + 1] = temp;
                           
                           temp =names[j];
                           names[j] = names[j + 1];
                           names[j + 1] = temp;
                        }
                    }
                }
            
for(var i = 0; i<names.length; i++){
    rating+='<tr align=center><td width=20%>' + (i+1);
  
    rating+='<td width=40%>' + names[i]; 
    rating+='<td width=40%>' + scores[i]; 
}

        
$('#rating').html(rating);

        } else {
            rezult += '<td width=25%>' + 'неправильно';
            //     rezult += 'неправильно' + '<br>' ; // або кажемо що не вгадав

            if (num > rand_num) { // і хочу щоб була підказка
                rezult += '<td width=25%>' + 'число менше' + '</tr>';
                //    rezult += 'дане число менше' + num + '<br>';
            }
            if (num < rand_num) {
                rezult += '<td width=25%>' + 'число більше' + '</tr>';
                //       rezult += 'дане число більше' + num + '<br>';
            }
        }

        $('#rez').html(rezult);
    });

    $('#new').click(function () {


        rand_num = Math.floor(Math.random() * 100);
        console.log(rand_num);
        var n = "";
        count = 0;
        rezult = 'Тут будемо вгадувати';
        $('#you_num').val('');
        $('#name').val('');
        $('#rez').html(rezult);
        
        document.getElementById("you_num").disabled = false;
        document.getElementById("input_num").disabled = false;
        document.getElementById("name").disabled = false;
        $('#hint').show(100);
        $('#vis').hide(100);


    });

    $('#name').on('keyup',function(){
        var $this = $(this),
            val = $this.val();
        
        if(val.length >= 1){
          $('#input_name').show(100);
        }else {
          $('#input_name').hide(100);
        }
      });

    $('#input_name').click(function () 
    {
        document.getElementById("name").disabled = true;
        $('#input_name').hide(100);
        $('#hint').hide(100);
        $('#vis').show(100);
     });

});