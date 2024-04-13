import AppError from "../utils/error.utils.js";
import User from "../models/user.models.js";
import Patient from "../models/patient.models.js";

const cookieOptions = {
  secure: true,
  sameSite: 'None',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  httpOnly: true,
};

/**
 * @REGISTER
 * @ROUTE @POST {{URL}}/api/v1/user/register
 * @ACCESS Public
 */
export const registerUser = async (req, res, next) => {
  const { fullName, email, password ,mobile,type} = req.body;
  let user; // Declare user variable outside the try block

  if (!fullName || !email || !password || !mobile || !type  ) {
    return next(new AppError("All Fields are Required", 400));
  }

  const userExists = await User.findOne({
    email,
  });

  if (userExists) {
    return next(new AppError("Email Already Exists", 400));
  }

  try {
    if (!user) {
      user = await User.create({
        fullName,
        email,
        password,
        mobile,
        type,

      });
    }

    user.password = undefined;

    const token = await user.generateJWTToken();

    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
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
  const user = await User.findOne({ email }).select("+password");

  // If no user or sent password do not match then send generic response
  if (!(user && (await user.comparePassword(password)))) {
    return next(
      new AppError("Email or Password do not match or user does not exist", 401)
    );
  }

  // Generating a JWT token
  const token = await user.generateJWTToken();

  // Setting the password to undefined so it does not get sent in the response
  user.password = undefined;

  // Setting the token in the cookie with name token along with cookieOptions
  res.cookie("token", token, cookieOptions);

  // If all good send the response to the frontend
  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    user,
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
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    message: "User details",
    user,
  });
};

export const getUserDetails = async (req, res) => {
  try {
    let userId;
    
    // Check if userId is provided in request parameters
    if (req.params.id) {
      userId = req.params.id;
    } else if (req.body.id) {
      // Check if userId is provided in request body
      userId = req.body.id;
    } else {
      // If userId is not provided in either request parameters or body, return an error
      return res.status(400).json({
        success: false,
        message: "User ID not provided",
      });
    }

    // Finding the user using the userId
    const user = await User.findById(userId);

    if (!user) {
      // If user with the given userId is not found, return appropriate response
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // If user found, send user details in response
    res.status(200).json({
      success: true,
      message: "User details",
      user,
    });
  } catch (error) {
    // If there's any error, handle it
    console.error("Error fetching user details:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



export const getAllUsers = async (req, res, next) => {
  try {
    // Retrieve all users
    const users = await User.find().populate("patients");

    // Populate patients associated with each user and get count
    // const populatedUsers = await Promise.all(users.map(async user => {
    //   const populatedUser = user.toJSON(); // Convert Mongoose document to plain JavaScript object
    //   const patients = await Patient.find({ docid: user._id }); // Populate patients associated with the user
    //   populatedUser.patientCount = patients.length; // Get the count of patients
    //   populatedUser.patients = patients; // Assign patients to the user object
    //   return populatedUser;
    // }));

    res.status(200).json({
      success: true,
      // count: populatedUsers.length,
      // users: populatedUsers,
      users
    });
  } catch (err) {
    return next(new AppError("Error Fetching Users", 500));
  }
};