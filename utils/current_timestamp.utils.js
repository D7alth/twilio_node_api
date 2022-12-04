var now = new Date();

current_timestamp = () => {
return now.getDate() + "-" + now.getDate() + "-" + now.getMonth() + "-" 
+ now.getFullYear() + " " + now.getHours() + ":"
+ now.getMinutes() + ":" + now.getSeconds();
}

module.exports = current_timestamp();