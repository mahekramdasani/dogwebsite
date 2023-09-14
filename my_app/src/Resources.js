import React from "react";
import Hand from './hand.png'
const Resources = () => {
  return (
    <>
      <header>
        <h1>Dog Resources</h1>
      </header>
      <div class="container">
        <div>
          <h2>
            <a href="https://www.ivaofficial.org/">
            <img src={Hand} width="30px" height="30px"/>
              Indian Veterinary Asscociation(IVA)
            </a>
          </h2>
          <p>
            Indian Veterinary Asscociation- Indian Veterinary Association is the
            apex organization of more than SIXTY THOUSAND veterinarians of the
            country spread over from Kashmir to Kanyakumari and Gujarat to
            Nagaland.
          </p>
        </div>
        <div>
          <h2>
            <a href="https://www.kennelclubofindia.org/">
            <img src={Hand} width="30px" height="30px"/>
            The Kennel Club of India (KCI)
            </a>
          </h2>
          <p>
          The official body for purebred pedigree dogs in India. Their website offers information on breed standards, kennel listings, and events.
          </p>
        </div>
        <div>
          <h2>
          <a
              href="http://www.bluecrossofindia.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Hand} width="30px" height="30px"/>
              Blue Cross of India
            </a>
          </h2>
          <p>
          A well-known animal welfare organization in India. Their website offers resources on animal welfare, adoption, and how to report cruelty cases.
          </p>
        </div>
        <div>
          <h2>
          <a
              href="http://www.dogspot.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Hand} width="30px" height="30px"/>
              DogSpot
            </a>
          </h2>
          <p>
          An Indian website dedicated to dogs, offering information on breeds, pet care, and an online store for pet products.
          </p>
        </div>
        <div>
          <h2>
          <a
              href="https://thepetnest.com/adopt-a-pet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Hand} width="30px" height="30px"/>
              The Pet Nest
            </a>
          </h2>
          <p>
          ThePetNest donates a portion of every service to Pet NGO's & Rescue shelters through this program. They also provide meals to shelter dogs in India.
          </p>
        </div>
        <div>
          <h2>
          <a
              href="https://www.justdial.com/Ahmedabad/Veterinary-Clinics/nct-10519261"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Hand} width="30px" height="30px"/>
              Local Veterinarians and Pet Clinics:
            </a>
          </h2>
          <p>
          List of local veterinarians and pet clinics in different Indian cities or regions. 
          </p>
        </div>
        <div>
          <h2>
          <a
              href="https://supertails.com/blogs/posts/10-popular-dog-food-brands-in-india-in-2022"
              target="_blank"
              rel="noopener noreferrer"
            ><img src={Hand} width="30px" height="30px"/>
              Indian Pet Food Brands
            </a>
          </h2>
          <p>
          Choosing the best canine food brand can be a daunting task.Choose dog food brands that have heart-healthy proteins and fatty acids.
          </p>
        </div>
        <div>
          <h2>
          <a
              href="https://www.cntraveller.in/story/31-perfect-pet-friendly-getaways-in-india/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Hand} width="30px" height="30px"/>
              Indian Pet-Friendly Destinations
            </a>
          </h2>
          <p>
          A list of the best pet-friendly hotels, villas and homestays in India to spend a restful vacation with your pet.
          </p>
        </div>
        <div>
          <h2>
          <a
              href="https://www.sheknows.com/living/articles/828189/5-online-pet-communities/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Hand} width="30px" height="30px"/>
              Online Pet Communities
            </a>
          </h2>
          <p>
          These pet communities provide pet owners with helpful resources while also providing an outlet to share as much or as little about your pet as you please.
          </p>
        </div>
      </div>
    </>
  );
};

export default Resources;
