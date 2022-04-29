import "./Profile.css";
function Profile() {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            ></img>
            <h2 className="font-weight-bold">John Doe</h2>
            <h2 className="text-black-50">sample_email@mail.com</h2>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                ></input>
              </div>
              <div className="col-md-6">
                <label className="labels">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="last name"
                ></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter email address"
                ></input>
              </div>
            </div>
            <div className="mt-5 text-center">
              <a href="/dashboard">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </a>
            </div>
            <div className="mt-5 text-center">
              <a href="/">
                <button
                  type="button"
                  className="profile-button btn-primary btn"
                >
                  Delete Profile
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
