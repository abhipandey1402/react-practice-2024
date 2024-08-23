import React, { useState } from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const tasks = [
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


const TaskStatus = {
    PENDING: 'pending',
    STARTED: 'started',
    COMPLETED: 'completed'
};

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
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #6366F1, #A78BFA, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: var(--grey);
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
  color: #1F2937;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.25rem;
    color: var(--color);


  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const HomePage = () => {
    const navigate = useNavigate();
    const [taskStatuses, setTaskStatuses] = useState(
        tasks?.reduce((acc, task) => ({ ...acc, [task.name]: TaskStatus.PENDING }), {})
    );

    const cycleStatus = (task) => {
        const currentStatus = taskStatuses[task.name];
        const nextStatus = {
            [TaskStatus.PENDING]: TaskStatus.STARTED,
            [TaskStatus.STARTED]: TaskStatus.COMPLETED,
            [TaskStatus.COMPLETED]: TaskStatus.PENDING
        }[currentStatus];

        setTaskStatuses({ ...taskStatuses, [task.name]: nextStatus });
    };

    const handleTaskStatusClick = (task) => {
        cycleStatus(task);
    }

    const handleTaskClick = (task) => {
        navigate(task.endpoint)
    }

    return (
        <Wrapper>
            <StarryOverlay />
            <Container>
                <Title>React Practice Project</Title>
                <Description>Track your progress on these React tasks!</Description>
                <TaskGrid>
                    {tasks?.map((task) => (
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
                </TaskGrid>
            </Container>
        </Wrapper>
    );
};

export default HomePage;
