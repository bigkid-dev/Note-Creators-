import { Link } from "react-router-dom";
import "./style.css";
import InitLayout from "../../components/Layout/InitLayout";

const Notes = () => {

  const apiUrl = process.env.REACT_APP_BASE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      content: e.target.content.value,
    };

    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(`${apiUrl}/notes/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.href = "/notes/me/";
      } else if (response.status == 401) {
        window.location.href = "/login/";
      } else {
        const data = await response.json();
        alert(data.non_field_errors);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <>
      <InitLayout>
        <div className="login-container ">
          <div className="home-box exp page-con">
            <div className="rig-lef-con ">
              <div className="left-side-home ali">
                <h1 className="text-heading">Seamless and Secure Notes!!!</h1>
              </div>
              <div className="right-side">
                <div className="login-con note-cons">
                  <h2 className="back">WELCOME BACK!</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="lab-inp">
                      <label htmlFor="">Input the Title for your Notes </label>
                      <input name="title" type="text" className="inp" />
                    </div>
                    <div className="lab-inp">
                      <label htmlFor="">Content</label>
                      <textarea
                        name="content"
                        type="text"
                        className="inp content-inp"
                        placeholder="Write your post here..."
                        rows="5" //
                        cols="30"
                      />
                    </div>

                    <div className="lo-btn join-us-btn ">
                      {/* <Link to={"/"}> */}
                      <button type="submit" className="l-btn">
                        Create
                      </button>
                      {/* </Link> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </InitLayout>
    </>
  );
};

export default Notes;
