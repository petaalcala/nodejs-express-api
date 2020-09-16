const { offices } = require('../data/offices');

exports.getOffice = params => offices.find(elem => elem.id === params.id);

exports.getOffices = params => {
  let officesToReturn = offices;
  officesToReturn = params.id ? officesToReturn.filter(elem => elem.id === params.id) : officesToReturn;
  officesToReturn = params.offset ? officesToReturn.slice(params.offset) : officesToReturn;
  officesToReturn = params.limit ? officesToReturn.slice(0, params.limit) : officesToReturn;
  return officesToReturn;
};
