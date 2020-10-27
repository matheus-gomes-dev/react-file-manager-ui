import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import uploadsCommands from 'commands/uploads';
import UploadsTable from './component';

const mapStateToProps = state => ({
  isLoading: state.UploadsReducer.isLoading,
  uploads: state.UploadsReducer.uploads,
  page: state.UploadsReducer.page,
  count: state.UploadsReducer.count,
});
const mapDispatchToProps = dispatch => bindActionCreators(uploadsCommands, dispatch);

UploadsTable.propTypes = {
  isLoading: PropTypes.bool,
  uploads: PropTypes.array,
  page: PropTypes.number,
  count: PropTypes.number,
  loadUploads: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadsTable);