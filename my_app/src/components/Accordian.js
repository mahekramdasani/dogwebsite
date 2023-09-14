import React from "react";
import './accordian.css'
const Accordian = () => {
  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header text-center" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What are the most popular dog breeds?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-center">
              Some of the most popular dog breeds include Labrador Retrievers,
              German Shepherds, Golden Retrievers, and Bulldogs, among others.
              Popularity can vary by region and year.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              How long do dogs live?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              The average lifespan of a dog is around 10 to 13 years, but this
              can vary depending on the breed, size, and overall health of the
              dog.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              How can I train my dog?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Dog training involves positive reinforcement techniques,
              consistency, and patience. You can consider enrolling in obedience
              classNamees or working with a professional dog trainer.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              What should I feed my dog?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            Dogs should be fed a balanced diet that includes high-quality dog food. The specific type of food may vary based on your dog's age, size, and health needs. Consult your veterinarian for guidance.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              How often should I exercise my dog?
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            Dogs require regular exercise to stay healthy and happy. The amount of exercise needed depends on the breed and age of the dog, but daily walks and playtime are generally recommended.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              How do I house train my puppy?
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            House training involves establishing a routine, rewarding good behavior, and supervising your puppy. Consistency is key. Crate training can also be useful.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              What vaccinations does my dog need?
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSeven"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            Dogs typically need core vaccinations against diseases like rabies, distemper, and parvovirus. The specific vaccines required may vary by region and your dog's lifestyle. Consult your vet for a vaccination schedule.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
              How can I groom my dog at home?
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingEight"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            Grooming needs depend on the breed. Regular brushing, nail trimming, and occasional bathing are common grooming tasks. For specific breeds, professional grooming may be necessary.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseNine"
              aria-expanded="false"
              aria-controls="flush-collapseNine"
            >
              Why does my dog bark excessively?
            </button>
          </h2>
          <div
            id="flush-collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingNine"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            Dogs bark for various reasons, including to communicate, alert to danger, or out of boredom. Excessive barking can be due to anxiety or behavioral issues and may require training.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTen"
              aria-expanded="false"
              aria-controls="flush-collapseTen"
            >
              What should I do if my dog shows signs of illness?
            </button>
          </h2>
          <div
            id="flush-collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTen"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            If your dog displays signs of illness such as lethargy, loss of appetite, vomiting, diarrhea, or any unusual behavior, consult your veterinarian immediately.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingEleven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEleven"
              aria-expanded="false"
              aria-controls="flush-collapseEleven"
            >
              Can dogs eat certain human foods?
            </button>
          </h2>
          <div
            id="flush-collapseEleven"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingEleven"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            Some human foods are toxic to dogs, like chocolate, grapes, and onions. Always check with your vet before sharing any human food with your dog.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTweleve">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTweleve"
              aria-expanded="false"
              aria-controls="flush-collapseTweleve"
            >
              How can I socialize my dog with other dogs and people?
            </button>
          </h2>
          <div
            id="flush-collapseTweleve"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTweleve"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            Socialization is essential for dogs. Start early, expose your dog to different environments, people, and dogs. Consider puppy classNamees or group socialization sessions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThirteen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThirteen"
              aria-expanded="false"
              aria-controls="flush-collapseThirteen"
            >
              What's the best way to travel with my dog?
            </button>
          </h2>
          <div
            id="flush-collapseThirteen"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThirteen"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            When traveling with your dog, ensure they are safely secured in a carrier or harness. Plan for rest stops and bring food, water, and necessary supplies.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFourteen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFourteen"
              aria-expanded="false"
              aria-controls="flush-collapseFourteen"
            >
              How do I choose the right dog for my lifestyle?
            </button>
          </h2>
          <div
            id="flush-collapseFourteen"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFourteen"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            Research different breeds and their characteristics. Consider your activity level, living situation, and the time you can devote to your dog's care.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFifteen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFifteen"
              aria-expanded="false"
              aria-controls="flush-collapseFifteen"
            >
              Should I adopt or buy a dog?
            </button>
          </h2>
          <div
            id="flush-collapseFifteen"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFifteen"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            Both adopting from a shelter and buying from a reputable breeder are valid options. Adopting can save a dog's life, while buying can provide predictability in breed characteristics.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
