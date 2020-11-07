import { connect } from 'react-redux';
import classes from '../styles/screen.module.css';

function Screen({ display, preview, style }){
    return <div className={classes.root}>
        <div className={classes.display}>
            {display}
        </div>
        <div className={classes.preview}>
            {preview}
        </div>
    </div>
}

export default connect(
    state => ({
        display: state.display,
        preview: state.preview
    })
)(Screen);
