const { getOffice } = require('../services/offices');

exports.officeValue = office => new Promise(resolve => resolve(office ? getOffice(office) : null));
