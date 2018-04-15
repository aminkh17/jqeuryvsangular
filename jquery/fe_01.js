    var users = [];
    var App = function(){
        var url = 'http://ui-grid.info/data/500_complex.json';

        function view(e) {
            $.each(users, function(index, user){
                if(e === user.id){
                    $('.fullmodal').show();
                    for(var n in user){
                        $('#p'+n).text(user[n]);
                    }
                }
            })
            // var id = '??'; //please determine the id
            // $.ajax({
            //     url: url + '/view/' +id,
            //     data: data
            // }).done( function (data){
            //});
        }

        function remove(event) {
            var id = '??'; //please determine the id
            $.ajax({
                url: url + '/remove/' + id ,
                data: data
            }).done( function (data){

            });
        }

        function initialize() {
            $.ajax({
                url: url
            }).done(function(data){
                users=[];
                for(i=0; i<data.length; i++){
                    users.push({
                        id:data[i].id,
                        name:data[i].name,
                        age:data[i].age,
                        sex:data[i].gender,
                    });
                }
                createRows(users);
            })
        }

        function createRows(users){
            var table =  $('<tbody>');
            for(i=0; i<users.length; i++){
                var row = $('<tr>');
                for(var m in users[i]){
                    row.append($('<td>').text(users[i][m]));
                }
                row
                .append($('<td>')
                    .append($("<a>").attr("href","javascript:App().view("+users[i].id+")").text('View'))
                    .append($("<a>").attr("href","javascript:remove("+users[i].id+")").text('Remove'))
                );
                table.append(row);
            }
            $('#gtable').append(table);
        }

        return {
            initialize: initialize,
            view: view,
            remove: remove
        };

     
    }
    
    App().initialize();

    $('.fullmodal button').click(
        function(e){
            $('.fullmodal').hide();
        }
    )