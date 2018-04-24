import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {
	makeSelectEditParam,
	makeSelectTransferData
} from './state/selectors'
import {setValue} from './state/actions'
import {makeSelectEditorData, makeSelectGroupNames} from 'containers/ListEditor/state/selectors'
import {
	setListName,
	createGroup,
	deleteGroup,
	editGroup,
	createChannel,
	deleteChannel,
	editChannel
} from 'containers/ListEditor/state/actions'

const mapProps = createStructuredSelector({
	playlistName: makeSelectEditorData(`playlistName`),
	leftGroup: makeSelectEditParam(`leftGroup`),
	rightGroup: makeSelectEditParam(`rightGroup`),
	groups: makeSelectGroupNames(),
	transferData: makeSelectTransferData()
})
const mapActions = dispatch => ({
	setValue: (name, value) => dispatch(setValue(name, value)),
	setListName: e => dispatch(setListName(e.target.value)),
	createGroup: value => dispatch(createGroup(value)),
	deleteGroup: value => dispatch(deleteGroup(value)),
	editGroup: data => dispatch(editGroup(data)),
	createChannel: data => dispatch(createChannel(data)),
	deleteChannel: id => dispatch(deleteChannel(id)),
	editChannel: data => dispatch(editChannel(data))
})

export default Component => connect(mapProps, mapActions)(Component)