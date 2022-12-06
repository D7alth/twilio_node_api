const accountSId = "AC917eb904a36dde201659ce756a064911";
const AuthToken = "e8b79b6836b9e05d4c5841a280b82587";

const client = require('twilio')(accountSId, AuthToken);

exports.sender = (body, to) => {
client.messages.create({
            from: 'whatsapp:+14155238886',
            body: body,
            to: 'whatsapp:' + to
        }).then(message => console.log(message.sid))
            .catch(e => console.log(e));
}