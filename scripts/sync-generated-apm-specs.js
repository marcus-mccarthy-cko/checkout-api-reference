// To run this script use the command 'npm run sync-generated-apm-specs' on the IRE VPN Profile.

var specs = require('./sync-specs');

specs.syncPaymentRequest('Sofort', 'https://apm-sofort.cko-sbox.ckotech.co/relations/gw/pay');
specs.syncPaymentResponse('Sofort', 'https://apm-sofort.cko-sbox.ckotech.co/relations/gw/payment');

specs.syncPaymentRequest('Bancontact', 'https://apm-ppro.cko-sbox.ckotech.co/bancontact/relations/gw/pay');
specs.syncPaymentResponse('Bancontact', 'https://apm-ppro.cko-sbox.ckotech.co/bancontact/relations/gw/payment');


specs.syncPaymentRequest('P24', 'https://apm-ppro.cko-sbox.ckotech.co/p24/relations/gw/pay');
specs.syncPaymentResponse('P24', 'https://apm-ppro.cko-sbox.ckotech.co/p24/relations/gw/payment');


specs.syncPaymentRequest('Postfinance', 'https://apm-ppro.cko-sbox.ckotech.co/postfinance/relations/gw/pay');
specs.syncPaymentResponse('Postfinance', 'https://apm-ppro.cko-sbox.ckotech.co/postfinance/relations/gw/payment');


specs.syncPaymentRequest('Multibanco', 'https://apm-ppro.cko-sbox.ckotech.co/multibanco/relations/gw/pay');
specs.syncPaymentResponse('Multibanco', 'https://apm-ppro.cko-sbox.ckotech.co/multibanco/relations/gw/payment');

