class ToDoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
    removeTask(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks.splice(index, 1);
      } else {
        console.log("Invalid index!");
      }
    }
  
    printTasks() {
      console.log("Tasks:");
      this.tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
  }
  const myToDoList = new ToDoList();
  myToDoList.addTask("Buy groceries");
  myToDoList.addTask("Do laundry");
  myToDoList.addTask("Study JavaScript");
  myToDoList.printTasks();
  myToDoList.removeTask(1);
  myToDoList.printTasks();
  