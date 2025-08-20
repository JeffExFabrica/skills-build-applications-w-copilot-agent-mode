import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Fetched teams:', results);
        console.log('API endpoint:', apiUrl);
      });
  }, [apiUrl]);

  return (
    <div className="card shadow mt-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-info">Équipes</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Nom</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, idx) => (
                <tr key={idx}>
                  <td>{team.name}</td>
                  <td>{team.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Teams;
