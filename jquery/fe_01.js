    var users = [];
    var App = function(){
        var url = 'http://ui-grid.info/data/500_complex.json';

        const MSGSPAN = "#response-message";
        const SUCCESS = "success";
        const FAILED = "failed";
        

        function view(e, event) {
            // OR > var id = $(event.parentElement.parentElement).find(">:first-child").text(); //please determine the id
            var id = e;
            $.each(users, function(index, user){
                if(id === user.id){
                    $('.fullmodal').show();
                    for(var n in user){
                        $('#p'+n).text(user[n]);
                    }
                }
            })
            // OR
            // $.ajax({
            //     url: url + '/view/' +id,
            //     data: data
            // }).done( function (data){
            // });
        }

        function remove(e) {
            for(var i=0; i<users.length; i++)
            {
                var user = users[i];
                if(e === user.id){
                    var c = confirm("Do you want to delete this person: "+user.name);
                    if(c){
                        users.splice(i,1);
                        createRows(users);
                        showMessage("Person has been deleted.", SUCCESS);
                        
                    }
                    return;
                }
            }
            // OR
            // var id = '??'; //please determine the id
            // $.ajax({
            //     url: url + '/remove/' + id ,
            //     data: data
            // }).done( function (data){

            // });
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
                showMessage("Request has been done", SUCCESS);
            }).fail(function(err){
                showMessage("Request is failed!", FAILED);
                
            })
        }

        function showMessage(msg, type){
            $(MSGSPAN).addClass(type).text(msg).show();
            setTimeout(() => {
                hideMessage();
            }, 5000);
        }

        function hideMessage(){
            $(MSGSPAN).hide();
        }

        hideMessage();
        function createRows(users){
            
            var table =  $('<tbody>');
            for(i=0; i<users.length; i++){
                var row = $('<tr>');
                for(var m in users[i]){
                    row.append($('<td>').text(users[i][m]));
                }
                row
                .append($('<td>')
                    .append($("<a>").attr("href","#").attr("onclick","App().view("+users[i].id+", this)").text('View'))
                    .append($("<a>").attr("href","#").attr("onclick","App().remove("+users[i].id+", this)").text('Remove'))
                );
                table.append(row);
            }
            $('#gtable tbody').remove();
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