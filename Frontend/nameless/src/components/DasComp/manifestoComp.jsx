import { useState } from "react";
import ManifestContent from "./manifestContent";

const ManiComp = () => {
  const [maniToggle, setManiToggle] = useState(false);
  const handleManiToggle = () => {
    setManiToggle(true);
  };
  return (
    <div className="maindas-box">
      <div className="acc-t">MANIFESTO</div>

      <div className="imp-box mani-b">
        {maniToggle ? (
          <ManifestContent />
        ) : (
          <div className="manifes-box">
            <table className="bod">
              <tr>
                <th>S/N</th>
                <th>NAME</th>
                <th>POST</th>
                <th>MANIFESTO LINK</th>
              </tr>
              <tr className="up-tr">
                <td>1</td>
                <td>Makinde Oluwapelumi</td>
                <td>President</td>
                <td className="heri" onClick={handleManiToggle}>
                  CLICK HERE
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Makinde Oluwapelumi</td>
                <td>Vice President</td>
                <td className="heri" onClick={handleManiToggle}>
                  CLICK HERE
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManiComp;
