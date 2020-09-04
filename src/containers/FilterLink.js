import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link';

const mapStatetoProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStatetoProps, mapDispatchToProps)(Link);