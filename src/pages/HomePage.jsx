import React from 'react';
import { CheckCircle, Circle, Clock, GithubIcon } from 'lucide-react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { cycleTaskStatus } from '../slices/taskStatusSlice';
import { TaskStatus } from '../utils/taskStatusEnum';

const tasks = [
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
  { name: "Context API", endpoint: "/tasks/context-api", difficulty: "Easy" },
  { name: "Like button", endpoint: "/tasks/like-button", difficulty: "Easy" },
  { name: "Dark-light mode", endpoint: "/tasks/dark-light-mode", difficulty: "Moderate" },
  { name: "Breadcrumbs", endpoint: "/tasks/breadcrumbs", difficulty: "Moderate" },
  { name: "Stepper", endpoint: "/tasks/stepper", difficulty: "Moderate" },
  { name: "Drag n drop", endpoint: "/tasks/drag-n-drop", difficulty: "Moderate" },
  { name: "Auto Suggestion", endpoint: "/tasks/auto-suggestion", difficulty: "Moderate" },
  { name: "useMemo / useEffect / useThrottle Hook", endpoint: "/tasks/usememo-useeffect-usethrottle", difficulty: "Moderate" },
  { name: "Password Generator -> JS", endpoint: "/tasks/password-generator-js", difficulty: "Moderate" },
  { name: "File Explorer -> JS/React", endpoint: "/tasks/file-explorer", difficulty: "Difficult" }
];

console.log(tasks.length);

const statusIcons = {
  [TaskStatus.PENDING]: <Circle style={{ width: '1.5rem', height: '1.5rem', color: '#9CA3AF' }} />, // Gray-400
  [TaskStatus.STARTED]: <Clock style={{ width: '1.5rem', height: '1.5rem', color: '#FBBF24' }} />, // Yellow-500
  [TaskStatus.COMPLETED]: <CheckCircle style={{ width: '1.5rem', height: '1.5rem', color: '#10B981' }} /> // Green-500
};

// Styled Components
const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #6366F1, #A78BFA, #EC4899);
  padding: 1rem;
  position: relative;
  overflow: hidden;
`;

const StarryOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgcjE9IjEwMCUiIGN5PSIwIiBjej0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuNSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0idXJsKCNhKSI+PGNpcmNsZSBjeD0iMjAlIiBjeT0iMyUiIHI9IjEiLz48Y2lyY2xlIGN4PSI4NSUiIGN5PSIxOCUiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMCUiIGN5PSI0NSUiIHI9IjEiLz48Y2lyY2xlIGN4PSI5MCUiIGN5PSI3MCUiIHI9IjEiLz48Y2lyY2xlIGN4PSIzMCUiIGN5PSI4MCUiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCUiIGN5PSIzMCUiIHI9IjEiLz48Y2lyY2xlIGN4PSI3MCUiIGN5PSI5NSUiIHI9IjEiLz48L2c+PC9zdmc+');
  background-size: cover;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(3, 2, 19, 0.9);
  backdrop-filter: blur(16px);
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  z-index: 10;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  .githubIcon {
   color: white;
   border: 0.1rem solid #A78BFA;
   padding: 0.5rem;
   border-radius: 50%;
   width: 2rem;
   height: 2rem;
   cursor: pointer;

  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #6366F1, #A78BFA, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
`;

const Description = styled.p`
  color: lightgrey;
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  padding: 0 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1320px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const TaskGridMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
`;

const TaskCard = styled.div`
  background: rgba(3, 2, 19, 0.8);
  border-radius: 0.5rem;
  padding: 1rem 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  color: var(--color);


  &:hover {
    box-shadow: 0 3px 8px rgba(255, 255, 255, 0.25);
    background: rgba(3, 2, 19, 1);
  }
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color);

`;

const TaskTitle = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.25rem;
    color: var(--color);


  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;
const DifficultyTitle = styled.span`
  background: linear-gradient(to bottom right, #6366F1, #A78BFA, #EC4899);
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: 1.5rem;
`;


const Button = styled.button`
  background: linear-gradient(to bottom right, #6366F1, #A78BFA);
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: background 0.3s;
  position: absolute;
  top: 1rem;
  right: 1rem;

  &:hover {
  background: linear-gradient(to bottom right, #EC4899, #A78BFA, #6366F1);
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taskStatuses = useSelector(state => state.tasks);

  const handleTaskStatusClick = (task) => {
    dispatch(cycleTaskStatus(task.name));
  }

  const handleTaskClick = (task) => {
    navigate(task.endpoint)
  }

  const getTaskByDifficultyLevel = (difficulty) => {
    return tasks.filter(task => task.difficulty.toLowerCase() === difficulty.toLowerCase());
  }

  const openGithubRepo = () => {
    const url = "https://github.com/abhipandey1402/react-practice-2024"

    window.open(url, "_blank");
  }

  return (
    <Wrapper>
      <StarryOverlay />
      <Container>
        <Button onClick={() => navigate("/javascript-practice")}>Practice JavaScript</Button>
        <Title>React & JavaScript DOM Practice <GithubIcon className='githubIcon' onClick={openGithubRepo} /></Title>
        <Description>Track progress on these React & JavaScript DOM tasks!</Description>
        <TaskGridMain>
          {['Easy', 'Moderate', 'Difficult'].map((difficulty) => (
            <>
              <DifficultyTitle>{difficulty}</DifficultyTitle>
              <TaskGrid>
                {getTaskByDifficultyLevel(difficulty)?.map((task) => (
                  <TaskCard key={task?.name} onClick={() => handleTaskClick(task)}>
                    <TaskHeader>
                      <TaskTitle>{task?.name}</TaskTitle>
                      <span onClick={(e) => {
                        e.stopPropagation();  // Prevents the TaskCard onClick from being triggered
                        handleTaskStatusClick(task)
                      }}>{statusIcons[taskStatuses[task.name]]}</span>
                    </TaskHeader>
                  </TaskCard>
                ))}
              </TaskGrid></>
          ))}

        </TaskGridMain>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
