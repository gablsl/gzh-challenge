export type Character = {
  id: string;
  image: string;
  name: string;
  species: string;
  status: string;
  gender: string;
  origin: {
    name: string;
  };
};

export type Resident = {
  id: string;
  name: string;
  image: string;
};

export type Planet = {
  name: string;
  type: string;
  dimension: string;
  residents: Resident;
};
