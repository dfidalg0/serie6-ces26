import { connect } from 'react-redux';
import classes from '../styles/keyboard.module.css';

function Keyboard({ digit, clear, evaluate }){
    const keys = [
        [ '1', '2', '3', '+' ],
        [ '4', '5', '6', '-' ],
        [ '7', '8', '9', '*' ],
        [ '⌫', '0', '⏎', '/' ]
    ];

    function action(key){
        if (key.match(/\d|\+|-|\*|\//)){
            return () => digit(key);
        }
        else if (key === '⌫'){
            return clear;
        }
        else if (key === '⏎'){
            return evaluate;
        }
    }

    return <div>
        { keys.map((row, i) => <div key={`row-${i}`}>
            { row.map((key, j) =>
            <button key={key}
                className={classes.key}
                onClick={action(key)}
                style={ (i === 3 && j === 0) ?
                    { borderBottomLeftRadius: '5pt' } :
                    (i === 3 && j === 3) ?
                        { borderBottomRightRadius: '5pt' } : null
                }
            >
                {key}
            </button>) }
        </div>) }
    </div>
}

export default connect(
    null,
    dispatch => ({
        evaluate: () => dispatch({ type: 'EVAL' }),
        clear: () => dispatch({ type: 'CLEAR' }),
        digit: (key) => dispatch({ type: 'DIGIT', payload: { key } })
    })
)(Keyboard);
