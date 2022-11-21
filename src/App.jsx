import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const user = async () => {
    await fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((res) => setData(res.results));
  };

  useEffect(() => {
    user();
  }, []);

  const getUser = data.map((el) => ({
    name: el.name.first,
    email: el.email,
    img: el.picture.large,
    age: el.dob.age,
  }));

  return (
    <div className="App">
      <main className="flex flex-col justify-center items-center w-full h-screen ">
        <div className="px-20 py-10 w-[400px] h-[400px] rounded-sm shadow-xl flex flex-col justify-center items-center">
          {getUser.map((el, i) => (
            <div key={i} className="flex flex-col items-center gap-y-3">
              <img className="rounded-full  " src={el.img} />
              <h1 className="font-bold text-2xl">Name : {el.name}</h1>
              <h1 className="font-bold text-xl"> {el.email}</h1>
              <h2 className="font-bold text-xl">Age : {el.age}</h2>
            </div>
          ))}
          <button
            className="px-4 py-3 rounded-md bg-slate-800 text-white my-5"
            onClick={user}
          >
            Click Here
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
