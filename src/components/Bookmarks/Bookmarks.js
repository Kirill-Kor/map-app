import { useEffect, useState } from 'react';
import './Bookmarks.css';
import Bookmark from '../Bookmark/Bookmark';

export default function Bookmarks(props) {
    const [isNew, setIsNew] = useState(false);
    const [newBookmarkName, setNewBookmarkName] = useState('');
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState('');

    function showNewBookmark() {
        setIsNew(!isNew);
    }

    
    function createBookmark() {
        if (!newBookmarkName) {
            setIsError(true);
            setError('Название не может быть пустым')
        }
        else if (props.bookmarks.find((bookmark) => bookmark.name === newBookmarkName)) {
            setIsError(true);
            setError('Закладка с таким именем уже существует');
        }
        else {
            setNewBookmarkName('');
            props.onCreateBookmark(newBookmarkName);
        }
    }

    function editBookmark(bookmark, newName) {
        if (!newName) {
            setIsError(true);
            setError('Название не может быть пустым');
            setTimeout(() => setIsError(false), 4000);
            return;
        }
        if (props.bookmarks.find((bookmark) => bookmark.name === newName)) {
            return;
        }

        props.onEditBookmark(bookmark, newName);

    }

    function handleChangeText(e) {
        setNewBookmarkName(e.target.value);
        if (isError) setIsError(false);

    }

    return (
        <div className="bookmarks">
            <h2 className="bookmarks__title">Закладки</h2>
            <button className="bookmarks__new-button" type="button" onClick={showNewBookmark}>+</button>

            <div className={`bookmarks__new ${isNew ? 'bookmarks__new_visible' : ''}`}>
                <label className="bookmarks__new-title">Название</label>
                <input type="text" className="bookmarks__textbox" onChange={handleChangeText} value={newBookmarkName}></input>
                <button type="button" className="bookmarks__save-button" onClick={createBookmark}>Создать</button>
            </div>

            <ul className="bookmarks__list">
                {props.bookmarks.map(bookmark =>
                    <Bookmark 
                    key={bookmark.id} 
                    bookmark={bookmark} 
                    onDelete={props.onDeleteBookmark} 
                    onClickBookmark={props.showLocation} 
                    onEdit={editBookmark}
                    />
                )}
            </ul>
            {isError && <span className="bookmarks__error">{error}</span>}
        </div>
    )
}