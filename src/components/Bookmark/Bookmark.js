import { useState } from 'react';
import './Bookmark.css';

export default function Bookmark(props) {
    const [isEdit, setIsEdit] = useState(false);
    const [newName, setNewName] = useState(props.bookmark.name);

    function handleEditClick() {
        if (isEdit) {
            props.onEdit(props.bookmark, newName);
        }
        setIsEdit(!isEdit);
        setNewName(props.bookmark.name);
        
    }

    return (
        <li className="bookmarks__item">

            {isEdit
                ? <input type="text" className="bookmarks__name bookmarks__name_edit" value={newName} onChange={(e) => setNewName(e.target.value) }></input>
                : <p className="bookmarks__name" onClick={() => props.onClickBookmark(props.bookmark.id)}> {props.bookmark.name} </p>}
            <button type="button" className="bookmarks__delete-button" onClick={() => props.onDelete(props.bookmark.id)}></button>
            <button type="button" className="bookmarks__edit-button" onClick={handleEditClick}>{isEdit ? 'Сохранить' : 'Редактировать'}</button>

        </li>
    )
}