# ipcli
Return the public IP address of the client.

## CLI

### Install
```sh
npm install -g @misterioso013/ipcli
```

### Usage
```sh
ipcli
#=> Your local IP address is: 192.168.1.101
```

## API

### Install
```sh
npm i @misterioso013/ipcli
```

### Usage
```js
// ES6 import
// import ip from 'ipcli';
const ip = require('ipcli');

console.log(ip()); // 192.168.1.101
``` 