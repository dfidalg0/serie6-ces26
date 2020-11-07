import { createStore } from 'redux';
import { compile } from 'mathjs';

const baseState = {
    display: '',
    preview: ''
};

const operators = ['+', '-', '*', '/'];

function createPreview(display){
    try {
        const { evaluate } = compile(display);
        const preview = evaluate();
        return preview;
    }
    catch (err){
        if (err instanceof SyntaxError){
            alert('Expressão inválida');
        }
    }
}

function endsWithOperator(display){
    const lastDigit = display.slice(-1);
    return operators.includes(lastDigit);
}

const store = createStore((state = baseState, { type, payload }) => {
    if (type === 'CLEAR'){
        const display = state.display.slice(0,-1);

        if (display){
            const preview = createPreview(
                endsWithOperator(display) ?
                    display.slice(0,-1) :
                    display
            );

            state = { ...state, display, preview };
        }
        else state = { ...state, display, preview: '' };
    }
    else if (type === 'DIGIT') {
        if (operators.includes(payload.key)){
            const display = endsWithOperator(state.display) ?
                state.display.slice(0,-1) + payload.key :
                state.display ? state.display + payload.key : '';
            state = { ...state, display };
        }
        else {
            const display = state.display + payload.key;
            const preview = createPreview(display);

            state = { ...state, preview, display };
        }
    }
    else if (type === 'EVAL'){
        state = { ...state, display: String(state.preview) };
    }

    return state;
});

export default store;
