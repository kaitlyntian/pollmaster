import React, { useEffect, useState } from "react";
import BackButton from "../components/backButton";
import PollList from "../components/pollList";

const PollsListPage = () => {
  let [pollList, setPollList] = useState([]);
  let [loading, setLoading] = useState(false);

  const getPollList = async () => {
    let res = await fetch("/api/polls");
    if (res.ok) {
      let json = await res.json();
      setPollList(json);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getPollList();
  }, []);

  return (
    <div className="PollListPage">
      <div style={{ marginLeft: "2em" }}>
        <BackButton to="/" />
      </div>
      <h1 style={{ textAlign: "center" }}>Vote in some of the polls</h1>
      <hr className="mb-5" />
      {loading ? <div style={{ textAlign: "center" }}>...loading</div> : <PollList polls={pollList} />}
    </div>
  );
};

export default PollsListPage;
