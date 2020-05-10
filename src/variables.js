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


module.exports = {
  login: login,
  ips: ips
};
