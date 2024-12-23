<template>
    <div class="p-4 mx-auto max-h-vh my-5" dir="ltr">
        <h1 class="font-bold md:text-4xl text-mainColor text-center mb-6">Tasks Management</h1>
        <div class="h-[400px] overflow-scroll bg-mainColor text-center md:w-[70%] p-4 m-auto rounded-lg">
            <input class="p-1 border border-mainColor rounded-lg w-full bg-slate-200 mt-6"
                placeholder="search about task..." v-model="search" />
            <form @submit.prevent="handleSubmit">
                <div class="flex gap-3 my-4">
                    <input class="p-1 border border-mainColor rounded-lg w-full bg-slate-200" placeholder="Add Task..."
                        v-model="task.text" />
                    <button type="submit" class="px-2 py-1 font-bold bg-slate-200 rounded-lg">
                        {{ isEditMode ? 'Update' : 'Add' }}
                    </button>
                </div>
            </form>
            <div v-if="filteredTasks.length > 0">
                <ul>
                    <li v-for="(task, index) in filteredTasks" :key="task.id" class="p-2 bg-slate-200 mt-3 rounded-lg">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-2 my-2">
                                <input class="rounded-sm" type="checkbox" @click="toggleCompletion(task)"
                                    :checked="task.isDone" />
                                <h1 :class="{ 'line-through': task.isDone }" class="font-bold text-[20px]">
                                    {{ task.text }}
                                </h1>
                            </div>
                            <span class="text-[14px]">Created At: {{ task.createdAt }}</span>
                        </div>
                        <div class="icons flex gap-3">
                            <i class="fa-solid fa-trash text-red-600 cursor-pointer" @click="deleteTask(index)"></i>
                            <i class="fa-solid fa-pen-to-square text-blue-600 cursor-pointer"
                                @click="editTask(task)"></i>
                        </div>
                    </li>
                </ul>
            </div>
            <div v-else>
                <h1 class="font-bold text-slate-200 text-[22px]">No Tasks Added</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTaskStore } from '@/stores/TaskStore';
import { storeToRefs } from 'pinia';

const taskStore = useTaskStore();
const { task, search, isEditMode, filteredTasks } = storeToRefs(taskStore);
const { displayTasks, addTask, updateTask, deleteTask, toggleCompletion, editTask } = taskStore;


const handleSubmit = () => {
    if (isEditMode.value) {
        updateTask();
    } else {
        addTask();
    }
};

onMounted(() => {
    displayTasks();
});
</script>

<style>
.line-through {
    text-decoration: line-through;
}
</style>
