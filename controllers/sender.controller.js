const accountSId = "";
const AuthToken = "";

const client = require('twilio')(accountSId, AuthToken);

sender = (body) => {
    target = 
    [
        {nome: "alberth", num : "+"},
        {nome: "alberth", num : "+"},
    ]

    var acc, received, reject, arr = target;



        for(i = 0; i < arr.length; i++){
           (function(arr, i){
                setInterval(function(){
                    client.messages.create({    
                        from: 'whatsapp:+',
                        body: body,
                        to: 'whatsapp:' + arr[i].num})
                            .then(message => {
                                console.log(message.sid);
                                received++;
                            })
                            .catch(e => {
                                console.log(e);
                                reject++;
                            }); 
                    acc =+ i; 
                },9000);          
        })(arr, i);
    }
    console.log(`number sends : ${acc}, received : ${received}, rejected : ${reject}`);
}   

sender();
