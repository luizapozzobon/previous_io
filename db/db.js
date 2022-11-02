export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Vinay Somawat. I’m currently working as a Software Engineer at Biofourmis India specialized in JavaScript Applications. I did my undergrad in CS from NIT Warangal.",
				"I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
				"I love to read, listen to music, and travel.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, feel free to send me an email. My email address is: luiza.pozzobon@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "Python",
			color: "1",
			percentage: "80",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "PyTorch, PyTorchLightning, Scikit-Learn",
			color: "6",
			percentage: "70",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Tensorflow, HuggingFace, Docker",
			color: "4",
			percentage: "50",
		},
		{
			title: "Clouds",
			skillName: "AWS, GCP",
			color: "3",
			percentage: "30",
		},
		{
			title: "Version Control",
			skillName: "GitHub",
			color: "7",
			percentage: "70",
		},
	],
	projects: {
		research: [
			{
				projectName: "Biases in Generative Models for non-conditional image generation",
				image: "images/biases_gen_models.png",
				summary:
					"Compared GANs and Diffusion models on a toy-problem to detect biases on non-conditional image generation.",
				preview:
					"https://github.com/luizapozzobon/IA376_generative_models_biases",
				techStack: ["PyTorch", "PyTorchLightning", "Tensorflow"],
			},
			{
				projectName: "Contrastive Proximal Policy Optimization",
				image: "images/qbert.jpg",
				summary:
					"Mixed reinforcement learning algorithm PPO with the SpatioTemporal DeepInfoMax to understand if an agent with the capability to linearly separate objects performs better than an agent with no such priors (an agent with an entangled representation of the current observation)",
				preview: "https://github.com/luizapozzobon/ia368cc-project",
				techStack: ["PyTorch"],
			},
			{
				projectName: "Document Visual Question Answering with Transformers",
				image: "images/t5_model.png",
				summary:
					"Used Transformers-based models to construct an end-to-end approach to the V+L (Vision and Language) task of Document Visual Question Answering.",
				preview: "https://github.com/luizapozzobon/ia376j-final-project",
				techStack: ["HuggingFace Transformers", "PyTorch", "PyTorchLightning"],
			},
		]
	},
	experience: [
		{
			title: "Biofourmis India Pvt. Ltd.",
			duration: "April 2022 - Present",
			subtitle: "Software Engineer",
			details: [
				"Working on the products in the healthcare/digital therapeutics domain."
			],
			tags: [
				"JavaScript",
				"Angular",
				"Bootstrap",
				"Nodejs",
				"Jenkins",
			],
			icon: "heartbeat",
		},
		{
			title: "Novopay Solutions Pvt. Ltd.",
			duration: "June 2020 - April 2022",
			subtitle: "Software Engineer",
			details: [
				"Implemented Aadhaar Enabled Payment services such as Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements, and Money transfer; completed more than 20 story points in each sprint.",
				"Integrated QR Code and reduced the effective time by 50 percent to load money into wallet, Clevertap events to track user actions, Freshdesk ticketing service and chat-bot services. Worked on user onboarding, approval, and finance interfaces.",
				"Co-ordinated closely with the product team, backend team, android team, and QA team to deliver the product builds before deadlines.",
			],
			tags: [
				"JavaScript",
				"Angular",
				"React",
				"Bootstrap",
				"Nodejs",
				"Jenkins",
			],
			icon: "qrcode",
		},
		{
			title: "ThinkPedia LLP",
			duration: "May 2019 - June 2019",
			subtitle: "SDE Intern",
			details: [
				"Worked as a full stack developer to support tech team.",
				"Developed a customer Web Application from scratch for social media management.",
			],
			tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
			icon: "group",
		},
	],
	education: [
		{
			title: "Bachelors in Computer Science and Engineering",
			duration: "",
			subtitle: "National Institute of Technology, Warangal",
			details: [
				"Qualified GATE-2020.",
				"Active Competitive Programmer with CodeChef Rating 1841*.",
				"Received 500+ stars and 300+ forks on GitHub projects.",
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Computer Networks",
				"Compiler Designing",
				"Cloud Computing",
			],
			icon: "graduation-cap",
		},
		{
			title: "Class 11-12th in Science and Mathematics",
			duration: "",
			subtitle: "Board of Secondary Education, Rajasthan",
			details: [
				"Qualified JEE Advanced, Main & BITSAT.",
				"Secured 99.5 percentile in Class 12th Boards Examinations.",
			],
			tags: ["Physics", "Chemistry", "Mathematics"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "GitHub",
					link: "https://github.com/luizapozzobon",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/luizapozzobon/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/luizapzbn",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Vinay Somawat.",
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
