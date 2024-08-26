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

import Polyfills from './components/taskComponents/Polyfills';
import DebouncingThrottle from './components/taskComponents/DebouncingThrottle';
import Currying from './components/taskComponents/Currying';
import FlattenDeepCopyShallowCopyInvertObject from './components/taskComponents/FlattenDeepCopyShallowCopyInvertObject';
import StopwatchTimerCounter from './components/taskComponents/StopwatchTimerCounter';
import WeatherApiGeolocationApiCoordinates from './components/taskComponents/WeatherApiGeolocationApiCoordinates';
import ContextApi from './components/taskComponents/ContextApi';
import LikeButton from './components/taskComponents/LikeButton';
import DarkLightMode from './components/taskComponents/DarkLightMode';
import Breadcrumbs from './components/taskComponents/Breadcrumbs';
import Stepper from './components/taskComponents/Stepper';
import DragNDrop from './components/taskComponents/DragNDrop';
import AutoSuggestion from './components/taskComponents/AutoSuggestion';
import UseMemoUseEffectUseThrottleHook from './components/taskComponents/UseMemoUseEffectUseThrottleHook';
import PasswordGenerator from './components/taskComponents/PasswordGenerator';
import FileExplorer from './components/taskComponents/FileExplorer';

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

          <Route path="/tasks/polyfills" element={<Polyfills />} />
          <Route path="/tasks/debouncing-throttle" element={<DebouncingThrottle />} />
          <Route path="/tasks/currying" element={<Currying />} />
          <Route path="/tasks/flatten-deepcopy-shallowcopy-invertobject" element={<FlattenDeepCopyShallowCopyInvertObject />} />
          <Route path="/tasks/stopwatch-timer-counter" element={<StopwatchTimerCounter />} />
          <Route path="/tasks/weatherapi-geolocationapi-coordinates" element={<WeatherApiGeolocationApiCoordinates />} />
          <Route path="/tasks/context-api" element={<ContextApi />} />
          <Route path="/tasks/like-button" element={<LikeButton />} />
          <Route path="/tasks/dark-light-mode" element={<DarkLightMode />} />
          <Route path="/tasks/breadcrumbs" element={<Breadcrumbs />} />
          <Route path="/tasks/stepper" element={<Stepper />} />
          <Route path="/tasks/drag-n-drop" element={<DragNDrop />} />
          <Route path="/tasks/auto-suggestion" element={<AutoSuggestion />} />
          <Route path="/tasks/usememo-useeffect-usethrottle" element={<UseMemoUseEffectUseThrottleHook />} />
          <Route path="/tasks/password-generator-js" element={<PasswordGenerator />} />
          <Route path="/tasks/file-explorer" element={<FileExplorer />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
