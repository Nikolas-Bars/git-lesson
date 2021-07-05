import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={'/dialogs/' + props.id} className={s.dialog}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Victor'},
        {id: '6', name: 'Valera'}
    ]

    let messages = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your it kamasutra?'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'Yo'},
        {id: '5', message: 'Yo'},
        {id: '6', message: 'Yo'}
    ]


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElement = messages.map(m => <Message message={m.message} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
           {/*     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Victor' id='5'/>
                <DialogItem name='Valera' id='6'/>*/}
            </div>
            <div className={s.messages}>
                {messagesElement}
              {/*  <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message='Yo'/>
                <Message message='Yo'/>
                <Message message='Yo'/>*/}
            </div>
        </div>
    )
}

export default Dialogs;