//* Coding Challenge:
//? Create a React application that demonstrates the use of props by building a simple profile card system. Each profile card should display a user's name, age, and a personalized greeting message. Additionally, use children to allow for flexible content inside each profile card.

//* Challenge Details:

//? Create a Main Component: Profile
// This component should render multiple ProfileCard components, each with different user data and children elements.

//? Create a ProfileCard Component:
// This component should accept props for the user's name, age, and a personalized greeting message (as JSX).
// The component should also use children to render additional content inside the card.

//* Requirements:

//? Props Usage:
// Pass the user's name, age, and a personalized greeting message as props to the ProfileCard component.

//? Children Prop:
// Use children to allow for flexible content inside the ProfileCard component, such as additional text, images, or buttons.

//? Dynamic Content:
// The personalized greeting message should be a JSX element passed as a prop.
// Styling:

// Add basic CSS to style the profile cards for better visual presentation.

//todo Visualization Link:- https://app.eraser.io/workspace/vsIvJzUZ65l6DBJLYDZw?origin=share

export default function Profile() {
  return (
    <div>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
          <span>
            <strong>Hi Alice, have a wonderful day!</strong>
          </span>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Bob"
        age={25}
        greeting={
          <span>
            <strong>Hello Bob, keep up the great work!</strong>
          </span>
        }
      >
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

// function ProfileCard(props) {
//   return (
//     <>
//       <h2>Name: {props.name}</h2>
//       <p>Age: {props.age}</p>
//       <p>{props.greeting}</p>
//       <div>{props.children}</div>
//     </>
//   );
// }

function ProfileCard({ name, age, greeting, children }) {
  //   const { name, age, greeting, children } = props;

  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  );
}
