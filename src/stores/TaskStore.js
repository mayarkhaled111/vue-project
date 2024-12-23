import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', () => {
  const tasksList = ref([]);
  const task = ref({
    id: '',
    text: '',
    isDone: false,
    createdAt: new Date().toLocaleDateString(),
  });
  const search = ref('');
  const isEditMode = ref(false);
  const editIndex = ref(null);



  // to filter showed data after search
  const filteredTasks = computed(() => {
    return tasksList.value.filter(task =>
      task.text.toLowerCase().includes(search.value.toLowerCase())
    );
  });

  //  to display all data
  const displayTasks = () => {
    const tasksInLocalStorage = localStorage.getItem('tasks');
    if (tasksInLocalStorage) {
      tasksList.value = JSON.parse(tasksInLocalStorage);
    }
  };

   //  add task to local storage
  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasksList.value));
  };

  //   add task
  const addTask = () => {
    task.value.id = tasksList.value.length + 1;
    tasksList.value.push({ ...task.value });
    saveTasks();
    resetTask();
  };

  //   update task
  const updateTask = () => {
    if (editIndex.value !== null) {
      tasksList.value[editIndex.value].text = task.value.text;
      tasksList.value[editIndex.value].createdAt = new Date().toLocaleDateString();
      saveTasks();
      resetTask();
    }
  };

  //   delete task
  const deleteTask = (index) => {
    tasksList.value.splice(index, 1);
    saveTasks();
  };

  //   to make task done or not
  const toggleCompletion = (task) => {
    task.isDone = !task.isDone;
    saveTasks();
  };

  //   to edit tasks
  const editTask = (editedTask) => {
    task.value = { ...editedTask };
    isEditMode.value = true;
    editIndex.value = tasksList.value.findIndex(t => t.id === editedTask.id);
  };

  //   to reset values
  const resetTask = () => {
    task.value = {
      id: '',
      text: '',
      isDone: false,
      createdAt: new Date().toLocaleDateString(),
    };
    isEditMode.value = false;
    editIndex.value = null;
  };

  return {
    tasksList,
    task,
    search,
    isEditMode,
    editIndex,
    filteredTasks,
    displayTasks,
    saveTasks,
    addTask,
    updateTask,
    deleteTask,
    toggleCompletion,
    editTask,
    resetTask,
  };
});
