const crypto = require('crypto');
crypto.createCipher('aes192', 'a_password'); // <-- triggers scanner
