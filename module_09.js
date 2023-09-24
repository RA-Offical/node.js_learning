const { readFile, writeFile } = require("fs");

readFile(
	"./content/first.txt",
	{ encoding: "utf-8", flag: "r" },
	(err, result1) => {
		if (err) {
			console.log(err);
			return;
		}

		readFile(
			"./content/second.txt",
			{ encoding: "utf-8", flag: "r" },
			(err, result2) => {
				if (err) {
					console.log(err);
					return;
				}

				writeFile(
					"./content/third.txt",
					`${result1} || ${result2}`,
					{ flag: "a" },
					(err, result3) => {
						if (err) {
							console.log(err);
							return;
						}

						console.log(result3);
					}
				);
			}
		);
	}
);
