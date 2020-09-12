const departments = [
  {
    id: 1,
    name: 'Sales',
    superdepartment: null
  },
  {
    id: 2,
    name: 'Engineering',
    superdepartment: null
  },
  {
    id: 3,
    name: 'Product',
    superdepartment: null
  },
  {
    id: 4,
    name: 'Design',
    superdepartment: 3
  },
  {
    id: 5,
    name: 'Inbound Sales',
    superdepartment: 1
  },
  {
    id: 6,
    name: 'Outbound Sales',
    superdepartment: 1
  },
  {
    id: 7,
    name: 'Application Security',
    superdepartment: 2
  },
  {
    id: 8,
    name: 'Front-End',
    superdepartment: 2
  },
  {
    id: 9,
    name: 'Sales Development',
    superdepartment: 6
  },
  {
    id: 10,
    name: 'Product Management',
    superdepartment: 3
  }
];

exports.getDepartment = departmentId => departments.find(elem => elem.id === departmentId);

exports.getDepartments = params => {
  let departmentsToReturn = departments;
  departmentsToReturn = params.id
    ? departmentsToReturn.filter(elem => elem.id === params.id)
    : departmentsToReturn;
  departmentsToReturn = params.offset ? departmentsToReturn.slice(params.offset) : departmentsToReturn;
  departmentsToReturn = params.limit ? departmentsToReturn.slice(0, params.limit) : departmentsToReturn;
  return departmentsToReturn;
};
