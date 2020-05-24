
/*var name = "CHEW YONG SHAN";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "IT Graduate";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

var bio = {
	"name": "CHEW YONG SHAN",
	"role": "IT Graduate",
	"city": "Batu Berendam",
	"contacts":{
		"mobile": "+60166403392",
		"email": "chewys96@gmail.com",
		"github":"harrychew",
		"twitter":"@harrychewys",
		"location": "Melaka"
	},
	"welcomeMessage":"Welcome to my website! Learning programming language and building along the way!",
	"interpersonalSkills":[
		"Time Management","Communication Skill", "Analytic Skill","Reporting Skill"
	],
	"computingSkills":[
		"Microsoft Office","WireShark and Nmap", "Metasploit, Burpsuite","Keras Python","Armitage"
	],
	"bioPic": "images/me.jpeg", 
	"profile":"A Final Year IT Student, currently seeking an Entry-level Information Security Analyst or Consultant position. Good fundamental concepts of various information security systems such as firewall, IDS/IPS, anti-virus etc., familiar with various programming languages and networking. Certified Ethical Hacker with good analytical skill and familiar with various cybersecurity and OSINT tools such as Nmap, Metasploit, BurpSuite, Netcat, Maltego etc.  Planning on taking additional professional certification like OSCP and CISSP. On top of the IT security background, have fairly practical experience with AI deep learning research for Final Year Project, proposing a theoretical framework combining CNN and Bidir-LSTM to improve human activity recognition using two publicly available datasets, scoring above 87% and 90% accuracy.  A growth-oriented team-player with good time management and communication skill, and value professional integrity above all.";

};

var work = {
	"companies":[
		{
			"postion":"Cybersecurity Intern",
			"employer":"LGMS Sdn Bhd, Selangor, Malaysia",
			"period": "March 2019-June 2019",
			"responsibility":[
			"Assist in Office Arcade System Installation with 1000++ arcade games, including design and development",
			"POC Hacking Sonoff Smart Switch",
			"Assisted in validating Penetration Testing report and simple forensic log analysis"
			],
			"reportLink":"https://www.linkedin.com/in/chew-yong-shan-023b5aaa/detail/treasury/position:1438310015/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAABdOvJsBgN8WGqnCV4ALIiwbXc50Dn61pWc%2C1585972256722)&parentEntityUrn=urn%3Ali%3Afsd_profilePosition%3A(ACoAABdOvJsBgN8WGqnCV4ALIiwbXc50Dn61pWc%2C1438310015)&section=position%3A1438310015&treasuryCount=1&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2B%2Fv8OAwYSbeF3BKH1fukQw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-treasury_thumbnail_cell"
		},
		{
			"postion":"Web Developer Intern",
			"employer":"Eble Tech Sdn Bhd, Melaka, Malaysia",
			"period": "August 2018-November 2018",
			"responsibility":[
			"Assisted in deploying an online admin panel for “Helplaa”, an Android application intended to allow people to seek help from helpers or volunteers",
			"Obtained Bronze (team effort) in Category C-STA/SPIN in MMU Research Innovation Commercialization and Entrepreneurship Showcase (RICES) 2018"
			],
			"reportLink":"https://www.linkedin.com/in/chew-yong-shan-023b5aaa/detail/treasury/position:1384130645/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAABdOvJsBgN8WGqnCV4ALIiwbXc50Dn61pWc%2C1590228590444)&parentEntityUrn=urn%3Ali%3Afsd_profilePosition%3A(ACoAABdOvJsBgN8WGqnCV4ALIiwbXc50Dn61pWc%2C1384130645)&section=position%3A1384130645&treasuryCount=1&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2B%2Fv8OAwYSbeF3BKH1fukQw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-treasury_thumbnail_cell"
		}
	]
};


var education = {
	"institutions":{
		"courseName":"Bachelor of Information Technology (Hons.) Security Technology",
		"university":"Multimedia University, Melaka, Malaysia",
		"period":"June 2016–June 2020",
		"accomplishment":[
		"GPA: 4.0, CGPA: 3.99",
		"Final Year Project: Human Action Recognition using Accelerometer Data (Research-based)",
		"Research paper titled ‘Deep Analysis for Smartphone-based Human Activity Recognition’ accepted to be part of the International Conference on Information and Communication Technology (ICoICT) 2020 Conference",
		"Clubs and Societies: Wing Chun Do Club (Presidents and Assistant Coach), Martial Art Workshop 1.0 (Event Director), Korean Culture Festival (Logistic Leader)",
		"Certified Ethical Hacker (EC-Council",
		"Faculty Dean-list Award Recipient (2017-2020)"
		],
		"reportLink":"https://www.linkedin.com/in/chew-yong-shan-023b5aaa/detail/treasury/education:391015753/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAABdOvJsBgN8WGqnCV4ALIiwbXc50Dn61pWc%2C1588575931715)&section=education%3A391015753&treasuryCount=2&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bd%2FoAC%2FdKRCqW6wv%2B11ynwA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-treasury_thumbnail_cell",
		"reportLink2":"https://www.linkedin.com/in/chew-yong-shan-023b5aaa/detail/treasury/education:391015753/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAABdOvJsBgN8WGqnCV4ALIiwbXc50Dn61pWc%2C1585972911316)&section=education%3A391015753&treasuryCount=2&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bd%2FoAC%2FdKRCqW6wv%2B11ynwA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-treasury_thumbnail_cell"


	}
};

var project = {
	"projects":[
		{
			"projectName":"Human Activity Recognition Using Accelerometer Data",
			"projectCategory": "Course Final Year Project",
			"period":"July 2019–March 2020",
			"detail":"This research focuses on developing a fusion of CNN and RNN model to gain a deeper insight into HAR, coupled with the improvement of its classification accuracy.Furthermore, the widespread use of self-collected data and multimodal sensor data has been questionable as they are not convenient to use and some results may be biased. Therefore, this research used two widely accepted public datasets which are the UCI and WISDM datasets to evaluate the proposed model. This research also has evaluated the effect of hyperparameter on the performance of the model.",
			"projectLink":"https://github.com/harrychew/Human-Activity-Recognition-Using-Accelerometer-Data"
		}
		{
			"projectName":"Digital Signature Implementation using Python",
			"projectCategory": "Course Assignment",
			"period":"July 2019–October 2019",
			"detail":"Digital Signature Implementation using Tkinter Python, using asymmetric encryption and RSA algorithm",
			"projectLink":"https://github.com/harrychew/Digital-Signature-Implementation"		
		}
		{
			"projectName":"Home Loan Mortgage Approval System using Expert System",
			"projectCategory": "Course Assignment",
			"period":"July 2019–March 2020",
			"detail":"Our paper presents the works of designing an expert system that aims to assist the bank agents in approving home loan mortgage. There are many criteria to be considered when deciding whether to approve or reject an application of home loan. C Language Integrated Production System (CLIPS) is used as a tool for designing this expert system. The expert system takes inputs from the users and generates the final output according to the rules.",
			"projectLink":"https://github.com/harrychew/Home-Loan-Mortgage-Approval-using-Expert-System"

		}
		{
			"projectName":"Airflight booking using XML, DTD, XSL",
			"projectCategory": "Course Assignment",
			"period":"July 2019–October 2019",
			"detail":"Airflight booking using XML, DTD, and XLS, including logical view",
			"projectLink":"https://github.com/harrychew/Airflight-booking-XML-DTD-XSL"
		}
		{
			"projectName":"",
			"projectCategory": "",
			"period":"",
			"detail":"",
			"projectLink":""
		}
		{
			"projectName":"",
			"projectCategory": "",
			"period":"",
			"detail":"",
			"projectLink":""
		}
	]
	]
		
};