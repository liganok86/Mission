import React from 'react';
import {Link} from 'react-router';
import MissionListStore from '../stores/MissionListStore';
import MissionListActions from '../actions/MissionListActions';

class MissionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = MissionListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    MissionListStore.listen(this.onChange);
    var para = this.props.para;
    MissionListActions.getMissions(para);
  }

  componentWillUnmount() {
    MissionListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }


  render() {
    let missionList = this.state.missions.map((mission, index) => {
      return (
        <div key={mission._id} id={mission._id} className='list-group-item animated fadeIn'>
          <h4 className='media-heading'>
            <input type='checkbox' checked={mission.isDone}
                   onChange={MissionListActions.changeStatus}></input>
            <Link to={'plan/' + mission._id}>   {mission.name}</Link>
          </h4>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className="row flipInX">
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className='list-group'>
                {missionList}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MissionList;


