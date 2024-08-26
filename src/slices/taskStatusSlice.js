import { createSlice } from '@reduxjs/toolkit';
import { TaskStatus } from '../utils/taskStatusEnum';

const initialTasks = [
    { name: "Todo List", endpoint: "/tasks/todo-list" },
    { name: "Signup Form", endpoint: "/tasks/signup-form" },
    { name: "Temperature Converter", endpoint: "/tasks/temperature-converter" },
    { name: "Progress Bar", endpoint: "/tasks/progress-bar" },
    { name: "Analog Clock", endpoint: "/tasks/analog-clock" },
    { name: "Job Board", endpoint: "/tasks/job-board" },
    { name: "Whack-a-mole", endpoint: "/tasks/whack-a-mole" },
    { name: "Tic-tac-toe", endpoint: "/tasks/tic-tac-toe" },
    { name: "Tabs", endpoint: "/tasks/tabs" },
    { name: "Image Carousel", endpoint: "/tasks/image-carousel" },
    { name: "Autocomplete", endpoint: "/tasks/autocomplete" },
    { name: "Dropdown Menu", endpoint: "/tasks/dropdown-menu" },
    { name: "Modal", endpoint: "/tasks/modal" },
    { name: "Accordion", endpoint: "/tasks/accordion" },
    { name: "Holy Grail", endpoint: "/tasks/holy-grail" },
    { name: "Pagination", endpoint: "/tasks/pagination" },
    { name: "Truncated Pagination", endpoint: "/tasks/truncated-pagination" },
    { name: "Infinite Scroll", endpoint: "/tasks/infinite-scroll" },
    { name: "Configurable Color Boxes", endpoint: "/tasks/configurable-color-boxes" },
    { name: "Posts with Nested comments", endpoint: "/tasks/posts-with-nested-comments" },
    { name: "Star Rating", endpoint: "/tasks/star-rating" },
    { name: "Toast/Notification Comp", endpoint: "/tasks/toast-notification" },
    { name: "Autocompleted/Typeahead", endpoint: "/tasks/autocomplete-typeahead" }
];


const initialState = initialTasks.reduce(
    (acc, task) => ({ ...acc, [task.name]: TaskStatus.PENDING }),
    {}
);

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        cycleTaskStatus: (state, action) => {
            const taskName = action.payload;
            const currentStatus = state[taskName];
            const nextStatus = {
                [TaskStatus.PENDING]: TaskStatus.STARTED,
                [TaskStatus.STARTED]: TaskStatus.COMPLETED,
                [TaskStatus.COMPLETED]: TaskStatus.PENDING,
            }[currentStatus];

            state[taskName] = nextStatus;
        }
    }
});

export const { cycleTaskStatus } = taskSlice.actions;
export default taskSlice.reducer;
