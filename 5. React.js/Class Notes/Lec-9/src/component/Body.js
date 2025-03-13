import { useEffect, useState, useCallback } from "react";

function Body() {
  const [profiles, setProfiles] = useState([]); // Store fetched profiles
  const [profileCount, setProfileCount] = useState(""); // User input for profile count
  const [searchInput, setSearchInput] = useState(""); // User input for search
  const [searchProfile, setSearchProfile] = useState(null); // Store searched profile details
  const [errorMsg, setErrorMsg] = useState(""); // Store error messages

  // useCallback to memoize the generateProfiles function
  const generateProfiles = useCallback(async (count) => {
    const randomStart = Math.floor(Math.random() * 10000);

    try {
      const response = await fetch(
        `https://api.github.com/users?since=${randomStart}&per_page=${count}`
      );
      if (!response.ok) throw new Error("Failed to fetch profiles");

      const data = await response.json();
      setProfiles(data);
      setErrorMsg(""); // Clear any previous errors
    } catch (error) {
      setErrorMsg(error.message);
      setProfiles([]); // Clear profiles in case of an error
    }
  }, []); // Empty dependency array means it's memoized once and won't be recreated

  // useEffect to fetch profiles on mount
  useEffect(() => {
    generateProfiles(10);
  }, [generateProfiles]); // Now it's a stable dependency

  // useCallback to memoize findProfile function
  const findProfile = useCallback(async (username) => {
    if (!username.trim()) {
      setErrorMsg("Please enter a valid GitHub username.");
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Profile not found");

      const data = await response.json();
      setSearchProfile(data);
      setErrorMsg(""); // Clear any previous errors
    } catch (error) {
      setErrorMsg(error.message);
      setSearchProfile(null);
    }
  }, []);

  return (
    <>
      {/* Input Section */}
      <div className="inputs">
        {/* Render Profiles */}
        <div className="render-btn">
          <input
            type="number"
            max={100}
            value={profileCount}
            onChange={(e) => setProfileCount(e.target.value)}
          />
          <button onClick={() => generateProfiles(Number(profileCount))}>
            Render Profiles
          </button>
        </div>

        {/* Search Profile */}
        <div className="search-btn render-btn">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={() => findProfile(searchInput)}>
            Search Profile
          </button>
        </div>
      </div>

      {/* Error Message Display */}
      {errorMsg && <div className="error">{errorMsg}</div>}

      {/* Profile Display */}
      {searchProfile ? (
        // Show searched profile
        <div className="card-container">
          <div key={searchProfile.id} className="card">
            <img src={searchProfile.avatar_url} alt="Profile Avatar" />
            <h2>{searchProfile.login}</h2>
            <a
              href={searchProfile.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              See My Profile
            </a>
          </div>
        </div>
      ) : (
        // Show multiple profiles if no search is active
        <div className="card-container">
          {profiles.map((obj) => (
            <div key={obj.id} className="card">
              <img src={obj.avatar_url} alt="Profile Avatar" />
              <h2>{obj.login}</h2>
              <a href={obj.html_url} target="_blank" rel="noopener noreferrer">
                See My Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Body;
