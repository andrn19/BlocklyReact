const List = {
    list: [
      {
        table: 1,
        tableStatus: "Done",
        policy: "Clean",
        lastClean: "12:00",
      },
      {
        table: 2,
        tableStatus: "Rejected",
        policy: "Get that pepper off there",
        lastClean: "8:00",
      },
      {
        table: 3,
        tableStatus: "In Progress,",
        policy: "Clear",
        lastClean: "10:00",
      },
      {
        table: 4,
        tableStatus: "Waiting",
        policy: "Clear",
        lastClean: "10:00",
      },
      {
        table: 5,
        tableStatus: "Waiting",
        policy: "Clear",
        lastClean: "10:00",
      },
      {
        table: 6,
        tableStatus: "Waiting",
        policy: "Clear",
        lastClean: "10:00",
      },
      {
        table: 7,
        tableStatus: "Waiting",
        policy: "Clear",
        lastClean: "10:00",
      },
      {
        table: 8,
        tableStatus: "Waiting",
        policy: "Clear",
        lastClean: "10:00",
      },
      {
        table: 9,
        tableStatus: "Waiting",
        policy: "Clear",
        lastClean: "10:00",
      },
    ],
    getList: function () {
      return (
        (localStorage.getItem("theList") &&
          JSON.parse(localStorage.getItem("theList"))) ||
        this.list
      );
    },
    saveList: (list) => {
      localStorage.setItem("theList", JSON.stringify(list));
    },
  };
  
  export default List;