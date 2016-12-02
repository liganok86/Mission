import alt from '../alt';
import ToDoMissionListActions from '../actions/ToDoMissionListActions';
import DoneMissionListActions from '../actions/DoneMissionListActions';

class DoneMissionListStore {
  constructor() {
    this.bindActions(DoneMissionListActions);
    this.bindAction(ToDoMissionListActions.updateMissionsSuccess, this.handleUpdateMissionsSuccess)
    this.missions = [];
    this.isDone;
    this.missionId = '';
  }

  onGetMissionsSuccess(data) {
    this.missions = data;
  }

  onChangeStatus(event) {
    this.isDone = event.target.checked;
    this.missionId = event.target.parentNode.parentNode.id;
    DoneMissionListActions.updateStatus(this.missionId, this.isDone);
  }

  onUpdateMissionsSuccess(data) {
    for (var i in this.missions) {
      if (this.missions[i]._id == this.missionId) {
        this.missions[i].isDone = this.isDone;
        this.missions.splice(i,1);
      }
    }
  }

  onUpdateMissionsFail(errorMessage) {
    alert(errorMessage);
  }

  handleUpdateMissionsSuccess(data){
    DoneMissionListActions.getMissions();
  }

}

export default alt.createStore(DoneMissionListStore);