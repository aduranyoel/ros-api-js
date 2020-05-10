# ros-api-js
Api RouterOS ( Node.js && Express )

### Download Node.js
<a href="https://nodejs.org/es/download/" target="_blank">Node.js</a>

### Open terminal in project path
```bash
cd ros-api-js/
```

### Install dependency
```bash
npm install
```
### Adjust variables value (src/variables.js)
```js

const login = {
    host: '192.168.1.250',
    user: 'admin',
    password: 'passwordHere'
};

const ips = [
    { ip: '192.168.1.17', interface: 0 },
    { ip: '192.168.1.18', interface: 1 },
    { ip: '192.168.1.19', interface: 2 },
];
```

### Run the server
```bash 
npm start
```
