import Joi from "joi-browser";

export const loginSchema = {
  email: Joi.string().email().label("Email"),
  password: Joi.string().min(3).label("Password"),
};
export const signUpSchema = {
  email: Joi.string().email().label("Email"), 
  password: Joi.string().min(6).regex(/^[a-zA-Z0-9]{3,30}$/),
  phone: Joi.number().integer().label("Phone"),
  firstName: Joi.string().min(3).max(34).label("First Name"),
  lastName: Joi.string().min(3).max(34).label("Last Name"),
  birthAge: Joi.string().label("Age"),
};

// const ageProperty = (value, helpers) => {
//   const year = value.split("-")[0];
//   // Throw an error (will be replaced with 'any.custom' error)
//   if (year < "2002") {
//     throw new Error("You must be above 18 to Register");
//   }
//   // Return the value unchanged
//   return value;
// };

// export const ageSchema = Joi.string().custom(ageProperty, "custom validation");
