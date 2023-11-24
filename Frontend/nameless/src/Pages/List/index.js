import "./style.css";
import InitLayout from "../../components/Layout/InitLayout";
import { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";


const ListNotes = () => {
      
  const apiUrl = process.env.REACT_APP_BASE_URL;

  const [data, setData] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const handleEditClick = () => {

    console.log("Edit button clicked");
  };

  const handleItemClick = (item) => {

    
    const updatedSelectedItems = selectedItems.includes(item.id)
      ? selectedItems.filter((id) => id !== item.id)
      : [...selectedItems, item.id];

    setSelectedItems(updatedSelectedItems);
  };

  const handleDeleteClick = (key_id) => {
    const url = `${apiUrl}/notes/delete/${key_id}`;
    const authToken = localStorage.getItem("authToken");
   
      try {
        const response = fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        });
       
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      
    };
 

  useEffect(() => {

    const url = `${apiUrl}/notes/me/`;
    const authToken = localStorage.getItem("authToken");
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        });
        const result = await response.json();

        
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <InitLayout>
        <div className="login-container ">
          <div className="home-box exp page-con">
            <div className="rig-lef-con ">
              <div className="right-side">
                <div className="login-con note-cons">
                  <h2 className="back">WELCOME BACK!</h2>
                </div>
                {data ? (
                  <ul>
                    {data.map((item) => (
                      <li key={item.id}>
                  
                        <div className="login-con note-cons note-con-extra" onClick={handleItemClick}>
                          <div>
                            <h1 className="title">Title: {item.title}</h1>
                          </div>
                          <div>
                            <h3 className="date">Date: {item.time_stamp}</h3>
                          </div>
                          <div className="custom-div">
                            <p className="custom-text" >{item.content}</p>
                        </div>
                          <div>
                            <RiDeleteBin6Line
                              onClick={() => handleDeleteClick(item.id)} 
                              className="icon-delete"
                            />
                         
                          </div>
                        </div>
                    
                      </li>
                    ))}
                  </ul>
                ) : (
                  
                  <p>Loading.... seems you dont have much data login and create a note</p>
                )}
              </div>
            </div>
          </div>
        </div>{" "}
      </InitLayout>
    </>
  );
};

export default ListNotes;

// export default ListNotes;
