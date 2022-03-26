import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const useButton = makeStyles({
    root: {
        background: 'linear-gradient(65deg, red 30%, black 80%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

const useStyles = makeStyles({
    root: {
        border: '2px solid red',
        borderTop: 'none',
        borderRadius: 3,
        height: 48,
        margin: '80px 0 20px',
    },
});

// =========


export const UiForm = () => {

    const inputElement = useRef(null);

    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }, [handleSubmit]);

    const [mass, setMass] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const target = e.target;
        const auther = target.auther.value;
        const text = target.text.value;

        setMass((prev) => [...prev, {
            id: givLastID(prev),
            auther: auther,
            text: text,
        }]);
        setTimeout(() => {
            target.auther.value = ''
            target.text.value = ''
        }, 1000)
    }

    function givLastID(arr) {
        return arr.length ? arr[arr.length - 1].id + 1 : 0;
    }

    useEffect(() => {
        setTimeout(() => {
            robot(mass);
        }, 1500);
    }, [mass]);

    function robot() {
        const lastAuther = mass[mass.length - 1];
        if (lastAuther && lastAuther.auther) {
            setMass(prev => [...prev, {
                id: givLastID(prev),
                text: `Сообщение ${lastAuther.auther} отправленно`
            }]);
        }
    }

    const classes = useButton();
    const input = useStyles();

    return (
        <>
            <FormControl component="form" onSubmit={handleSubmit}>
                <InputLabel style={{ margin: 20 }} htmlFor="my-input">Email address</InputLabel>
                <Input className={input.root} id="my-input" aria-describedby="my-helper-text" name="auther" ref={inputElement} />
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Minimum 10 rows"
                    style={{ width: 200 }}
                    name="text"
                />
                <Button className={classes.root} variant="contained" type='submit'>Text</Button>
            </FormControl>
            <div className="message-list">
                {mass.map(message => <div className="message-list__item" key={message.id}>
                    {message.author && <p className="message-list__p"><span>Автор:</span> {message.author}</p>}
                    <p className="message-list__p">{message.author && <span>Текст:</span>} {message.text}</p>
                </div>)}
            </div>
        </>
    )
}

export default UiForm;