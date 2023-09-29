import agility from "../data/images/agility.jpeg";
import brain from "../data/images/brain.jpg";
import diy from "../data/images/diy.jpg";
import indoor from "../data/images/indoor.jpg";
import outdoor from "../data/images/outdoor.jpg";
import social from "../data/images/social.jpg";
import trick from "../data/images/trick.png";

import agility1 from "../data/images/agility1.jpg";
import agility2 from "../data/images/agility2.webp";
import agility3 from "../data/images/agility3.jpg";

import brain1 from "../data/images/brain1.jpg";
import brain2 from "../data/images/brain2.jpg";
import brain3 from "../data/images/brain3.webp";

import diy1 from "../data/images/diy1.jpg";
import diy2 from "../data/images/diy2.jpeg";
import diy3 from "../data/images/diy3.jpg";

import indoor1 from "../data/images/indoor1.jpg";
import indoor2 from "../data/images/indoor2.jpg";
import indoor3 from "../data/images/indoor3.jpg";

import outdoor1 from "../data/images/outdoor1.jpg";
import outdoor2 from "../data/images/outdoor2.jpg";
import outdoor3 from "../data/images/outdoor3.png";

import social1 from "../data/images/social1.jpeg";
import social2 from "../data/images/social2.jpeg";
import social3 from "../data/images/social3.jpg";

import trick1 from "../data/images/trick1.webp";
import trick2 from "../data/images/trick2.avif";
import trick3 from "../data/images/trick3.jpg";


export const activitycarousel = [
  { name: "Outdoor Activities", id: 0, imgs: [outdoor1, outdoor2, outdoor3] },
  { name: "Indoor Activities", id: 1, imgs: [indoor1, indoor2, indoor3] },
  { name: "Social Activities", id: 2, imgs: [social1, social2, social3] },
  { name: "Brain Activities", id: 3, imgs: [brain1, brain2, brain3] },
  { name: "Agility Activities", id: 4, imgs: [agility1, agility2, agility3] },
  { name: "DIY Activities", id: 5, imgs: [diy1, diy2, diy3] },
  { name: "Trick Activities", id: 6, imgs: [trick1, trick2, trick3] },
];
export const activities = [
  {
    name: "Outdoor Activities",
    description: "Engage in outdoor adventures with your dog",
    img: outdoor,
    id: 0,
  },
  {
    name: "Indoor Activities",
    description: "Enjoy indoor fun on rainy days or when staying cozy at home",
    img: indoor,
    id: 1,
  },
  {
    name: "Social Activities",
    description: "Connect with other dog owners and socialize your pup",
    img: social,
    id: 2,
  },
  {
    name: "Brain Activities",
    description: "Challenge your dog's intelligence with these brain games",
    img: brain,
    id: 3,
  },
  {
    name: "Agility Activities",
    description: "Engage in agility training for physical and mental exercise",
    img: agility,
    id: 4,
  },
  {
    name: "DIY Dog Toys",
    description: "Get creative and make your own dog toys",
    img: diy,
    id: 5,
  },
  {
    name: "Trick Activities",
    description: "Teach your dog fun and impressive tricks",
    img: trick,
    id: 6,
  },
];

export const trainingdata = [
  {
    title: "Basic Obedience Training",
    description:
      "Basic obedience training is essential for a well-behaved dog. Here are some tips:",
    steps: [
      "Start with simple commands like sit, stay, and come.",
      "Use positive reinforcement techniques, rewarding your dog with treats and praise.",
      "Be patient and consistent in your training sessions.",
    ],
    videoId: "jFMA5ggFsXU",
  },
  {
    title: "Housebreaking",
    description:
      "Housebreaking your dog can be challenging but necessary. Follow these steps:",
    steps: [
      "Establish a regular schedule for feeding and bathroom breaks.",
      "Take your dog outside frequently, especially after meals and naps.",
      "When your dog goes outside, reward them with praise and treats.",
    ],
    videoId: "xpzjtHPQpOk",
  },
  {
    title: "Leash Training",
    description:
      "Leash training is important for controlling your dog during walks. Follow these tips:",
    steps: [
      "Choose the right leash and collar or harness for your dog's size and breed.",
      "Start training in a quiet, distraction-free area and gradually progress to busier environments.",
      "Use treats and positive reinforcement to reward your dog for walking politely on a leash.",
    ],
    videoId: "OwN0Ub3TWsk",
  },
  {
    title: "Socialization",
    description:
      "Socializing your dog is crucial for their well-being. Here's how to do it:",
    steps: [
      "Expose your dog to different people, animals, and environments from a young age.",
      "Arrange playdates with other dogs to encourage positive interactions.",
      "Always supervise socialization sessions to ensure safety.",
    ],
    videoId: "1a9yorJRPpk",
  },
  {
    title: "Barking Issues",
    description: "If your dog barks excessively, try these solutions:",
    steps: [
      "Identify the cause of the barking (e.g., boredom, fear, territorial behavior).",
      "Train your dog to respond to a 'quiet' command and reward them for silence.",
      "Consider professional training or consult a vet if the problem persists.",
    ],
    videoId: "GTi71Je1g_I",
  },
  {
    title: "Separation Anxiety",
    description:
      "Dealing with separation anxiety can be challenging. Here are some strategies:",
    steps: [
      "Gradually increase the time your dog spends alone to help them get used to it.",
      "Provide toys or puzzles to keep your dog occupied while you're away.",
      "Consult a veterinarian or dog behaviorist for severe cases of separation anxiety.",
    ],
    videoId: "Vps9Es0T_5E",
  },
];
export const faqdata = [
  {
    id: "flush1",
    target: "target1",
    q: "What are the most popular dog breeds?",
    a: "Some of the most popular dog breeds include Labrador Retrievers, German Shepherds, Golden Retrievers, and Bulldogs, among others. Popularity can vary by region and year.",
  },
  {
    id: "flush2",
    target: "target2",
    q: "How long do dogs live?",
    a: "The average lifespan of a dog is around 10 to 13 years, but this can vary depending on the breed, size, and overall health of the dog.",
  },
  {
    id: "flush3",
    target: "target3",
    q: "How can I train my dog?",
    a: "Dog training involves positive reinforcement techniques, consistency, and patience. You can consider enrolling in obedience classes or working with a professional dog trainer.",
  },
  {
    id: "flush4",
    target: "target4",
    q: "What should I feed my dog?",
    a: "Dogs should be fed a balanced diet that includes high-quality dog food. The specific type of food may vary based on your dog's age, size, and health needs. Consult your veterinarian for guidance.",
  },
  {
    id: "flush5",
    target: "target5",
    q: "How often should I exercise my dog?",
    a: "Dogs require regular exercise to stay healthy and happy. The amount of exercise needed depends on the breed and age of the dog, but daily walks and playtime are generally recommended.",
  },
  {
    id: "flush6",
    target: "target6",
    q: "How do I house train my puppy?",
    a: "House training involves establishing a routine, rewarding good behavior, and supervising your puppy. Consistency is key. Crate training can also be useful.",
  },
  {
    id: "flush7",
    target: "target7",
    q: "What vaccinations does my dog need?",
    a: "Dogs typically need core vaccinations against diseases like rabies, distemper, and parvovirus. The specific vaccines required may vary by region and your dog's lifestyle. Consult your vet for a vaccination schedule.",
  },
  {
    id: "flush8",
    target: "target8",
    q: "How can I groom my dog at home?",
    a: "Grooming needs depend on the breed. Regular brushing, nail trimming, and occasional bathing are common grooming tasks. For specific breeds, professional grooming may be necessary.",
  },
  {
    id: "flush9",
    target: "target9",
    q: "Why does my dog bark excessively?",
    a: "Dogs bark for various reasons, including to communicate, alert to danger, or out of boredom. Excessive barking can be due to anxiety or behavioral issues and may require training.",
  },
  {
    id: "flush10",
    target: "target10",
    q: "What should I do if my dog shows signs of illness?",
    a: "If your dog displays signs of illness such as lethargy, loss of appetite, vomiting, diarrhea, or any unusual behavior, consult your veterinarian immediately.",
  },
  {
    id: "flush11",
    target: "target11",
    q: "Can dogs eat certain human foods?",
    a: "Some human foods are toxic to dogs, like chocolate, grapes, and onions. Always check with your vet before sharing any human food with your dog.",
  },
  {
    id: "flush12",
    target: "target12",
    q: "How can I socialize my dog with other dogs and people?",
    a: "Socialization is essential for dogs. Start early, expose your dog to different environments, people, and dogs. Consider puppy classes or group socialization sessions.",
  },
  {
    id: "flush13",
    target: "target13",
    q: "What's the best way to travel with my dog?",
    a: "When traveling with your dog, ensure they are safely secured in a carrier or harness. Plan for rest stops and bring food, water, and necessary supplies.",
  },
  {
    id: "flush14",
    target: "target14",
    q: "How do I choose the right dog for my lifestyle?",
    a: "Research different breeds and their characteristics. Consider your activity level, living situation, and the time you can devote to your dog",
  },
];
export const healthdata = [
  {
    heading: "Feeding Your Dog",
    paragraph:
      "Proper nutrition is essential for your dog's health. Follow these guidelines:",
    listItems: [
      "Choose a high-quality dog food that matches your dog's age, size, and activity level.",
      "Feed your dog on a consistent schedule and avoid overfeeding.",
      "Provide fresh water at all times.",
    ],
  },
  {
    heading: "Exercise and Playtime",
    paragraph:
      "Regular exercise keeps your dog physically and mentally fit. Here's what you can do:",
    listItems: [
      "Take daily walks or engage in active play sessions.",
      "Provide toys and puzzles to stimulate your dog's mind.",
      "Consider agility training or other activities that match your dog's energy level.",
    ],
  },
  {
    heading: "Grooming and Hygiene",
    paragraph:
      "Proper grooming helps keep your dog clean and healthy. Follow these grooming tips:",
    listItems: [
      "Brush your dog's coat regularly to prevent matting and reduce shedding.",
      "Trim your dog's nails to a safe length (or seek professional grooming).",
      "Check for signs of fleas, ticks, or skin issues during grooming sessions.",
    ],
  },
  {
    heading: "Regular Vet Check-ups",
    paragraph:
      "Regular visits to the veterinarian are essential for your dog's well-being. Here's what to expect:",
    listItems: [
      "Keep up with vaccinations and preventive care recommended by your vet.",
      "Schedule annual check-ups for overall health assessments.",
      "Discuss any concerns or changes in behavior with your vet promptly.",
    ],
  },
  {
    heading: "Dental Care",
    paragraph:
      "Oral health is crucial for your dog's overall well-being. Follow these dental care tips:",
    listItems: [
      "Brush your dog's teeth regularly with a dog-specific toothbrush and toothpaste.",
      "Provide dental chews or toys designed to promote oral health.",
      "Watch for signs of dental problems, such as bad breath or bleeding gums.",
    ],
  },
  {
    heading: "Flea and Tick Prevention",
    paragraph:
      "Protect your dog from parasites with these preventive measures:",
    listItems: [
      "Use flea and tick preventives recommended by your vet.",
      "Regularly check your dog for signs of ticks or fleas, especially during outdoor activities.",
      "Keep your dog's living environment clean and vacuum regularly.",
    ],
  },
  {
    heading: "First Aid Kit",
    paragraph:
      "Prepare a first aid kit for your dog in case of emergencies. Include the following items:",
    listItems: [
      "Adhesive bandages and gauze pads for wound care.",
      "Antiseptic wipes or solution.",
      "Tweezers for tick removal.",
      "Emergency contact information for your vet and a local animal hospital.",
    ],
  },
  {
    heading: "Senior Dog Care",
    paragraph:
      "As your dog ages, their care needs change. Here's how to care for a senior dog:",
    listItems: [
      "Visit the vet more frequently for senior check-ups.",
      "Adjust their diet to meet their changing nutritional needs.",
      "Provide comfortable bedding and consider mobility aids if necessary.",
    ],
  },
];
export const resdata = [
  {
    href: "https://www.ivaofficial.org/",
    resource: "Indian Veterinary Association(IVA)",
    info: "Indian Veterinary Association is the apex organization of more than SIXTY THOUSAND veterinarians of the country spread over from Kashmir to Kanyakumari and Gujarat to Nagaland.",
  },
  {
    href: "https://www.kennelclubofindia.org/",
    resource: "The Kennel Club of India (KCI)",
    info: "The official body for purebred pedigree dogs in India. Their website offers information on breed standards, kennel listings, and events.",
  },
  {
    href: "http://www.bluecrossofindia.org/",
    resource: "Blue Cross of India",
    info: "A well-known animal welfare organization in India. Their website offers resources on animal welfare, adoption, and how to report cruelty cases.",
  },
  {
    href: "http://www.dogspot.in/",
    resource: "DogSpot",
    info: "An Indian website dedicated to dogs, offering information on breeds, pet care, and an online store for pet products.",
  },
  {
    href: "https://thepetnest.com/adopt-a-pet",
    resource: "The Pet Nest",
    info: "ThePetNest donates a portion of every service to Pet NGO's & Rescue shelters through this program. They also provide meals to shelter dogs in India.",
  },
  {
    href: "https://www.justdial.com/Ahmedabad/Veterinary-Clinics/nct-10519261",
    resource: "Local Veterinarians and Pet Clinics:",
    info: "List of local veterinarians and pet clinics in different Indian cities or regions.",
  },
  {
    href: "https://supertails.com/blogs/posts/10-popular-dog-food-brands-in-india-in-2022",
    resource: "Indian Pet Food Brands",
    info: "Choosing the best canine food brand can be a daunting task.Choose dog food brands that have heart-healthy proteins and fatty acids.",
  },
  {
    href: "https://www.cntraveller.in/story/31-perfect-pet-friendly-getaways-in-india/",
    resource: "Indian Pet-Friendly Destinations",
    info: "A list of the best pet-friendly hotels, villas and homestays in India to spend a restful vacation with your pet.",
  },
  {
    href: "https://www.sheknows.com/living/articles/828189/5-online-pet-communities/",
    resource: "Online Pet Communities",
    info: "These pet communities provide pet owners with helpful resources while also providing an outlet to share as much or as little about your pet as you please.",
  },
];
