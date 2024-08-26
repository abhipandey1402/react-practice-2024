import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoList from './components/taskComponents/TodoList';
import SignupForm from './components/taskComponents/SignupForm';
import TemperatureConverter from './components/taskComponents/TemperatureConverter';
import ProgressBar from './components/taskComponents/ProgressBar';
import AnalogClock from './components/taskComponents/AnalogClock';
import JobBoard from './components/taskComponents/JobBoard';
import WhackAMole from './components/taskComponents/WhackAMole';
import TicTacToe from './components/taskComponents/TicTacToe';
import Tabs from './components/taskComponents/Tabs';
import ImageCarousel from './components/taskComponents/ImageCarousel';
import Autocomplete from './components/taskComponents/Autocomplete';
import DropdownMenu from './components/taskComponents/DropdownMenu';
import Modal from './components/taskComponents/Modal';
import Accordion from './components/taskComponents/Accordion';
import HolyGrail from './components/taskComponents/HolyGrail';
import Pagination from './components/taskComponents/Pagination';
import TruncatedPagination from './components/taskComponents/TruncatedPagination';
import InfiniteScroll from './components/taskComponents/InfiniteScroll';
import ConfigurableColorBoxes from './components/taskComponents/ConfigurableColorBoxes';
import PostsWithNestedComments from './components/taskComponents/PostsWithNestedComments';
import StarRating from './components/taskComponents/StarRating';
import ToastNotification from './components/taskComponents/ToastNotification';
import AutocompleteTypeahead from './components/taskComponents/AutocompleteTypeahead';
import ScrollToTop from './components/globalComponents/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path="/tasks/todo-list" element={<TodoList />} />
          <Route path="/tasks/signup-form" element={<SignupForm />} />
          <Route path="/tasks/temperature-converter" element={<TemperatureConverter />} />
          <Route path="/tasks/progress-bar" element={<ProgressBar />} />
          <Route path="/tasks/analog-clock" element={<AnalogClock />} />
          <Route path="/tasks/job-board" element={<JobBoard />} />
          <Route path="/tasks/whack-a-mole" element={<WhackAMole />} />
          <Route path="/tasks/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/tasks/tabs" element={<Tabs />} />
          <Route path="/tasks/image-carousel" element={<ImageCarousel />} />
          <Route path="/tasks/autocomplete" element={<Autocomplete />} />
          <Route path="/tasks/dropdown-menu" element={<DropdownMenu />} />
          <Route path="/tasks/modal" element={<Modal />} />
          <Route path="/tasks/accordion" element={<Accordion />} />
          <Route path="/tasks/holy-grail" element={<HolyGrail />} />
          <Route path="/tasks/pagination" element={<Pagination />} />
          <Route path="/tasks/truncated-pagination" element={<TruncatedPagination />} />
          <Route path="/tasks/infinite-scroll" element={<InfiniteScroll />} />
          <Route path="/tasks/configurable-color-boxes" element={<ConfigurableColorBoxes />} />
          <Route path="/tasks/posts-with-nested-comments" element={<PostsWithNestedComments />} />
          <Route path="/tasks/star-rating" element={<StarRating />} />
          <Route path="/tasks/toast-notification" element={<ToastNotification />} />
          <Route path="/tasks/autocomplete-typeahead" element={<AutocompleteTypeahead />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
