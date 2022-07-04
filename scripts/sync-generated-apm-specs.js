// To run this script use the command 'npm run sync-generated-apm-specs' on the IRE VPN Profile.

var specs = require('./sync-specs');

specs.syncPaymentRequest('Sofort', 'https://apm-sofort.cko-sbox.ckotech.co/relations/gw/pay');
specs.syncPaymentResponse('Sofort', 'https://apm-sofort.cko-sbox.ckotech.co/relations/gw/payment');

specs.syncPaymentRequest('Giropay', 'https://apm-giropay.cko-sbox.ckotech.co/giropay/relations/gw/pay');
specs.syncPaymentResponse('Giropay', 'https://apm-giropay.cko-sbox.ckotech.co/giropay/relations/gw/payment');

specs.syncPaymentRequest('EPS', 'https://apm-giropay.cko-sbox.ckotech.co/eps/relations/gw/pay');
specs.syncPaymentResponse('EPS', 'https://apm-giropay.cko-sbox.ckotech.co/eps/relations/gw/payment');
