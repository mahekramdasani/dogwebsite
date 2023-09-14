import React, { useState } from "react";
import Hand from "./hand.png";
const Training = () => {
  const arr = [
    { 0: "jFMA5ggFsXU" },
    { 1: "xpzjtHPQpOk" },
    { 2: "OwN0Ub3TWsk" },
    { 3: "1a9yorJRPpk" },
    { 4: "GTi71Je1g_I" },
    { 5: "Vps9Es0T_5E" },
  ];
  const [video, setVideo] = useState("jFMA5ggFsXU");
  function handleClick(i) {
    const new_item = arr.filter((value) => {
      if (Object.keys(value)[0] == i) {
        return true;
      }
      return false;
    });
    console.log(new_item[0]);
    setVideo(Object.values(new_item[0])[0]);
  }
  return (
    <>
      <header>
        <h1>Dog Training and Behavior</h1>
      </header>
      <div className="row">
        <div className="container col-lg-7 p-5 train">
          <h1>
            <img src={Hand} width="30px" height="30px" />
            <a
              href="#"
              onClick={() => {
                handleClick(0);
              }}
            >
              Basic Obedience Training
            </a>
          </h1>
          <p>
            Basic obedience training is essential for a well-behaved dog. Here
            are some tips:
          </p>
          <ul>
            <li>Start with simple commands like sit, stay, and come.</li>
            <li>
              Use positive reinforcement techniques, rewarding your dog with
              treats and praise.
            </li>
            <li>Be patient and consistent in your training sessions.</li>
          </ul>
          <h1>
            <img src={Hand} width="30px" height="30px" />
            <a
              href="#"
              onClick={() => {
                handleClick(1);
              }}
            >
              Housebreaking
            </a>
          </h1>
          <p>
            Housebreaking your dog can be challenging but necessary. Follow
            these steps:
          </p>
          <ol>
            <li>
              Establish a regular schedule for feeding and bathroom breaks.
            </li>
            <li>
              Take your dog outside frequently, especially after meals and naps.
            </li>
            <li>
              When your dog goes outside, reward them with praise and treats.
            </li>
          </ol>
          <h1>
            <img src={Hand} width="30px" height="30px" />
            <a
              href="#"
              onClick={() => {
                handleClick(2);
              }}
            >
              Leash Training
            </a>
          </h1>
          <p>
            Leash training is important for controlling your dog during walks.
            Follow these tips:
          </p>
          <ol>
            <li>
              Choose the right leash and collar or harness for your dog's size
              and breed.
            </li>
            <li>
              Start training in a quiet, distraction-free area and gradually
              progress to busier environments.
            </li>
            <li>
              Use treats and positive reinforcement to reward your dog for
              walking politely on a leash.
            </li>
          </ol>
          <h1>
            <img src={Hand} width="30px" height="30px" />
            <a
              href="#"
              onClick={() => {
                handleClick(3);
              }}
            >
              Socialization
            </a>
          </h1>
          <p>
            Socializing your dog is crucial for their well-being. Here's how to
            do it:
          </p>
          <ol>
            <li>
              Expose your dog to different people, animals, and environments
              from a young age.
            </li>
            <li>
              Arrange playdates with other dogs to encourage positive
              interactions.
            </li>
            <li>Always supervise socialization sessions to ensure safety.</li>
          </ol>
          <h1>
            <img src={Hand} width="30px" height="30px" />
            <a
              href="#"
              onClick={() => {
                handleClick(4);
              }}
            >
              Barking Issues
            </a>
          </h1>
          <p>If your dog barks excessively, try these solutions:</p>
          <ol>
            <li>
              Identify the cause of the barking (e.g., boredom, fear,
              territorial behavior).
            </li>
            <li>
              Train your dog to respond to a "quiet" command and reward them for
              silence.
            </li>
            <li>
              Consider professional training or consolt a vet if the problem
              persists.
            </li>
          </ol>
          <h1>
            <img src={Hand} width="30px" height="30px" />
            <a
              href="#"
              onClick={() => {
                handleClick(5);
              }}
            >
              Separation Anxiety
            </a>
          </h1>
          <p>
            Dealing with separation anxiety can be challenging. Here are some
            strategies:
          </p>
          <ol>
            <li>
              Gradually increase the time your dog spends alone to help them get
              used to it.
            </li>
            <li>
              Provide toys or puzzles to keep your dog occupied while you're
              away.
            </li>
            <li>
              Consolt a veterinarian or dog behaviorist for severe cases of
              separation anxiety.
            </li>
          </ol>

          <h2>Additional Resources</h2>
          <p>
            For more in-depth information and training resources, consider
            checking out the following:
          </p>
          <ol>
            <li>
              <a
                href="https://www.akc.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                American Kennel Club (AKC)
              </a>{" "}
              - Offers training tips and resources for various breeds.
            </li>
            <li>
              <a
                href="https://www.aspca.org/pet-care/dog-care"
                target="_blank"
                rel="noopener noreferrer"
              >
                ASPCA Dog Care
              </a>{" "}
              - Provides comprehensive information on dog care and training.
            </li>
          </ol>
        </div>
        <div className="col-lg-5 p-5">
          <iframe
            width="500"
            height="315"
            src={`https://www.youtube.com/embed/${video}?controls=1&autoplay=1&mute=1`}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Training;
