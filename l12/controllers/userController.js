export const userLogin = (req, res) => {
  const { name, email } = req.body;
  console.log(name,email)
  res.status(200).json({
    success: true,
    message: "User logged-in successfully",
    user: { name, email },
  });
};
