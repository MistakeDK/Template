/// <reference types="vite/client" />
export interface State {
  name: { first: string; middle: string; last: string };
  age: number;
  info: {
    school: { name: string; isGraduated: boolean };
    home: {
      hasPet: boolean;
      isApartment: boolean;
      address: {
        main: { street: string; ward: string; district: string; city: string };
        more: { name: string; block: string };
      };
    };
  };
  setAge: (age: number) => void;
  updateStreet: (streetName: string) => void;
  updateWard: (ward: string) => void;
}
