import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView';
import config from '@arcgis/core/config';
import { useState, useEffect, useRef } from 'react';
import Bookmarks from '../Bookmarks/Bookmarks';
import './MainMap.css';

export default function MainMap(props) {

  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  const map = useRef({});
  const view = useRef({});

  useEffect(() => {
    config.apiKey = "AAPKec41709bcb0a44d5afac9a207940f737tnKLVZnxQk1sEujpLdeBOOJBrRxAI6GaCiIerWY0SQEuy_cSMaF6eBH0p7CITZAk";

    map.current = new Map({
      basemap: "hybrid",
    });

    view.current = new MapView({
      zoom: 3, //Zoom Level can be Between 0 to 23
      center: [79.69, 57.97], //longitude, latitude
      container: "map",
      map: map.current
    });
  }, [])

  function handleBookmarksClick() {
    setPopupIsOpen(!popupIsOpen);

  }

  function showLocation(id) {
    const location = bookmarks.find(bookmark => bookmark.id === id).extent;
    view.current.goTo(location);
  }

  function createBookmark(name) {
    setBookmarks([{ id: Date.now(),name, extent: view.current.extent }, ...bookmarks]);
  }

  function deleteBookmark(id) {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  }

  function editBookmark(bookmark, newName) {
    for (let i = 0; i < bookmarks.length; i++) {
      if (bookmarks[i].id === bookmark.id) {
        bookmarks[i].name = newName;
        break;
      }
    }

  }

  return (
    <div id='map' className="map">
      <button type='button' className={`map__button ${popupIsOpen ? 'map__button_active' : ''}`} onClick={handleBookmarksClick}>Закладки</button>
      {popupIsOpen &&
        <Bookmarks
          bookmarks={bookmarks}
          showLocation={showLocation}
          onCreateBookmark={createBookmark}
          onDeleteBookmark={deleteBookmark}
          onEditBookmark={editBookmark} />}
    </div>
  )
}