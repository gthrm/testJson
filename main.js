$(document).ready(function () {
    $.getJSON("data.json", function (data) {
    // data = data['feed']['entry'];    
    console.log(data);
    // showGoods(data);
    });

    function showGoods(data) {
       var out = '';
       
        for (var index = 0; index < data.length; index++) {
            if (data[index]['gsx$show']['$t']!=0) {
                out += `<div class="col-lg-3 col-md-3 col-sm-2 text-center">`;
                out += `<div class="goods">`;
                out += `<h5>${data[index]['gsx$name']['$t']} <span class="badge badge-secondary">New</span></h5>`;
                out += `<img class=imgG src="${data[index]['gsx$img']['$t']}" alt="">`;
                out += `<p class="cost">Цена: ${data[index]['gsx$cost']['$t']}</p>`;
                out += `<p class="show">Доступно: ${data[index]['gsx$show']['$t']} шт.</p>`;
                out += `<p class="button"><button type="button" class="btn btn-success" data = "${data[index]['gsx$id']['$t']}">Купить</button></p>`;
                out += `</div>`;
                out += `</div>`;
            }
          
            
        } 

       $('.shop-field').html(out);
    }
})

