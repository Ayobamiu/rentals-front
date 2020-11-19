import Joi from "joi-browser";

export const validateSingleInput = (target, schema) => {
  //Make sure to use the same name for inputs in state and in form
  const result = Joi.validate(
    { [target.name]: target.value },
    { [target.name]: schema[target.name] }
  );
  return result.error ? result.error.details : null;
};

export const validateAllInput = (data, schema) => {
  const result = Joi.validate(data, schema, {
    abortEarly: false,
  });
  if (!result.error) return null;
  const errors = {};
  for (let item of result.error.details) errors[item.path[0]] = item.message;
  return errors;
};

export const validateAge = (value) => {
  const year = value.split("-")[0];
  if (Number(year) < 2002) {
    return "You must be above 18 to Register";
  }
};
