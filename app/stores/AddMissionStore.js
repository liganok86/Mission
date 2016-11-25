import alt from '../alt';
import AddMissionActions from '../actions/AddMissionActions';

class AddMissionStore { 
	constructor(){
		this.bindActions(AddMissionActions);
		this.missionName = '';
	}

	onAddMissionSuccess(successMessage) {

	}
}

export default alt.createStore(AddMissionStore);