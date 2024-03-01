# ipcli

Return the public IP address of the client.

## CLI

Use the CLI to get the public IP address of the client in the terminal.

### Install

```sh
npm install -g @misterioso013/ipcli
```

### Usage

```sh
npx ipcli
#=> Your local IP address is: 192.168.1.101
```

## API

Use the API to get the public IP address of the client in your code.

### Install

```sh
npm i @misterioso013/ipcli
```

### Usage

```js
import { ip } from "@misterioso013/ipcli";

console.log(ip()); // 192.168.1.101
```

## Development

Contribute to the development of the package.

> Create a fork of the repository and clone it to your local machine.

```sh
git clone https://github.com/misterioso013/ipcli.git
cd ipcli
npm install
```

### Test

```sh
npm test
```
