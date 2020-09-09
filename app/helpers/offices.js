const { getOffice } = require('../services/offices');

exports.officeValue = office => (office ? getOffice(office) : null);
