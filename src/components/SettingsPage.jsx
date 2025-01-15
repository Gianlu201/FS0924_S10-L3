import { Component } from 'react';
import MyNavbar from './MyNavbar';
import SettingsContent from './SettingsContent';

class SettingsPage extends Component {
  render() {
    return (
      <>
        <MyNavbar />
        <SettingsContent />
      </>
    );
  }
}

export default SettingsPage;
