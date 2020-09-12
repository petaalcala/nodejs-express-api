const offices = [
  {
    id: 1,
    city: 'San Francisco',
    country: 'United States',
    address: '450 Market St'
  },
  {
    id: 2,
    city: 'New York',
    country: 'United States',
    address: '20 W 34th St'
  },
  {
    id: 3,
    city: 'London',
    country: 'United Kingdom',
    address: '32 London Bridge St'
  },
  {
    id: 4,
    city: 'Chicago',
    country: 'United States',
    address: '233 S Wacker Dr'
  },
  {
    id: 5,
    city: 'Tokyo',
    country: 'Japan',
    address: '1 Chome-1-2 Oshiage, Sumida City'
  }
];

exports.getOffice = params => offices.find(elem => elem.id === params.id);

exports.getOffices = params => {
  let officesToReturn = offices;
  officesToReturn = params.id ? officesToReturn.filter(elem => elem.id === params.id) : officesToReturn;
  officesToReturn = params.offset ? officesToReturn.slice(params.offset) : officesToReturn;
  officesToReturn = params.limit ? officesToReturn.slice(0, params.limit) : officesToReturn;
  return officesToReturn;
};
