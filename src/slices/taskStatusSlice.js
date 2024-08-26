import { createSlice } from '@reduxjs/toolkit';
import { TaskStatus } from '../utils/taskStatusEnum';

const initialTasks = [
    { name: "Todo List", endpoint: "/tasks/todo-list", difficulty: "Easy" },
    { name: "Signup Form", endpoint: "/tasks/signup-form", difficulty: "Easy" },
    { name: "Temperature Converter", endpoint: "/tasks/temperature-converter", difficulty: "Easy" },
    { name: "Progress Bar", endpoint: "/tasks/progress-bar", difficulty: "Easy" },
    { name: "Analog Clock", endpoint: "/tasks/analog-clock", difficulty: "Easy" },
    { name: "Job Board", endpoint: "/tasks/job-board", difficulty: "Easy" },
    { name: "Whack-a-mole", endpoint: "/tasks/whack-a-mole", difficulty: "Easy" },
    { name: "Tic-tac-toe", endpoint: "/tasks/tic-tac-toe", difficulty: "Difficult" },
    { name: "Tabs", endpoint: "/tasks/tabs", difficulty: "Easy" },
    { name: "Image Carousel", endpoint: "/tasks/image-carousel", difficulty: "Easy" },
    { name: "Autocomplete", endpoint: "/tasks/autocomplete", difficulty: "Moderate" },
    { name: "Dropdown Menu", endpoint: "/tasks/dropdown-menu", difficulty: "Moderate" },
    { name: "Modal", endpoint: "/tasks/modal", difficulty: "Moderate" },
    { name: "Accordion", endpoint: "/tasks/accordion", difficulty: "Moderate" },
    { name: "Holy Grail", endpoint: "/tasks/holy-grail", difficulty: "Easy" },
    { name: "Pagination", endpoint: "/tasks/pagination", difficulty: "Moderate" },
    { name: "Truncated Pagination", endpoint: "/tasks/truncated-pagination", difficulty: "Moderate" },
    { name: "Infinite Scroll", endpoint: "/tasks/infinite-scroll", difficulty: "Moderate" },
    { name: "Configurable Color Boxes", endpoint: "/tasks/configurable-color-boxes", difficulty: "Easy" },
    { name: "Posts with Nested comments", endpoint: "/tasks/posts-with-nested-comments", difficulty: "Difficult" },
    { name: "Star Rating", endpoint: "/tasks/star-rating", difficulty: "Easy" },
    { name: "Toast/Notification Comp", endpoint: "/tasks/toast-notification", difficulty: "Difficult" },
    { name: "Autocompleted/Typeahead", endpoint: "/tasks/autocomplete-typeahead", difficulty: "Moderate" },
    { name: "Polyfills", endpoint: "/tasks/polyfills", difficulty: "Easy" },
    { name: "Debouncing / Throttle", endpoint: "/tasks/debouncing-throttle", difficulty: "Easy" },
    { name: "Currying", endpoint: "/tasks/currying", difficulty: "Easy" },
    { name: "flatten / Deep Copy / Shallow Copy / invert OBJECT", endpoint: "/tasks/flatten-deepcopy-shallowcopy-invertobject", difficulty: "Easy" },
    { name: "Stopwatch / Timer / Counter", endpoint: "/tasks/stopwatch-timer-counter", difficulty: "Easy" },
    { name: "Weather API / Geolocation API coordinates", endpoint: "/tasks/weatherapi-geolocationapi-coordinates", difficulty: "Easy" },
    { name: "To-do list with Redux slice/normal (useReducer)", endpoint: "/tasks/todo-list-redux-useReducer", difficulty: "Easy" },
    { name: "Context API", endpoint: "/tasks/context-api", difficulty: "Easy" },
    { name: "Like button", endpoint: "/tasks/like-button", difficulty: "Easy" },
    { name: "Dark-light mode", endpoint: "/tasks/dark-light-mode", difficulty: "Moderate" },
    { name: "Breadcrumbs", endpoint: "/tasks/breadcrumbs", difficulty: "Moderate" },
    { name: "Stepper", endpoint: "/tasks/stepper", difficulty: "Moderate" },
    { name: "Drag n drop", endpoint: "/tasks/drag-n-drop", difficulty: "Moderate" },
    { name: "Tic Tac Toe", endpoint: "/tasks/tic-tac-toe", difficulty: "Difficult" },
    { name: "Auto Suggestion", endpoint: "/tasks/auto-suggestion", difficulty: "Moderate" },
    { name: "useMemo / useEffect / useThrottle Hook", endpoint: "/tasks/usememo-useeffect-usethrottle", difficulty: "Moderate" },
    { name: "Password Generator -> JS", endpoint: "/tasks/password-generator-js", difficulty: "Moderate" },
    { name: "File Explorer / Nested Comments -> JS/React", endpoint: "/tasks/file-explorer-nested-comments-js-react", difficulty: "Difficult" }
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
