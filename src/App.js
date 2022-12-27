import { LocationProvider, Router } from "@reach/router";
import Home from "./pages/Home";
import RecentListingPage from './pages/RecentListingPage';
import UpcomingListingPage from './pages/UpcomingListingPage';
import ItemPage from './pages/ItemPage';
import PopularCuratorPage from './pages/PopularCuratorPage';
import HotItemPage from './pages/HotItemPage';
import TopGalleryPage from './pages/TopGalleryPage';
import CollectionPage from './pages/CollectionPage';
import ApplyListing from './pages/ApplyListing';
import NotFound from './pages/NotFound';




function App() {
  return (
    <>
    <LocationProvider>
      <Router>
        <Home path='/' />
        <ApplyListing path='/apply' />
        <RecentListingPage path='/recent' />
        <PopularCuratorPage path='/popularcurator' />
        <HotItemPage path='/hotitems' />
        <TopGalleryPage path='/topgallery' />
        <CollectionPage path='/item/:id' />
        <ItemPage path='/token/:id' />
        <UpcomingListingPage path='/upcoming' />
        <NotFound path='*' />
      </Router>
    </LocationProvider>
    </>
  );
}

export default App;
