const getData = (arg, set) => {
    fetch(`https://al-quran1.p.rapidapi.com/${arg}`, {
      headers: {
        "X-RapidAPI-Key": "d898598db1msh859ad83d205b1e5p1e9bd7jsnac876b39bc23",
        "X-RapidAPI-Host": "al-quran1.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => set(data));
  };



  const getNine = async (arg) => {
    const result = await fetch(`https://al-quran1.p.rapidapi.com/`+arg,
    {

      headers: {
        "X-RapidAPI-Key": "d898598db1msh859ad83d205b1e5p1e9bd7jsnac876b39bc23",
        "X-RapidAPI-Host": "al-quran1.p.rapidapi.com",
      },
    }
    );
    return result.json();    
  };

export {getData,getNine};