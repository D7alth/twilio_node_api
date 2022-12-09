const accountSId = "AC917eb904a36dde201659ce756a064911";
const AuthToken = "e8b79b6836b9e05d4c5841a280b82587";

const client = require('twilio')(accountSId, AuthToken);

sender = (body) => {
    target = 
    [
        {nome: "alberth", num : "+556183360091"},
        {nome: "alberth", num : "+556183360091"},
    ]

    var acc, received, reject, arr = target;



        for(i = 0; i < arr.length; i++){
           (function(arr, i){
                setInterval(function(){
                    client.messages.create({    
                        from: 'whatsapp:+14155238886',
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