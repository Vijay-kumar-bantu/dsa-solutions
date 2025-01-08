const passwordStrengthCheck = (
	password: string
): { isValid: boolean; message: string } => {
	const regex = new RegExp(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?({})&#^])[A-Za-z\d@$!%*?({})&#^]{8,}$/
	);

	// Password must be at least 8 characters long
	if (password.length < 8) {
		return {
			isValid: false,
			message: "Password must be at least 8 characters long",
		};
	}

	// Password must contain at least one lowercase letter
	if (regex.test(password) === false) {
		return {
			isValid: false,
			message:
				"Password must contain at least one lowercase letter,one uppercase letter, one number and one special character",
		};
	}

	return {
		isValid: true,
		message: "No errors found",
	};
};

export default passwordStrengthCheck;
