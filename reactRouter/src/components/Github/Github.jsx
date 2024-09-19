import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/sanjayypal")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex items-center m-4 rounded-xl bg-gray-600 text-white p-4 text-3xl justify-around w-auto">
        <img
        src={data.avatar_url}
        alt="avatar"
        width={200}
        className="rounded-full"
      />
      <div>
        Github Followers : {data.followers}
      </div>
    </div>
  );
}

export default Github;
