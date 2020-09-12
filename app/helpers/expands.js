const { departmentValue } = require('../helpers/departments');
const { officeValue } = require('../helpers/offices');
const { employeeValue } = require('../helpers/employees');

const functions = {
  department: departmentValue,
  superdepartment: departmentValue,
  office: officeValue,
  manager: employeeValue
};

const findRelation = async (element, relationArrays = []) => {
  if (!relationArrays.length || !element) return element;

  const functionToApply = functions[relationArrays[0]];
  if (!functionToApply) return {};

  const relatedValue = await functionToApply((await element)[relationArrays[0]]);

  return {
    [relationArrays[0]]: {
      ...relatedValue,
      ...(await findRelation(relatedValue, relationArrays.slice(1)))
    }
  };
};

const processRelations = (expands, element) =>
  expands ? Promise.all(expands.map(expand => findRelation(element, expand.split('.')))) : [];

exports.processExpand = async (expands, element) => {
  const relations = expands ? await processRelations(expands, element) : [];
  return relations.reduce((acc, item) => ({ ...acc, ...item }), element);
};
