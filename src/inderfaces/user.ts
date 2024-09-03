export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
};

export type UserValues = Pick<UserType, 'firstName' | 'lastName'>;
