import React from "react";

function PairingTable({ pairings }) {
  return (
    <div className="pairingTable">
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          {pairings.map((pairing) => {
            return (
              <tr>
                <td>{pairing.email_1}</td>
                <td>{pairing.email_2}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PairingTable;

// const tableRows = pairingJSON.data.map((row) => {
//     return `<tr><td>${row.email_1}</td><td>${row.email_2}</td></tr>`;
//   });
//   tableBody.innerHTML = tableRows.join("");
// });
