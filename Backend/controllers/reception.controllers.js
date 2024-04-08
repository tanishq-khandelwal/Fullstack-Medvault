import AppError from "../utils/error.utils.js";
import Receptionist from "../models/receptionist.models.js";

const cookieOptions = {
  secure: true,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  httpOnly: true,
};

/**
 * @REGISTER
 * @ROUTE @POST {{URL}}/api/v1/user/register
 * @ACCESS Public
 */
export const registerReceptionist = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  let receptionist; // Declare user variable outside the try block

  if (!fullName || !email || !password) {
    return next(new AppError("All Fields are Required", 400));
  }

  const userExists = await Receptionist.findOne({
    email,
  });

  if (userExists) {
    return next(new AppError("Email Already Exists", 400));
  }

  try {
    if (!receptionist) {
        receptionist = await Receptionist.create({
        fullName,
        email,
        password,
      });
    }

    receptionist.password = undefined;

    const token = await receptionist.generateJWTToken();

    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      receptionist,
    });
  } catch (e) {
    return next(new AppError("Error creating user", 500));
  }
};

/**
 * @LOGIN
 * @ROUTE @POST {{URL}}/api/v1/user/login
 * @ACCESS Public
 */
export const loginUser = async (req, res, next) => {
  // Destructuring the necessary data from req object
  const { email, password } = req.body;

  // Check if the data is there or not, if not throw error message
  if (!email || !password) {
    return next(new AppError("Email and Password are required", 400));
  }

  // Finding the user with the sent email
  const receptionist = await Receptionist.findOne({ email }).select("+password");

  // If no user or sent password do not match then send generic response
  if (!(receptionist && (await receptionist.comparePassword(password)))) {
    return next(
      new AppError("Email or Password do not match or user does not exist", 401)
    );
  }

  // Generating a JWT token
  const token = await receptionist.generateJWTToken();

  // Setting the password to undefined so it does not get sent in the response
  receptionist.password = undefined;

  // Setting the token in the cookie with name token along with cookieOptions
  res.cookie("token", token, cookieOptions);

  // If all good send the response to the frontend
  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    receptionist,
  });
};

/**
 * @LOGOUT
 * @ROUTE @POST {{URL}}/api/v1/user/logout
 * @ACCESS Public
 */
export const logoutUser = async (_req, res, _next) => {
  // Setting the cookie value to null
  res.cookie("token", null, {
    secure: true,
    maxAge: 0,
    httpOnly: true,
  });

  // Sending the response
  res.status(200).json({
    success: true,
    message: "User logged out successfully",
  });
};

/**
 * @LOGGED_IN_USER_DETAILS
 * @ROUTE @GET {{URL}}/api/v1/user/me
 * @ACCESS Private(Logged in users only)
 */
export const getLoggedInUserDetails = async (req, res, _next) => {
  // Finding the user using the id from modified req object
  const user = await Receptionist.findById(req.user.id);

  res.status(200).json({
    success: true,
    message: "User details",
    user,
  });
};