import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../Components/Meetups/NewMeetupForm";

export default function NewMeetUpPage() {
  const navigate = useNavigate();

  const addMeetUpHandler = (meetupData) => {
    fetch(
      "https://react-getting-started-e2a3b-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      console.log(navigate);
      navigate("/");
      console.log(navigate);
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
}
