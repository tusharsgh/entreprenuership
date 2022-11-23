const doctors = [
  {
    id: "1",
    firstname: "Ortho",
    lastname: "Rehab",
    professional: "Post-Joint Replacement and Spinal Surgery",
    title: "GP",
    image: require("../assets/General_Practioner_Female.png"),
    avatar: require("../assets/General_Practioner_Female_Avatar.png"),
    description: " Comprehensive treatments and protocol driven Physiotherapy help in faster recovery, allowing patients to regain independence and get back to normalcy",
    experiences: "700",
    greeting:
      "Ortho Rehab Program is specifically created to address the needs of post Total Knee Replacement, post Total Hip Replacement & Spinal surgery patients based on international evidence-based guidelines. This improves the patient’s quality of life and reduces dependability.",
  },
  {
    id: "2",
    firstname: "Heart",
    lastname: "Rehab",
    professional: "General Practioner",
    title: "GP",
    image: require("../assets/General_Practioner_Male.png"),
    avatar: require("../assets/General_Practioner_Male_Avatar.png"),
    description: "Doctor of the highest qualification category",
    experiences: " 700",
    greeting:
      " Comprehensive treatment and lifestyle changes play an important role in early recovery, allowing patients to regain independence and normalcy.Patients who have had Coronary Artery Disease (CAD) or Valvular heart disease are at the risk of recurrent exacerbations and complications and should undergo long term treatments. For better recovery, they also need a supervised rehab program.",
  },
  {
    id: "3",
    firstname: "Neuro",
    lastname: "Rehab",
    professional: "Dermatologist",
    title: "Dermatologist",
    image: require("../assets/Dermatologist_Female.png"),
    avatar: require("../assets/Dermatologist_Female_Avatar.png"),
    description: "Doctor of the highest qualification category",
    experiences: "720",
    greeting:
      "Hi, my name is Mary Philips and my professional is Dermatologist. I have 30 years experience in this area that I promise I can help you to improve your current skin",
  },
  {
    id: "4",
    firstname: "Lung ",
    lastname: "Rehab",
    professional: "Internale Medicine",
    title: "Internale",
    image: require("../assets/Internale_Medicine_Male.png"),
    avatar: require("../assets/Internale_Medicine_Male_Avatar.png"),
    description: "Doctor of the highest qualification category",
    experiences: "700",
    greeting:
      "Hi, my name is Dan Davidson and my professional is Internale Medicine. I have 20 years experience in this area that I promise I can help you with your health problems",
  },
  {
    id: "5",
    firstname: "Carenting",
    lastname: "",
    professional: "Internale Medicine",
    title: "Internale",
    image: require("../assets/Internale_Medicine_Female.png"),
    avatar: require("../assets/Internale_Medicine_Female_Avatar.png"),
    description: "Doctor of the highest qualification category",
    experiences: "700",
    greeting:
      "Hi, my name is Emma Backer and my professional is Internale Medicine. I have 28 years experience in this area that I promise I can help you with your health problems",
  },
  {
    id: "6",
    firstname: "Tracheostomy",
    lastname: "Nursing",
    professional: "",
    title: "Herbal",
    image: require("../assets/Herbal_Medicine_Female.png"),
    avatar: require("../assets/Herbal_Medicine_Female_Avatar.png"),
    description: "Doctor of the highest qualification category",
    experiences: "700",
    greeting:
      "Hi, my name is Shi Zhuang and my professional is Herbal Medicine. I have 11 years experience in this area that I promise I can help you with your health problems",
  },
  {
    id: "7",
    firstname: "Palliative",
    lastname: "Nursing",
    professional: "",
    title: "Herbal",
    image: require("../assets/Herbal_Medicine_Male.png"),
    avatar: require("../assets/Herbal_Medicine_Male_Avatar.png"),
    description: "Doctor of the highest qualification category",
    experiences: "700",
    greeting:
      "Hi, my name is Long Lee and my professional is Herbal Medicine. I have 16 years experience in this area that I promise I can help you with your health problems",
  },
  {
    id: "8",
    firstname: "Geriatric",
    lastname: "Nursing",
    professional: "",
    title: "Geriatric nurses are registered nurses (RNs) who are educated and trained to care for elderly patients and understand their specific health needs",
    image: require("../assets/Infectious_Disease_Male_2.png"),
    avatar: require("../assets/Infectious_Disease_Male_2_Avatar.png"),
    description: "",
    experiences: "700",
    greeting:
      "Hi, my name is Erick Wilfrid and my professional is Infectious Disease. I have 22 years experience in this area that I promise I can help you with your health problems",
  },
//   {
//     id: "9",
//     firstname: "Bale",
//     lastname: "Orrell",
//     professional: "Infectious Disease",
//     title: "Infectious Disease",
//     image: require("../assets/Infectious_Disease_Male.png"),
//     avatar: require("../assets/Infectious_Disease_Male_Avatar.png"),
//     description: "Doctor of the highest qualification category",
//     experiences: "31 years",
//     greeting:
//       "Hi, my name is Bale Orrell and my professional is Infectious Disease. I have 31 years experience in this area that I promise I can help you with your health problems",
//   },
//   {
//     id: "10",
//     firstname: "Tylar",
//     lastname: "Gareth",
//     professional: "Surgeon",
//     title: "Surgeon",
//     image: require("../assets/Surgeon_Male.png"),
//     avatar: require("../assets/Surgeon_Male_Avatar.png"),
//     description: "Doctor of the highest qualification category",
//     experiences: "35 years",
//     greeting:
//       "Hi, my name is Tylar Gareth and my professional is Surgeon. I have 35 years experience in this area that I promise I can help you with your health problems",
//   },
//   {
//     id: "11",
//     firstname: "Taylor",
//     lastname: "Baker",
//     professional: "Surgeon",
//     title: "Surgeon",
//     image: require("../assets/Surgeon_Female.png"),
//     avatar: require("../assets/Surgeon_Female_Avatar.png"),
//     description: "Doctor of the highest qualification category",
//     experiences: "29 years",
//     greeting:
//       "Hi, my name is Taylor Backer and my professional is Surgeon. I have 29 years experience in this area that I promise I can help you with your health problems",
//   },
//   {
//     id: "12",
//     firstname: "Leyla",
//     lastname: "Elsi",
//     professional: "Veterinarian",
//     title: "Veterinarian",
//     image: require("../assets/Veterinarian_Female.png"),
//     avatar: require("../assets/Veterinarian_Female_Avatar.png"),
//     description: "Doctor of the highest qualification category",
//     experiences: "5 years",
//     greeting:
//       "Hi, my name is Leyla Elsi and my professional is Veterinarian. I have 5 years experience in this area that I promise I can help you with your sweties",
//   },
//   {
//     id: "13",
//     firstname: "Kelvin",
//     lastname: "Dublin",
//     professional: "Veterinarian",
//     title: "Veterinarian",
//     image: require("../assets/Veterinarian_Male.png"),
//     avatar: require("../assets/Veterinarian_Male_Avatar.png"),
//     description: "Doctor of the highest qualification category",
//     experiences: "11 years",
//     greeting:
//       "Hi, my name is Kelvin Dublin and my professional is Veterinarian. I have 11 years experience in this area that I promise I can help you with your pets",
//   },
 ];

export default doctors;
