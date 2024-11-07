import Button from "./Button";

function UserHeader() {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <Button className="edit-button" type="button">
        Edit Name
      </Button>
    </div>
  );
}

export default UserHeader;
